import query from "../utilities/query";
import ready from "../utilities/ready";

// Export Ready Handler
export default () => {
    ready(() => {
        query('.post-lightbox').map(el => {
            el.dataset.handle = 'lightbox';
            el.dataset.gallery = "post-gallery";
            el.dataset.caption = el.querySelector('img').alt;
        });
        window['rat']['Lightbox'].invoke();
    });
};
