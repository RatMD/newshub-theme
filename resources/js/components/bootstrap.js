
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
    if (element.hasAttribute('data-rat-init')) {
        return;
    }

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

    element.dataset.ratInit = '1';
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

/**
 * Invoke Bootstrap Navbar Toggle
 * @param {*} element 
 */
function invokeBootstrapNavbar()
{
    const navbar = document.querySelector('#pageHeaderMenu');
    const headerTop = document.getElementById('pageHeaderTop');
    if (headerTop) {
        headerTop.style.height = headerTop.offsetHeight + 'px';
        headerTop.dataset.height = headerTop.offsetHeight;
    }

    navbar.addEventListener('show.bs.collapse', (event) => {
        document.body.style.overflow = 'hidden';
        
        if (headerTop) {
            headerTop.style.height = '0px';
        }
    });
    
    navbar.addEventListener('shown.bs.collapse', (event) => {
        navbar.style.overflow = 'auto';
        navbar.style.height = `calc(100vh - ${headerTop? 50: 100}px)`;
    });

    navbar.addEventListener('hide.bs.collapse', (event) => {
        navbar.style.removeProperty('overflow');
        navbar.style.removeProperty('height');
    });

    navbar.addEventListener('hidden.bs.collapse', (event) => {
        document.body.style.removeProperty('overflow');

        if (headerTop) {
            headerTop.style.height = headerTop.dataset.height + 'px';
        }
    });
}

// Export Ready Handler
export default () => {
    query('[data-rat-toggle="dropdown"]').map(el => invokeBootstrapDropdown(el));
    query('[data-bs-toggle="tooltip"],[data-rat-toggle="tooltip"]').map(el => invokeBootstrapTooltip(el));
    query('[data-bs-toggle="popover"],[data-rat-toggle="popover"]').map(el => invokeBootstrapPopover(el));
    invokeBootstrapNavbar();
};
