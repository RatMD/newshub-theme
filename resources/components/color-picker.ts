import query from '../utilities/query';
import ready from '../utilities/ready';

/**
 * Invoke Scroll-To-Top Button
 * @param {*} element 
 */
function invokeColorPicker(element)
{
    const defaultScheme = window['newshub'].defaultScheme;

    function onLoad() {
        query('[data-handle="color-picker"]', (el: HTMLInputElement) => {
            let style = localStorage.getItem('newshub-color-scheme') || defaultScheme;
            if(style === 'light') {
                el.checked = false;
            } else {
                el.checked = true;
            }
        });
    }
    onLoad();

    element.addEventListener('change', (event) => {
        let style = localStorage.getItem('newshub-color-scheme') || defaultScheme;
        let newStyle = style === 'light'? 'dark': 'light';
        localStorage.setItem('newshub-color-scheme', newStyle);

        // Set Styling for a smooth change
        let styling = document.createElement('style');
        styling.innerText = '*,*::before,*::after{ transition: all 0.25s ease 0ms !important; }';
        document.head.appendChild(styling);

        // Change Class Names
        document.body.classList.remove(style);
        document.body.classList.add(newStyle);

        // Remove Styling
        setTimeout(() => styling.remove(), 500);
        onLoad();

        // Trigger Event
        const customEvent = new CustomEvent('newshub:scheme', { detail: { prev: style, now: newStyle } });
        document.dispatchEvent(customEvent);
    });
}

// Export Ready Handler
export default async function () {
    await ready();
    query('[data-handle="color-picker"]', invokeColorPicker);
};
