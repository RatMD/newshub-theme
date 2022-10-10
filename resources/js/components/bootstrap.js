import query from '../utilities/query';
import ready from '../utilities/ready';

/**
 * Invoke Bootstrap Dropdowns
 * @param {*} element 
 */
function invokeBootstrapDropdown(element)
{
    document.addEventListener('click', (event) => {
        if (element === event.target || element.contains(event.target)) {
            event.preventDefault();

            let instance = Bootstrap.Dropdown.getOrCreateInstance(element, {
                autoClose: true
            });

            // ByPass in Navbar restriction
            // @see https://github.com/twbs/bootstrap/issues/32379#issuecomment-743910487
            instance._inNavbar = false;

            // Toggle Dropdown
            instance.toggle();
        } else {
            let instance = Bootstrap.Dropdown.getInstance(element, {
                autoClose: true
            });

            if (instance && instance._isShown()) {
                instance.toggle();
            }
        }
    });
}

/**
 * Invoke Bootstrap Tooltips
 * @param {*} element 
 */
function invokeBootstrapTooltip(element)
{
    if (element.hasAttribute('data-rat-init')) {
        return;
    }
    new Bootstrap.Tooltip(element);
    element.dataset.ratInit = '1';
}

/**
 * Invoke Bootstrap Popovers
 * @param {*} element 
 */
function invokeBootstrapPopover(element)
{
    if (element.hasAttribute('data-rat-init')) {
        return;
    }
    new Bootstrap.Popover(element);
    element.dataset.ratInit = '1';
}

// Export Ready Handler
export default () => {
    ready(() => {
        query('[data-newshub-toggle="dropdown"]').map(el => invokeBootstrapDropdown(el));
        query('[data-bs-toggle="tooltip"],[data-newshub-toggle="tooltip"]').map(el => invokeBootstrapTooltip(el));
        query('[data-bs-toggle="popover"],[data-newshub-toggle="popover"]').map(el => invokeBootstrapPopover(el));
    });
};
