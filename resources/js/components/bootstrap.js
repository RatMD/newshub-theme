
import query from '../utilities/query';
import Bootstrap from '../vendors/bootstrap';

/**
 * Invoke Bootstrap Dropdowns
 * We initialize the dropdowns manually, since the Bootstrap invoke method is 
 * not compatible with OctoberCMS' Ajax Framework.
 * @param {*} element 
 */
function invokeBootstrapDropdown(element)
{
    element.addEventListener('click', (event) => {
        event.preventDefault();

        let dropdown = new Bootstrap.Dropdown(element);
        dropdown.toggle();
    });

    if (element.classList.contains('close-on-select')) {
        [].map.call(element.parentElement.querySelectorAll('.dropdown-menu li'), (item) => {
            item.addEventListener('click', () => {
                let dropdown = new Bootstrap.Dropdown(element);
                dropdown.hide();
            });
        });
    }

    document.addEventListener('click', (event) => {
        let closest = event.target.closest('.dropdown-toggle.show');
        query('.dropdown-toggle.show').map(dropdown => {
            if (dropdown !== closest) {
                let dropdown = new Bootstrap.Dropdown(element);
                dropdown.hide();
            }
        });
    });
}

/**
 * Invoke Bootstrap Tooltips
 * @param {*} element 
 */
function invokeBootstrapTooltip(element)
{
    new Bootstrap.Tooltip(element);
}

/**
 * Invoke Bootstrap Popovers
 * @param {*} element 
 */
function invokeBootstrapPopover(element)
{
    new Bootstrap.Popover(element);
}

// Export Ready Handler
export default () => {
    query('[data-rat-toggle="dropdown"]').map(el => invokeBootstrapDropdown(el))
    query('[data-bs-toggle="tooltip"],[data-rat-toggle="tooltip"]').map(el => invokeBootstrapTooltip(el))
    query('[data-bs-toggle="popover"],[data-rat-toggle="popover"]').map(el => invokeBootstrapPopover(el))
};
