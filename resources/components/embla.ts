import EmblaCarousel from "embla-carousel";
import { boolean } from '../utilities/boolean';
import parseJson from "../utilities/json";
import query from "../utilities/query";
import ready from "../utilities/ready";

export interface NewsHub_EmblaOptions {
    /**
     * Whether the slider moves horizontally or vertically.
     */
    axis: 'x' | 'y';

    /**
     * The animation style used between slides.
     */
    animation: 'slide' | 'fade' | 'scale';

    /**
     * Whether to enable or disable automatic slide transitions.
     */
    autoplay: boolean;

    /**
     * The duration (in milliseconds) each slide remains visible.
     * Use 0 or 'marquee' for continuous auto-scrolling.
     */
    autoplayInterval: 'marquee' | number;

    /**
     * Whether autoplay pauses when the mouse hovers over the slider.
     */
    autoplayPause: boolean;

    /**
     * The duration of the slide transition animation (in seconds).
     */
    duration: number;

    /**
     * The number of slides visible at the same time.
     */
    slidesPerView: number;

    /**
     * The space between individual slides.
     */
    spacing: number;

    /**
     * Whether to use an infinite loop of slides.
     */
    loop: boolean;

    /**
     * Shows thumbnails as indicators; requires `indicators: true`.
     */
    thumbnails: boolean;

    /**
     * Creates default controls or accepts a selector for custom controls.
     */
    controls: boolean | string;

    /**
     * Creates default indicators or accepts a selector for custom indicators.
     */
    indicators: boolean | string;

    /**
     * Whether to enable or disable touch/drag interaction.
     */
    touch: boolean;
}

export class NewsHub_Embla {
    /**
     *
     */
    public static defaults: NewsHub_EmblaOptions = {
        axis: 'x',
        animation: 'slide',
        autoplay: false,
        autoplayInterval: 2_500,
        autoplayPause: true,
        duration: 20,
        slidesPerView: 1,
        spacing: 10,
        loop: false,
        thumbnails: false,
        controls: false,
        indicators: false,
        touch: true,
    };

    /**
     * Hold all created instances.
     */
    public static instances: Map<HTMLElement, NewsHub_Embla> = new Map;

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
    static getOrCreateInstance(element: HTMLElement, options: Partial<NewsHub_EmblaOptions> = {}) {
        if (this.instances.has(element)) {
            return this.instances.get(element);
        } else {
            return new this(element, options);
        }
    }

    /**
     *
     */
    public root: HTMLElement;

    /**
     *
     */
    public config: NewsHub_EmblaOptions;

    /**
     *
     */
    public slider: typeof EmblaCarousel;

    /**
     *
     * @param element
     * @param options
     */
    constructor(element: HTMLElement, options: Partial<NewsHub_EmblaOptions> = {}) {
        if (NewsHub_Embla.instances.has(element)) {
            throw new Error('The passed HTMLElement has already been initialized.');
        }
        NewsHub_Embla.instances.set(element, this);

        this.root = element;
        this.config = Object.assign({}, NewsHub_Embla.defaults, options);
    }
}

/**
 *
 */
export async function invoke() {
    await ready();

    query('[data-embla]').map((el: HTMLElement) => {
        let config = parseJson((el.dataset.embla || '').trim()) || {};

        for (let [key, defaultValue] of Object.entries(NewsHub_Embla.defaults)) {
            if (!el.hasAttribute(`data-embla-${key}`)) {
                continue;
            }

            let value = el.getAttribute(`data-embla-${key}`) as any;

            // Parse Booleans
            if (key == 'autoplay' || key == 'autoplayPause' || key == 'loop' || key == 'thumbnails' || key == 'touch') {
                value = boolean(value, defaultValue);
            }

            // Parse Booleans / Selectors
            if (key === 'controls' || key === 'indicators') {
                value = typeof value == 'string' ? value : boolean(value, defaultValue);
            }

            // Parse Numbers
            if (key == 'autoplayInterval' && value === 'marquee') {
                value = 0;
            }
            if (key === 'autoplayInterval' || key === 'duration' || key === 'spacing' || key == 'slidesPerView') {
                value = parseInt(value);
            }

            // Parse Options
            if (key == 'axis') {
                value = (value||'').toLowerCase() == 'y' ? 'y' : 'x';
            }
            if (key == 'animation') {
                value = ['slide', 'fade', 'scale'].indexOf(value) >= 0 ? value : 'slide';
            }

            config[key] = value;
        }

        NewsHub_Embla.getOrCreateInstance(el, config);
    });
}
