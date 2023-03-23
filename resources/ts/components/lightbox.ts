import query from "../utilities/query";
import ready from "../utilities/ready";

// Export Ready Handler
export default async function () {
    await ready();
    query('.post-lightbox', el => {
        el.dataset.handle = 'lightbox';
        el.dataset.gallery = "post-gallery";
        el.dataset.caption = el.querySelector('img').alt;
    });
    window['rat']['Lightbox'].invoke();
};
