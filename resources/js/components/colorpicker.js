
import query from '../utilities/query';

/**
 * Invoke Scroll-To-Top Button
 * @param {*} element 
 */
function invokeColorPicker(element)
{
    const defaultScheme = window.newshub.defaultScheme;

    function onLoad() {
        query('[data-rat-toggle="color-picker"]').map(el => {
            let style = sessionStorage.getItem('newshub-color-scheme') || defaultScheme;
            if(style === 'light') {
                el.checked = false;
            } else {
                el.checked = true;
            }
        });
    }
    onLoad();

    element.addEventListener('change', (event) => {
        let style = sessionStorage.getItem('newshub-color-scheme') || defaultScheme;
        let newStyle = style === 'light'? 'dark': 'light';
        sessionStorage.setItem('newshub-color-scheme', newStyle);

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
export default () => {
    query('[data-rat-toggle="color-picker"]').map(el => invokeColorPicker(el));
};
