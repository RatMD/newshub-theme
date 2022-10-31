import query from '../utilities/query';
import ready from '../utilities/ready';

/**
 * Invoke Double-Click Solution
 * @param {*} element 
 */
function invokeDoubleClick(element)
{
    element.querySelector('button.double-click-button').addEventListener('click', (event) => {
        let template = element.querySelector('template');
        let content = template.content.firstElementChild || template.content.textContent.trim();

        if (typeof content === 'string') {
            let container = document.createElement('DIV');
            container.innerHTML = content.replace(/\&quot\;/g, '"');
            content = container.firstElementChild;
        }

        element.replaceWith(content);
    });
}

// Export Ready Handler
export default () => {
    ready(() => {
        query('[data-newshub-toggle="double-click"]').map(el => invokeDoubleClick(el));
    });
};
