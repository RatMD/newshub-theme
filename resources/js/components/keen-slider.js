
import query from '../utilities/query';
import KeenSlider from '../vendors/keen-slider';

/**
 * Initialize Hero Slider
 * @param {*} element 
 * @param {*} options 
 */
function mergeHeroSlider(options) {
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
 * Invoke KeenSlider
 * @param {*} element 
 * @param {*} options 
 */
function invokeKeenSlider(element, options = {})
{
    const plugins = [];

    // Handle Pre-Sets
    if ((options.preset || '') === 'hero') {
        options = mergeHeroSlider(options);
    }

    // Change Default Selector
    if (!('selector' in options)) {
        options.selector = '.keen-slider-slide';
    }

    // Animation Style
    if (typeof options.animation !== 'undefined') {
        if (options.animation === 'fade') {
            options.detailsChanged = (s) => {
                s.slides.forEach((element, idx) => {
                    element.style.opacity = s.track.details.slides[idx].portion
                });
            };
        } else if (options.animation === 'zoom') {
            
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
            el.addEventListener('click', (event) => slider.moveToIdx(parseInt(el.dataset.keenSliderIndicator)));
        });

        function updateIndicators(s) {

        }

        // Update Indicators
        updateIndicators(slider);
        slider.on("created", updateIndicators);
        slider.on("optionsChanged", updateIndicators);
        slider.on("slideChanged", updateIndicators);
    }
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
