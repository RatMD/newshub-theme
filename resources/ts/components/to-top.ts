import query from '../utilities/query';
import ready from '../utilities/ready';

/**
 * Invoke Scroll-To-Top Button
 * @param {*} element 
 */
function invokeScrollToTop(element)
{
    if (window.scrollY > 150) {
        element.classList.add('active');
    }

    window.addEventListener('scroll', () => {
        if (window.scrollY > 150) {
            element.classList.add('active');
        } else {
            element.classList.remove('active');
        }
    });

    element.addEventListener('click', (event) => {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Export Ready Handler
export default async function () {
    await ready();
    query('[data-handle="scroll-to-top"]', invokeScrollToTop);
};
