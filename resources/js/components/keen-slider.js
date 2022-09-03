
import query from '../utilities/query';
import KeenSlider from '../vendors/keen-slider';

/**
 * Initialize Hero Slider Options
 * @param {*} element 
 * @param {*} options 
 */
function mergeHeroSliderOptions(options) {
    return Object.assign({}, {
        loop: true,
        slides: {
            perView: 1,
            spacing: 0
        },
        breakpoints: {
            '(min-width: 768px)': {
                loop: false,
                slides: {
                    perView: 2,
                    spacing: 20
                }
            },
            '(min-width: 1024px)': {
                loop: false,
                slides: {
                    perView: 3,
                    spacing: 30
                }
            },
            '(min-width: 1400px)': {
                loop: false,
                slides: {
                    perView: 3,
                    spacing: 50
                }
            },
        }
    }, options);
}

/**
 * Autoplay Plugin
 * @source https://codesandbox.io/s/github/rcbyr/keen-slider-sandboxes/tree/v6/autoplay/autoswitch/javascript?file=/index.html
 * @param {object} custom
 * @param {KeenSliderInstance} slider 
 */
function autoplayPlugin(custom, slider) {
    let timeout;
    let mouseOver = false;

    function clearNextTimeout() {
        clearTimeout(timeout);
    }

    function nextTimeout() {
        clearTimeout(timeout);
        if (mouseOver) {
            return;
        }
        timeout = setTimeout(() => {
            slider.next();
        }, custom.autoplayInterval);
    }

    slider.on("created", () => {
        slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
        });
        slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
        });
        nextTimeout();
    });

    slider.on("dragStarted", clearNextTimeout);
    slider.on("animationEnded", nextTimeout);
    slider.on("updated", nextTimeout);
}

/**
 * Marquee Plugin
 * @source https://codesandbox.io/s/github/rcbyr/keen-slider-sandboxes/tree/v6/autoplay/automove/javascript?file=/index.html:885-1358
 * @param {object} custom 
 * @param {KeenSliderInstance} slider 
 */
function marqueePlugin(custom, slider) {
    let animation = { 
        duration: custom.autoplayInterval, 
        easing: (t) => t 
    };
    let mouseOver = false;
    let amount = slider.slides.length - 1;

    function clearAnimation() {
        slider.animator.stop();
    }

    function startAnimation() {
        slider.moveToIdx(slider.track.details.abs + amount, true, animation);
    }

    slider.on("created", (s) => {
        s.moveToIdx(amount, true, animation);
        
        slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearAnimation();
        });

        slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            startAnimation();
        });
    });

    slider.on("animationEnded", (s) => {
        slider.animator.stop();
        slider.moveToIdx(slider.track.details.abs + amount, true, animation);
    });

    slider.on("updated", (s) => {
        slider.animator.stop();
        slider.moveToIdx(slider.track.details.abs + amount, true, animation);
    });
}

/**
 * Invoke KeenSlider
 * @param {*} element 
 * @param {*} options 
 */
function invokeKeenSlider(element, options = {})
{
    const plugins = [];

    // Handle Pre-Sets
    if ((options.preset || '') === 'hero') {
        options = mergeHeroSliderOptions(options);
    }
    const custom = Object.assign({
        animation: 'slide',
        autoplay: false,
        autoplayStyle: 'stops',
        autoplayInterval: 5000
    }, options._newshub);
    delete options._newshub;

    // Change Default Selector 
    // @info We aren't against BAM css class names, but it doesn't fit to bootstrap
    if (!('selector' in options)) {
        options.selector = '.keen-slider-slide';
    }

    // Animation Style
    // @info Keep sure the class name `keen-slider-{style}` is set on the main element.
    // @source https://codesandbox.io/s/github/rcbyr/keen-slider-sandboxes/tree/v6/media/fader/javascript?file=/index.html
    // @source https://codesandbox.io/s/github/rcbyr/keen-slider-sandboxes/tree/v6/media/zoom-out/javascript?file=/index.html
    if (typeof custom.animation !== 'undefined') {
        if (custom.animation === 'fade') {
            options.loop = true;
            options.detailsChanged = (s) => {
                s.slides.forEach((element, idx) => {
                    element.style.opacity = s.track.details.slides[idx].portion
                });
            };
            options.renderMode = 'custom';
        } else if (custom.animation === 'zoom') {
            function scaleElement(element, portion) {
                let scale_size = 0.7
                let scale = 1 - (scale_size - scale_size * portion)
                let style = `scale(${scale})`
                element.style.transform = style
                element.style["-webkit-transform"] = style
            }

            options.loop = true;
            options.detailsChanged = (s) => {
                const slides = s.track.details.slides
                s.slides.forEach((element, idx) => {
                    scaleElement(element.querySelector(".slide-image"), slides[idx].portion)
                    scaleElement(element.querySelector(".slide-content"), slides[idx].portion)
                })
            };
        }
    }

    // Responsive Configuration for multiple slides / view
    if (typeof options.slides !== 'undefined' && options.slides.perView > 1) {
        let perView = options.slides.perView;
        let spacing = options.slides.spacing;

        options.breakpoints = {
            '(min-width: 768px)': {
                loop: false,
                slides: {
                    perView: Math.max(2, perView-2),
                    spacing: spacing * 0.5
                }
            },
            '(min-width: 1024px)': {
                loop: false,
                slides: {
                    perView: Math.max(3, perView-1),
                    spacing: spacing * 0.75
                }
            },
            '(min-width: 1400px)': {
                loop: false,
                slides: {
                    perView: perView,
                    spacing: spacing
                }
            },
        };
        options.slides = {
            perView: 1,
            spacing: 0
        };
    }

    // Add Autoplay Plugin
    if (custom.autoplay) {
        if (custom.autoplayStyle === 'marquee') {
            plugins.push(marqueePlugin.bind(this, custom));
            options.loop = true;
            options.renderMode = "performance";
            options.drag = false;

            if (typeof options.breakpoints !== 'undefined') {
                for (let key in options.breakpoints) {
                    options.breakpoints[key].loop = true;
                }
            }
        } else {
            plugins.push(autoplayPlugin.bind(this, custom));
        }
    }

    // Initialize Keen Slider
    const slider = new KeenSlider(element, options, plugins);
    element.__keenSlider = slider;

    // Handle Controls
    if (element.hasAttribute('data-keen-controls')) {
        let controls;
        if (element.dataset.keenControls.trim().length > 0) {
            controls = document.querySelectorAll(element.dataset.keenControls.trim());
        } else {
            controls = element.querySelectorAll('[data-keen-slider-control]');
        }

        [].map.call(controls, (el) => {
            el.addEventListener('click', (event) => {
                event.preventDefault();
                let navi = el.dataset.keenSliderControl;

                if (navi === 'next') {
                    slider.next();
                } else if (navi === 'prev' || navi === 'previous') {
                    slider.prev();
                } else if (!isNaN(parseInt(navi, 10))) {
                    slider.moveToIdx(parseInt(navi, 10));
                }
            });
        });

        function updateControls(s) {
            const slide = s.track.details.abs;
            [].map.call(controls, (el) => {
                if (s.options.loop) {
                    el.disabled = false;
                } else {
                    let navi = el.dataset.keenSliderControl;
                    if (navi === 'next') {
                        el.disabled = slide + s.options.slides.perView === s.track.details.slides.length;
                    } else if (navi === 'prev' || navi === 'previous') {
                        el.disabled = slide === 0;
                    }
                }
            });
        }

        // Update Controls
        updateControls(slider);
        slider.on("created", updateControls);
        slider.on("optionsChanged", updateControls);
        slider.on("slideChanged", updateControls);
    }
    
    // Handle Indicators
    if (element.hasAttribute('data-keen-indicators')) {
        let indicators;
        if (element.dataset.keenIndicators.trim().length > 0) {
            indicators = document.querySelectorAll(element.dataset.keenIndicators.trim());
        } else {
            indicators = element.querySelectorAll('[data-keen-slider-indicator]');
        }

        [].map.call(indicators, (el) => {
            el.addEventListener('click', (event) => {
                event.preventDefault();
                slider.moveToIdx(parseInt(el.dataset.keenSliderIndicator))
            });
        });

        function updateIndicators(s) {
            const number = s.options.slides.perView;
            const amount = s.track.details.slides.length;

            // Rebuild Indicators
            if (indicators.length !== (amount / number)) {
                let buttons = [];
                for (let i = 0; i < amount / number; i++) {
                    let button = indicators[0].cloneNode(true);
                    button.dataset.keenSliderIndicator = i.toString();
                    button.addEventListener('click', (event) => {
                        event.preventDefault();

                        let num = parseInt(button.dataset.keenSliderIndicator);
                        slider.moveToIdx(num * number);
                    });
                    buttons.push(button);
                }

                // Set new Indicators
                let parent = indicators[0].parentElement;
                parent.innerHTML = '';
                parent.append(...buttons);
                indicators = buttons;
            }

            // Set Active State
            const slide = s.track.details.rel / number;
            [].map.call(indicators, (el, idx) => {
                el.classList[idx === slide? 'add': 'remove']('active');
            });
        }

        // Update Indicators
        updateIndicators(slider);
        slider.on("created", updateIndicators);
        slider.on("optionsChanged", updateIndicators);
        slider.on("slideChanged", updateIndicators);
    }

    // Handle Multiple Slides
    function updateMultipleClass(s) {
        console.log(s.options);
    }
    slider.on("created", updateMultipleClass);
    slider.on("optionsChanged", updateMultipleClass);
}


// Export Ready Handler
export default () => {
    query('[data-keen-slider]').map(el => {
        let temp = el.dataset.keenSlider.trim();
        var options = {};

        if (temp.length > 0 && temp[0] === '{') {
            try {
                let jsonParser = typeof ocJSON === 'function' ? ocJSON : 
                                 typeof (oc || {}).parseJSON === 'function' ? oc.parseJSON : 
                                 JSON.parse;

                let handle = jsonParser(temp);
                if (typeof handle === 'object') {
                    options = handle;
                }
            } catch(e) {
                console.error(`The KeenSlider data property is not a valid JSON: '${temp}'`);
            }
        }

        invokeKeenSlider(el, options);
    });
};
