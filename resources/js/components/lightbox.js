import query from '../utilities/query';
import ready from '../utilities/ready';

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
    ready(() => {
        query('[data-newshub-toggle="lightbox"]').map(el => invokeLightbox(el));
        query('.post-lightbox').map(el => {
            el.dataset.gallery = "post-gallery";
            el.dataset.caption = el.querySelector('img').alt;
            invokeLightbox(el)
        });
    })
};
