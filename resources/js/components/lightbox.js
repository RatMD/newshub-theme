

import query from '../utilities/query';
import Lightbox from './vendors/bootstrap-lightbox';

/**
 * Invoke Scroll-To-Top Button
 * @param {*} element 
 */
function invokeLightbox(element)
{
    element.addEventListener('click', (event) => {
        event.preventDefault();
        let lightbox = new Lightbox(element, {
            keyboard: true
        });
        lightbox.carouselElement.classList.add('slide');
        lightbox.show();
    });
}


// Export Ready Handler
export default () => {
    if (typeof Lightbox === 'undefined') {
        return;
    }
    query('[data-rat-toggle="lightbox"]').map(el => invokeLightbox(el));
    query('.post-lightbox').map(el => {
        el.dataset.gallery = "post-gallery";
        el.dataset.caption = el.querySelector('img').alt;
        invokeLightbox(el)
    });
};
