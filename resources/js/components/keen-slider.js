
import query from '../utilities/query';
import KeenSlider from '../vendors/keen-slider';

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
        options.loop = true;
        options.slides = {
            perView: 1,
            spacing: 0
        };
        options.breakpoints = {
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
    }

    // Change Default Selector
    if (!('selector' in options)) {
        options.selector = '.keen-slider-slide';
    }

    // Initialize Keen Slider
    const slider = new KeenSlider(element, options, plugins);
    element.__keenSlider = slider;

    // Handle Pre-Sets
    if ((options.preset || '') === 'hero') {
        const container = element.parentElement;
        if (container.classList.contains('keen-slider-container')) {
            [].map.call(container.querySelectorAll('[data-keen-slider-control]'), (el) => {
                el.addEventListener('click', () => {
                    if (el.dataset.keenSliderControl === 'next') {
                        slider.next();
                    } else if (el.dataset.keenSliderControl === 'prev') {
                        slider.prev();
                    }
                });
            });

            function updateHeroIndicators(s) {
                const slide = s.track.details.abs;
                if (slide === 0) {
                    container.querySelector('[data-keen-slider-control="prev"]').disabled = true;
                } else {
                    container.querySelector('[data-keen-slider-control="prev"]').disabled = false;
                }
                console.log(slide + s.options.slides.perView, s.track.details.slides.length);
                if (slide + s.options.slides.perView === s.track.details.slides.length) {
                    container.querySelector('[data-keen-slider-control="next"]').disabled = true;
                } else {
                    container.querySelector('[data-keen-slider-control="next"]').disabled = false;
                }
            }
            updateHeroIndicators(slider);

            slider.on('created', updateHeroIndicators);
            slider.on('optionsChanged', updateHeroIndicators);
            slider.on('slideChanged', updateHeroIndicators);
        }
    }
}


// Export Ready Handler
export default () => {
    query('[data-keen-slider]').map(el => {
        let temp = el.dataset.keenSlider.trim();
        var options = {};
        if (temp.length > 0 && temp[0] === '{') {
            try {
                let handle = JSON.parse(temp);
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
