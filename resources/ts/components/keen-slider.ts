import type { KeenSliderInstance, KeenSliderOptions, KeenSliderPlugin } from 'keen-slider';
import KeenSlider from 'keen-slider';
import { isBoolean, toBoolean } from '../utilities/boolean';
import parseJson from "../utilities/json";
import query from "../utilities/query";
import ready from "../utilities/ready";

interface KeenSliderNewsHubConfig {
    
    /**
     * Number of Slides per View
     */
    amount: number;
    
    /**
     * Animation Style
     */
    animation: 'slide' | 'fade' | 'zoom' | 'marquee';
    
    /**
     * Toggle Autoplay Behavior
     */
    autoplay: boolean;

    /**
     * Create or Use Controls
     */
    controls: boolean | string;

    /**
     * Create or Use Indicators
     */
    indicators: boolean | string;
    
    /**
     * Set Slide Animation Interval
     */
    interval: number;
    
    /**
     * Loop after last slide
     */
    loop: boolean;
    
    /**
     * Set spacing between multiple slides (when amount is larger then 1)
     */
    spacing: number;
    
    /**
     * Touch / Drag Support
     */
    touch: boolean;
    
    /**
     * Core KeenSlider options
     */
    keenSlider: Partial<KeenSliderOptions>;

}


/**
 * Keen Slider 4 NewsHub
 */
class KeenSliderNewsHub {

    /**
     * Available default options for KeenSliderNewsHub
     * 
     * amount           Number of slides per view for the lg breakpoint (downsizes automatically)
     * animation        Desired animation style: 'slide', 'fade', 'zoom' or 'marquee'
     * autoplay         Turn autoplay on or off
     * interval         Interval in ms after the next slide is shown
     * loop             Loop - Show the first slide after the last one
     * spacing          Amount of spacing in px for multiple slides
     * keenSlider       Native keenSlider options to merge
     */
    public static defaults: KeenSliderNewsHubConfig = {
        amount: 1,
        animation: 'slide',
        autoplay: false,
        controls: false,
        interval: 2002,
        indicators: false,
        loop: true,
        spacing: 30,
        touch: true,
        keenSlider: {} 
    }

    /**
     * Hold all created instances.
     */
    public static instances: Map<HTMLElement, KeenSliderNewsHub> = new Map;

    /**
     * Get instance by HTMLElement
     * @param element 
     */
    public static getInstance(element: HTMLElement) {
        if (this.instances.has(element)) {
            return this.instances.get(element);
        } else {
            throw new Error('The passed HTMLElement has not been initialized yet.');
        }
    }

    /**
     * Get or Create an instance
     * @param element 
     * @param options 
     */
    static getOrCreateInstance(element: HTMLElement, options: Partial<KeenSliderNewsHubConfig> = {}) {
        if (this.instances.has(element)) {
            return this.instances.get(element);
        } else {
            return new this(element, options);            
        }
    }

    /**
     * Root Element
     */
    public root: HTMLElement;

    /**
     * Instance Configuration
     */
    public config: KeenSliderNewsHubConfig;

    /**
     * Keen Slider Instance
     */
    public slider: KeenSliderInstance;

    /**
     * Create a new KeenSliderNewsHub instance
     * @param element 
     * @param options 
     */
    constructor(element: HTMLElement, options: Partial<KeenSliderNewsHubConfig> = {}) {
        if (KeenSliderNewsHub.instances.has(element)) {
            throw new Error('The passed HTMLElement has already been initialized.');
        }
        KeenSliderNewsHub.instances.set(element, this);

        // Merge Configuration
        this.root = element;
        this.config = Object.assign({}, KeenSliderNewsHub.defaults, options);
        let keenSliderOptions: KeenSliderOptions = Object.assign({}, this.config.keenSlider);
        let keenSliderPlugins: KeenSliderPlugin[] = [];

        // Configure Amount & Spacings
        if (this.config.amount) {
            if (typeof keenSliderOptions.slides === 'number') {
                keenSliderOptions.slides = {
                    perView: keenSliderOptions.slides,
                };
            }
            if (typeof keenSliderOptions.slides === 'undefined' || typeof keenSliderOptions.slides === 'object') {
                keenSliderOptions.slides ??= {};
                keenSliderOptions.slides.perView ??= this.config.amount;
                keenSliderOptions.slides.spacing ??= this.config.spacing;
            }
        }
        keenSliderOptions = this.forceResponsiveBreakpoints(keenSliderOptions);

        // Configure Animation
        switch (this.config.animation) {
            case 'fade':
                keenSliderPlugins.push(this.pluginFade.bind(this));
                keenSliderOptions.renderMode = 'custom';
                break;
            case 'zoom':
                keenSliderPlugins.push(this.pluginZoom.bind(this));
                break;
            case 'marquee':
                keenSliderPlugins.push(this.pluginMarquee.bind(this));
                keenSliderOptions.drag = false;
                keenSliderOptions.loop = true;
                keenSliderOptions.renderMode = "performance";
                
                if (typeof keenSliderOptions.breakpoints !== 'undefined') {
                    for (let key in keenSliderOptions.breakpoints) {
                        keenSliderOptions.breakpoints[key].loop = true;
                    }
                }
                break;
            default:
                keenSliderOptions.defaultAnimation ??= {};
                keenSliderOptions.defaultAnimation.duration ??= this.config.interval;
                break;
        }

        // Configure Autoplay
        if (this.config.autoplay && this.config.animation !== 'marquee') {
            keenSliderPlugins.push(this.pluginAutoplay.bind(this));
        }

        // Configure Loop
        if (this.config.loop && this.config.animation !== 'marquee') {
            keenSliderOptions.loop ??= this.config.loop;
        }

        // Configure Touch / Drag Support
        if (this.config.touch && this.config.animation !== 'marquee') {
            keenSliderOptions.drag ??= this.config.touch;
        }

        // Configure Controls
        if (this.config.controls) {
            keenSliderPlugins.push(this.pluginControls.bind(this));
        }

        // Configure Indicators
        if (this.config.indicators) {
            keenSliderPlugins.push(this.pluginIndicators.bind(this));
        }

        // Configure Default NewsHub Selector
        // @info We aren't against BAM namings, but it doesn't fit to Bootstrap
        if (typeof keenSliderOptions.selector === 'undefined') {
            keenSliderOptions.selector = '.keen-slider-slide';
        }

        // Set Class Name to apply animation-related stylings
        let className = `keen-slider-${this.config.animation}`;
        if (!this.root.classList.contains(className)) {
            this.root.classList.add(className);
        }

        // Initialize KeenSlider
        this.slider = new KeenSlider(this.root, keenSliderOptions, keenSliderPlugins);
    }

    /**
     * Slide To 
     * @param direction 
     */
    public slideTo(direction: 'next' | 'prev' | 'previous' | number | string) {
        if (direction === 'next') {
            this.slider.next();
        } else if (direction === 'previous' || direction === 'prev') {
            this.slider.prev();
        } else {
            let idx = typeof direction === 'string' ? parseInt(direction) : direction;
            let per = typeof this.slider.options.slides === 'object' ? this.slider.options.slides.perView as number : 1;
            let len = this.slider.track.details.slides.length;

            if (per === 1) {
                this.slider.moveToIdx(idx);
            } else {
                if (idx * per >= len - 1) {
                    this.slider.moveToIdx(len - per);
                } else {
                    this.slider.moveToIdx(idx * per);
                }
            }
        }
    }

    /**
     * Force Responsive Breakpoints on KeenSliderOptions
     * @param keenSliderOptions 
     */
    protected forceResponsiveBreakpoints(keenSliderOptions: KeenSliderOptions) {
        if (typeof keenSliderOptions.slides !== 'object') {
            return keenSliderOptions;
        }

        let slides = keenSliderOptions.slides.perView ?? 1;
        let spacing = keenSliderOptions.slides.spacing ?? 30;
        if (typeof slides !== 'number' || slides <= 1) {
            return keenSliderOptions;
        }

        let breakpoints = {
            '(min-width: 768px)': {
                slides: {
                    perView: slides <= 5 ? Math.max(slides - 2, 1) : Math.floor(slides / 3),
                    spacing: typeof spacing === 'number' ? spacing * 0.5 : spacing
                }
            },
            '(min-width: 1024px)': {
                slides: {
                    perView: slides <= 5 ? Math.max(slides - 1, 1) : Math.floor(slides / 2),
                    spacing: typeof spacing === 'number' ? spacing * 0.75 : spacing
                }
            },
            '(min-width: 1400px)': {
                slides: {
                    perView: slides,
                    spacing: spacing
                }
            },
        };

        keenSliderOptions.breakpoints = breakpoints;
        keenSliderOptions.slides.perView = 1;
        keenSliderOptions.slides.spacing = 0;
        return keenSliderOptions;
    }

    /**
     * Autoplay Extension
     * @source https://codesandbox.io/s/github/rcbyr/keen-slider-sandboxes/tree/v6/autoplay/autoswitch/javascript?file=/index.html
     * 
     * @param slider Current KeenSlider instance.
     */
    public pluginAutoplay(slider: KeenSliderInstance) {
        let timeout;
        let mouseOver = false;

        const clearNextTimeout = () => {
            clearTimeout(timeout);
        };

        const nextTimeout = (slider) => {
            clearNextTimeout();

            if (mouseOver) {
                return;
            }
            timeout = setTimeout(slider.next, this.config.interval);
        };
    
        slider.on("created", (slider) => {
            slider.container.addEventListener("mouseover", () => {
                mouseOver = true;
                clearNextTimeout();
            });
            slider.container.addEventListener("mouseout", () => {
                mouseOver = false;
                nextTimeout(slider);
            });
            nextTimeout(slider);
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
    }

    /**
     * Fade Animation Extension
    // @source https://codesandbox.io/s/github/rcbyr/keen-slider-sandboxes/tree/v6/media/fader/javascript?file=/index.html
     * 
     * @param slider Current KeenSlider instance.
     */
    public pluginFade(slider: KeenSliderInstance) {
        slider.on('detailsChanged', (slider) => {
            slider.slides.forEach((element: HTMLElement, idx: number) => {
                element.style.opacity = `${slider.track.details.slides[idx].portion}`;
            });
        });
    }

    /**
     * Zoom Animation Extension
    // @source https://codesandbox.io/s/github/rcbyr/keen-slider-sandboxes/tree/v6/media/zoom-out/javascript?file=/index.html
     * 
     * @param slider Current KeenSlider instance.
     */
    public pluginZoom(slider: KeenSliderInstance) {
        const scaleElement = (element: HTMLElement, portion: number) => {
            let scale_size = 0.7
            let scale = 1 - (scale_size - scale_size * portion)
            let style = `scale(${scale})`;

            element.style.transform = `${style}`;
            element.style["-webkit-transform"] = `${style}`;
        };
        
        slider.on('detailsChanged', (slider) => {
            const slides = slider.track.details.slides
            slider.slides.forEach((element, idx) => {
                scaleElement(element.querySelector(".slide-image"), slides[idx].portion)
                scaleElement(element.querySelector(".slide-content"), slides[idx].portion)
            });
        });
    }

    /**
     * Marquee Animation Extension
     * @source https://codesandbox.io/s/github/rcbyr/keen-slider-sandboxes/tree/v6/autoplay/automove/javascript?file=/index.html:885-1358
     * 
     * @param slider Current KeenSlider instance.
     */
    public pluginMarquee(slider: KeenSliderInstance) {
        let animation = { 
            duration: this.config.interval, 
            easing: (t) => t 
        };
        let amount = slider.slides.length - 1;
    
        slider.on("created", (s) => {
            s.moveToIdx(amount, true, animation);
            
            slider.container.addEventListener("mouseover", () => {
                slider.animator.stop();
            });
    
            slider.container.addEventListener("mouseout", () => {
                slider.moveToIdx(slider.track.details.abs + amount, true, animation);
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
     * Slider Indicators
     * @source https://codesandbox.io/s/github/rcbyr/keen-slider-sandboxes/tree/v6/navigation-controls/arrows-and-dots/javascript?file=/index.html
     * 
     * @param slider Current KeenSlider instance.
     */
    public pluginIndicators(slider: KeenSliderInstance) {
        let custom = typeof this.config.indicators === 'string';
        let indicators: HTMLElement[] = custom ? query(this.config.indicators as string, this.root.parentElement) : [];

        // Create Indicators
        const createIndicators = ((slider: KeenSliderInstance) => {
            let len = slider.slides.length;
            let abs = slider.track.details.abs;
            let per = typeof slider.options.slides === 'object' ? (slider.options.slides.perView as number) : 1;
            let num = Math.ceil(len / per);

            for (let i = 0; i < num; i++) {
                let btn = document.createElement('BUTTON') as HTMLButtonElement;
                btn.type = 'button';
                btn.className = `keen-slider-indicator indicator-${i}`;
                btn.dataset.slideTo = i.toString();
                indicators.push(btn);
            }

            let buttons = document.createElement('DIV');
            buttons.className = 'keen-slider-indicators';
            buttons.append(...indicators);

            this.root.appendChild(buttons);
        }).bind(this);

        // Update Indicators
        const updateIndicators = ((slider) => {
            if (!indicators || indicators.length === 0) {
                return;
            }

            let len = slider.slides.length;
            let abs = slider.track.details.abs;
            let per = typeof slider.options.slides === 'object' ? (slider.options.slides.perView as number) : 1;
            let num = per === 1 ? abs : Math.floor(abs / per);

            // Select Last Indicator, when last 'page' is smaller then perView
            if (per > 1) {
                if (abs + per === len && num < Math.ceil(len / per) - 1) {
                    num++;
                }
            }

            indicators.map((el, idx) => {
                if (idx === num) {
                    el.classList.add('current');
                } else {
                    el.classList.remove('current');
                }
            });
        }).bind(this);

        // Remove Indicators
        const removeIndicators = ((slider) => {
            if (!indicators || indicators.length === 0) {
                return;
            }

            let buttons = indicators[0].parentElement;
            if (buttons && buttons.parentElement) {
                buttons.remove();
                indicators = [];
            }
        }).bind(this);

        // Handle Indicators
        slider.on('created', (slider) => {
            if (!custom) {
                createIndicators(slider);
            }

            indicators.map(el => {
                el.addEventListener('click', (ev) => {
                    let pos = el.dataset.slideTo || el.dataset.keenSliderIndicator;
                    ev.preventDefault();
                    this.slideTo(pos);
                });
            });

            updateIndicators(slider);
        });

        slider.on('optionsChanged', (slider) => {
            updateIndicators(slider);
        });

        slider.on('slideChanged', (slider) => {
            updateIndicators(slider);
        });

        slider.on('destroyed', (slider) => {
            if (!custom) {
                removeIndicators(slider);
            }
        });
    }


    /**
     * Slider Controls
     * @source https://codesandbox.io/s/github/rcbyr/keen-slider-sandboxes/tree/v6/navigation-controls/arrows-and-dots/javascript?file=/index.html
     * 
     * @param slider Current KeenSlider instance.
     */
    public pluginControls(slider: KeenSliderInstance) {
        let custom = typeof this.config.controls === 'string';
        let controls: HTMLElement[] = custom ? query(this.config.controls as string, this.root.parentElement) : [];

        // Create Controls
        const createControls = ((slider: KeenSliderInstance) => {
            controls = ['prev', 'next'].map(type => {
                let btn = document.createElement('BUTTON') as HTMLButtonElement;
                btn.type = 'button';
                btn.className = `keen-slider-control control-${type}`;
                btn.dataset.slideTo = type;
                return btn;
            });

            let buttons = document.createElement('DIV');
            buttons.className = 'keen-slider-controls';
            buttons.append(...controls);

            this.root.appendChild(buttons);
        }).bind(this);

        // Update Controls
        const updateControls = ((slider: KeenSliderInstance) => {
            if (!controls || controls.length === 0) {
                return;
            }

            let disable = (el) => {
                if (el instanceof HTMLButtonElement) {
                    el.disabled = true;
                }
                el.classList.add('disabled');
            };

            let enable = (el) => {
                if (el instanceof HTMLButtonElement) {
                    el.disabled = false;
                }
                el.classList.remove('disabled');
            };

            controls.map((control) => {
                if(slider.options.loop) {
                    enable(control);
                } else {
                    let abs = slider.track.details.abs;
                    let len = slider.track.details.slides.length;
                    let per = typeof slider.options.slides === 'object' ? (slider.options.slides.perView as number) : 1;
                    let pos = control.dataset.slideTo || control.dataset.keenSliderControl;

                    if (pos === 'prev' || pos === 'previous') {
                        abs === 0 ? disable(control) : enable(control);
                    } else if (pos === 'next') {
                        abs + per >= len ? disable(control) : enable(control);
                    }
                }
            });
        }).bind(this);

        // Remove Controls
        const removeControls = ((slider: KeenSliderInstance) => {
            if (!controls || controls.length === 0) {
                return;
            }

            let buttons = controls[0].parentElement;
            if (buttons && buttons.parentElement) {
                buttons.remove();
                controls = [];
            }
        }).bind(this);

        // Control Bindings
        let nextSlide = this.slideTo.bind(this, 'next');
        let prevSlide = this.slideTo.bind(this, 'prev');

        // Create Controls
        slider.on('created', (slider) => {
            if (!custom) {
                createControls(slider);
            }

            controls.map(el => {
                let pos = el.dataset.slideTo || el.dataset.keenSliderControl;

                if (pos === 'prev' || pos === 'previous') {
                    el.addEventListener('click', prevSlide);
                } else if (pos === 'next') {
                    el.addEventListener('click', nextSlide);
                }
            });
            
            updateControls(slider);
        });

        slider.on('optionsChanged', (slider) => {
            updateControls(slider);
        });

        slider.on('slideChanged', (slider) => {
            updateControls(slider);
        });

        slider.on('destroyed', (slider) => {
            if (!custom) {
                removeControls(slider);
            } else {
                controls.map(el => {
                    let pos = el.dataset.slideTo || el.dataset.keenSliderControl;
    
                    if (pos === 'prev' || pos === 'previous') {
                        el.removeEventListener('click', prevSlide);
                    } else if (pos === 'next') {
                        el.removeEventListener('click', nextSlide);
                    }
                });
            }
        });
    }

}

// Invoke Function
async function invokeKeenSlider() {
    await ready();

    query('[data-keen-slider]').map((el: HTMLElement) => {
        let config = parseJson(el.dataset.keenSlider.trim()) || {};

        for (let [key, defaultValue] of Object.entries(KeenSliderNewsHub.defaults)) {
            if (!el.hasAttribute(`data-keen-slider-${key}`)) {
                continue;
            }

            let value = el.getAttribute(`data-keen-slider-${key}`) as any;

            // Convert Booleans
            if (key === 'autoplay' || key === 'loop' || key === 'touch') {
                value = toBoolean(value, defaultValue);
            }

            // Convert Booleans / Selectors
            if (key === 'controls' || key === 'indicators') {
                value = isBoolean(value) ? toBoolean(value) : value;
            }

            // Parse Interval
            if (key === 'interval') {
                if (typeof value === 'string' && value.endsWith('s')) {
                    value = parseInt(value.slice(0, -1)) * 1000;
                }
            }

            // Parse Numbers
            if (key === 'amount' || key === 'interval' || key === 'spacing') {
                value = parseInt(value);
            }

            config[key] = value;
        }

        KeenSliderNewsHub.getOrCreateInstance(el, config);
    });
}

// Export Module
export default invokeKeenSlider;
export { KeenSliderNewsHub, invokeKeenSlider };
