import query from '../utilities/query';
import ready from '../utilities/ready';


/**
 * Invoke KeenSlider
 * @param {*} element 
 * @param {*} options 
 */
function invokeKeenSlider(element, options = {})
{



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
    ready(() => {
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
    })
};
