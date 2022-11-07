import type { Carousel, Modal } from 'bootstrap';
import query from '../utilities/query';
import ready from '../utilities/ready';

class Lightbox {

    /**
     * Already initialized Navbar instances.
     */
    static instances = new Map<string|HTMLElement, Lightbox>;

    /**
     * Get instance based on gallery attribute or image tag.
     * @param element 
     */
    public static getInstance(element: HTMLElement): Lightbox|null {
        if (element.hasAttribute('data-gallery')) {
            let gallery = element.dataset.gallery;
            return this.instances.has(gallery) ? this.instances.get(gallery) : null;
        } else {
            return this.instances.has(element) ? this.instances.get(element) : null;
        }
    }

    /**
     * Get or create instance based on element
     * @param element 
     * @returns 
     */
    public static getOrCreateInstance(element: HTMLElement): Lightbox {
        let instance = this.getInstance(element);
        if (element === null) {
            instance = new this(element);
        }
        return instance;
    }

    /**
     * Images
     */
    private images: Set<string> = new Set;

    /**
     * Click Listener
     */
    private clickListener: (this: Lightbox, ev: Event) => void;

    /**
     * Lightbox HTML
     */
    private lightbox: HTMLElement|null = null;

    /**
     * Modal instance
     */
    private modal: Modal|null = null;

    /**
     * Carousel instance
     */
    private carousel: Carousel|null = null;

    /**
     * Create a new instance
     * @param element 
     */
    public constructor(element: HTMLElement) {
        let gallery = element.hasAttribute('data-gallery') ? element.dataset.gallery : element;
        if (Lightbox.instances.has(gallery)) {
            throw new Error('An instance with the passed element or gallery has already been created.');
        }
        Lightbox.instances.set(gallery, this);

        this.clickListener = this.open.bind(this);
        this.append(element);
    }

    /**
     * Append Element
     * @param element 
     * @returns 
     */
    public append(element: HTMLElement): Lightbox|false {
        let link;
        if (element instanceof HTMLAnchorElement) {
            link = element.href;
        } else if (element instanceof HTMLImageElement) {
            link = element.src;
        } else {
            let temp = element.querySelector('img');
            if (temp) {
                link = temp.src;
            }
        }

        if (link) {
            element.dataset.lightboxSlideTo = this.images.size.toString();
            this.images.add(link);
            element.addEventListener('click', this.clickListener);
            return this;
        } else {
            return false;
        }
    }

    /**
     * Open Lightbox
     * @param ev 
     */
    public open(ev: Event) {
        this.createLightbox();

        if (this.modal) {
            ev.preventDefault();
            let slideTo: HTMLElement|null = (ev.target as HTMLElement).closest('[data-lightbox-slide-to]');
            this.lightbox.addEventListener('show.bs.modal', (ev) => {
                if (slideTo) {
                    let number = parseInt(slideTo.dataset.lightboxSlideTo);
                    this.carousel.to(number);
                }
            });
            this.modal.show();
        }
    }

    /**
     * Create Lightbox
     * @returns
     */
    private createLightbox(): HTMLElement {
        let lightbox = document.createElement('DIV');
        lightbox.className = 'modal fade modal-lightbox';
        lightbox.tabIndex = -1;
        lightbox.innerHTML = `
            <div class="modal-dialog modal-lg modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-body p-0">
                        <div id="lightboxCarousel" class="carousel carousel-fade slide" data-bs-ride="false">
                            <div class="carousel-inner">
                                ${Array.from(this.images).map((src, idx) => {
                                    let content = `
                                        <div class="carousel-item${idx === 0 ? ' active': ''}">
                                            <img src="${src}" class="d-block w-100" />
                                        </div>
                                    `;
                                    return content;
                                }).join('\n')}
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#lightboxCarousel" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#lightboxCarousel" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(lightbox);

        this.lightbox = lightbox;
        this.modal = new window['Bootstrap'].Modal(lightbox) as Modal;
        this.carousel = new window['Bootstrap'].Carousel(this.lightbox.querySelector('.carousel'));

        this.lightbox.addEventListener('hide.bs.modal', (ev) => {
            this.carousel.dispose();
            this.carousel = null;
        });
        this.lightbox.addEventListener('hidden.bs.modal', (ev) => {
            this.modal.dispose();
            this.modal = null;
            this.lightbox.remove();
            this.lightbox = null;
        });
        return lightbox;
    }

}

/**
 * Invoke Scroll-To-Top Button
 * @param {*} element 
 */
function invokeLightbox(element: HTMLElement)
{
    let instance = Lightbox.getInstance(element);
    if (!instance) {
        instance = new Lightbox(element);
    } else {
        instance.append(element);
    }
}


// Export Ready Handler
export default () => {
    ready(() => {
        query('[data-newshub-toggle="lightbox"]').map(el => invokeLightbox(el));
        query('.post-lightbox').map(el => {
            el.dataset.gallery = "post-gallery";
            el.dataset.caption = el.querySelector('img').alt;
            invokeLightbox(el)
        });
    })
};
