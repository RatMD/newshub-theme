
import query from '../utilities/query';

/**
 * Invoke Sticky Header
 * @param {*} element 
 */
function invokeStickyHeader(element)
{
    let socials = element.querySelector('.navbar-socials');
    if (!socials) {
        return;
    }

    let height = socials.offsetHeight;
    socials.style.height = height + 'px';
    
    if (window.scrollY > 150) {
        element.classList.add('sticky-scroll');
    }

    window.addEventListener('scroll', () => {
        if (window.scrollY > 150) {
            element.classList.add('sticky-scroll');
        } else if (window.scrollY < 150-height) {
            element.classList.remove('sticky-scroll');
        }
    });
}


// Export Ready Handler
export default () => {
    query('.sticky-top.sticky-header').map(el => invokeStickyHeader(el));
};
