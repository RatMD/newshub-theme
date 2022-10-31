import query from '../utilities/query';
import ready from '../utilities/ready';
import wait from '../utilities/wait';

class Navbar {

    /**
     * Already initialized Navbar instances.
     */
    static instances = new Map;

    /**
     * Get instance by element.
     * @param {HTMLElement} el 
     * @returns {Navbar}
     */
    static getInstance(el) {
        if (!this.instances.has(el)) {
            throw new Error('The passed element has not bee initialized yet.');
        } else {
            return this.instances.get(el);
        }
    }

    /**
     * Check if Navbar instance exists for passed element.
     * @param {HTMLElement} el 
     * @returns {boolean}
     */
    static hasInstance(el) {
        return this.instances.has(el);
    }

    /**
     * Root <header /> Element
     * @var HTMLElement
     */
    root;

    /**
     * Main Navbar Style
     * @var string
     */
    style;

    /**
     * Main Navbar Toggler <button /> Element
     * @var HTMLButtonElement
     */
    toggler;

    /**
     * Main Navbar Action Toggler <button /> Element
     * @var HTMLButtonElement
     */
    actionToggler;

    /**
     * Frozen state of the Navbar element (used for scroll tracker)
     * @var boolean
     */
    frozen = false;

    /**
     * Scroll State (used for scroll tracker)
     * @var boolean
     */
    scrolled = false;

    /**
     * Scroll Animation Frame ID (used for scroll tracker)
     * @var mixed
     */
    scrolledAnimationId = null;

    /**
     * Last scroll Y number (used for scroll tracker)
     * @var number
     */
    scrolledLast = 0;

    /**
     * Create a new Navbar instance from an element.
     * @param {HTMLElement} el 
     */
    constructor(el) {
        if (Navbar.hasInstance(el)) {
            throw new Error('A Navbar instance has already been initialized for the passed element.');
        }
        Navbar.instances.set(el, this);
        this.root = el;
        this.style = 'static';

        // Make Navbar Sticky
        if (el.classList.contains('header-sticky')) {
            this.style = 'sticky';
            window.addEventListener('scroll', this.stickyNavbar.bind(this));
            
            // Defer call to handle browser-based scroll-position restore process
            setTimeout(() => { this.stickyNavbar(null) }, 150);
        }

        // Make Navbar Slidable
        if (el.classList.contains('header-slide')) {
            this.style = 'slide';
            this.scrolledLast = window.pageYOffset ? window.pageYOffset : (document.documentElement || document.body).scrollTop;

            // Set Size for extended header
            let mainNavbar = this.root.querySelector('.navbar-main');
            let size = 0 + (mainNavbar.classList.contains('with-meta-menu') ? 1 : 0) + (mainNavbar.classList.contains('with-social-menu') ? 1 : 0);
            this.root.classList.add(size == 1 ? 'medium' : (size === 2 ? 'large' : 'small'));

            // Defer Event binding to handle browser-based scroll-position restore process
            setTimeout(() => {
                window.addEventListener('scroll', this.slideNavbar.bind(this), {
                    passive: true, 
                    capture: false 
                });
                this.slideNavbarUpdate();
            }, 150);
        }

        // Navbar Toggler
        let toggler = this.root.querySelector('.navbar-toggler');
        if (toggler) {
            this.toggler = toggler;
            this.toggler.addEventListener('click', this.toggleMenu.bind(this));
        }

        // Navbar Action Toggler
        let actionToggler = this.root.querySelector('.navbar-action-toggler');
        if (actionToggler) {
            this.actionToggler = actionToggler;
            this.actionToggler.addEventListener('click', this.toggleActions.bind(this));
        }

        // Subnav Toggler
        Array.from(this.root.querySelectorAll('.navbar-subnav-toggler')).map(el => {
            el.addEventListener('click', this.toggleSubMenu.bind(this, el));
        });
        Array.from(this.root.querySelectorAll('.nav-title')).map(el => {
            let toggler = el.parentElement.querySelector('.navbar-subnav-toggler');
            if (toggler) {
                el.addEventListener('click', this.toggleSubMenu.bind(this, toggler));
            }
        });

        // Close on Resize
        window.addEventListener('resize', this.onResize.bind(this), {
            passive: true,
            capture: false
        });

        // Close on Click Outside
        document.addEventListener('click', this.onClickOutside.bind(this), {
            passive: true,
            capture: false
        });
    }

    /**
     * Determine height of an invisible element.
     * @param {HTMLElement} element 
     * @param {HTMLElement} parent 
     * @returns {number}
     */
    determineHeight(element, parent) {
        let clone = element.cloneNode(true);

        clone.style.height = 'auto';
        clone.style.minHeight = 'none';
        clone.style.overflow = 'visible';
        clone.style.position = 'absolute';
        clone.style.visibility = 'hidden';
        clone.style.opacity = 0;

        parent.appendChild(clone);
        const height = clone.offsetHeight;
        parent.removeChild(clone);

        return height;
    }

    /**
     * Handle Sticky Navbar
     * @param {Event | null} event
     */
    stickyNavbar(event) {
        if (this.frozen) {
            return;
        }
        if (window.scrollY > 50) {
            this.root.classList.add('header-scroll');
        } else if (window.scrollY === 0) {
            this.root.classList.remove('header-scroll');
        }
    }

    /**
     * Handle Slide Navbar
     * @source https://github.com/WickyNilliams/headroom.js
     * @param {Event | null} event
     */
     slideNavbar(event) {
        if (!this.scrolled) {
            this.scrolled = true;
            this.scrolledAnimationId = requestAnimationFrame(this.slideNavbarUpdate.bind(this));
        }
    }

    /**
     * Tracker Update Handler
     * @source https://github.com/WickyNilliams/headroom.js
     */
     slideNavbarUpdate() {
        let html = document.documentElement;
        let body = document.body;

        // Measure and Determine
        let scrollY = Math.round(window.pageYOffset ? window.pageYOffset : (html || body).scrollTop);
        let height = window.innerHeight || html.clientHeight || body.clientHeight;
        let scrollHeight =  Math.max(
            body.scrollHeight, html.scrollHeight,
            body.offsetHeight, html.offsetHeight,
            body.clientHeight, html.clientHeight
        );
        let direction = scrollY > this.scrolledLast ? 'down' : 'up';
        let distance = Math.abs(scrollY - this.scrolledLast);
        let isOutOfBounds = scrollY < 0 || scrollY + height > scrollHeight;
        let top = scrollY <= 0;
        let bottom = scrollY + height >= scrollHeight;
        let toleranceExceeded = distance > 0;
        
        // Handle Update
        (() => {
            if (isOutOfBounds) {
                return;
            }
            if (this.frozen) {
                return;
            }

            // Header Top
            if (top && !this.root.classList.contains('header-top')) {
                this.root.classList.add('header-top');
            } else if (!top && this.root.classList.contains('header-top')) {
                this.root.classList.remove('header-top');
            }

            // Header Bottom
            if (bottom && !this.root.classList.contains('header-bottom')) {
                this.root.classList.add('header-bottom');
            } else if (!bottom && this.root.classList.contains('header-bottom')) {
                this.root.classList.remove('header-bottom');
            }

            // Header (Un-) Pinned
            if (direction === 'down' && !top && toleranceExceeded) {
                if (this.root.classList.contains('header-pinned')) {
                    this.root.classList.remove('header-pinned');
                    
                    // Fixes Sub-Navigations on larger screens
                    this.root.style.removeProperty('overflow');
                }
                if (!this.root.classList.contains('header-unpinned')) {
                    this.root.classList.add('header-unpinned');
                }
            } else if ((direction === 'up' && toleranceExceeded) || top) {
                if (this.root.classList.contains('header-unpinned')) {
                    this.root.classList.remove('header-unpinned');
                }
                if (!this.root.classList.contains('header-pinned')) {
                    this.root.classList.add('header-pinned');

                    // Fixes Sub-Navigations on larger screens
                    setTimeout(() => { this.root.style.overflow = 'visible'; }, 150);
                }
            }
        })();
        
        // Set Circle
        this.scrolledLast = scrollY;
        this.scrolled = false;
    }

    /**
     * Close Submenu on Resize
     */
    onResize(event) {

        // Close SubMenus
        Array.from(this.root.querySelectorAll('.nav-item.item-open')).map(el => {
            this.closeSubMenu(el, el.querySelector('.navbar-subnav-toggler'));
        });

        // Close Menu
        if (this.root.classList.contains('header-menu-active')) {
            this.toggleMenu();
        }
    }

    /**
     * Detect click outside and handle accordingly.
     * @param {Event} event 
     * @returns 
     */
    onClickOutside(event) {
        if (this.root.classList.contains('stay-open')) {
            return;
        }

        // No Target
        let target = event.target;
        if (!target) {
            return;     // Nothing to do
        }

        // Click appeared within the current active menu
        let closest = target.closest('header.header');
        if (closest && (closest === this.root || closest.closest('header.header') === this.root)) {
            return;     // Nothing to do
        }

        // Close SubMenus
        Array.from(this.root.querySelectorAll('.nav-item.item-open')).map(el => {
            this.closeSubMenu(el, el.querySelector('.navbar-subnav-toggler'));
        });

        // Close Menu
        if (this.root.classList.contains('header-menu-active')) {
            this.toggleMenu();
        }
    }

    /**
     * Toggle Navbar Menu
     * @param {Event | null} event
     */
    toggleMenu(event) {
        if (event) {
            event.preventDefault();
        }

        if (this.root.classList.contains('header-menu-active')) {
            this.frozen = false;
            this.closeMenu();
        } else {
            this.frozen = true;
            this.openMenu();
        }
    }

    /**
     * Open Menu (for responsive view)
     */
    async openMenu() {
        if (this.style === 'static') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else if (this.style === 'sticky') {
            if (this.root.classList.contains('header-scroll')) {
                this.root.classList.remove('header-scroll');
                await wait(150);        // Wait Until Topbar is shown
            }
        } else if (this.style === 'slide') {
            this.root.style.height = `${window.innerHeight}px`;
        }

        // Update Toggle Button
        if (this.toggler) {
            this.toggler.classList.remove('collapsed');

            if (this.toggler.hasAttribute('aria-expanded')) {
                this.toggler.setAttribute('aria-expanded', 'true');
            }
        }

        // Update Header
        this.root.classList.add('header-menu-active');
        document.body.style.overflow = 'hidden';
    }

    /**
     * Close Menu (for responsive view)
     */
    closeMenu() {
        if (this.style === 'sticky') {
            setTimeout(() => { this.stickyNavbar(); }, 250); // Check Sticky Navbar Position after menu has been closed.
        } else if (this.style === 'slide') {
            this.root.style.removeProperty('height');
        }

        // Close SubMenus
        Array.from(this.root.querySelectorAll('.nav-item.item-open')).map(el => {
            this.closeSubMenu(el, el.querySelector('.navbar-subnav-toggler'));
        });

        // Update Toggle Button
        if (this.toggler) {
            this.toggler.classList.add('collapsed');

            if (this.toggler.hasAttribute('aria-expanded')) {
                this.toggler.setAttribute('aria-expanded', 'false');
            }
        }

        // Update Header
        this.root.classList.remove('header-menu-active');
        document.body.style.removeProperty('overflow');
    }

    /**
     * Toggle SubMenu
     * @param {HTMLElement} item
     * @param {Event | null} event
     */
    toggleSubMenu(item, event) {
        if (event) {
            event.preventDefault();
        }

        if (item.classList.contains('collapsed')) {
            this.frozen = true;
            this.openSubMenu(item.closest('.nav-item'), item);
        } else {
            this.frozen = this.root.classList.contains('header-menu-active');
            this.closeSubMenu(item.closest('.nav-item'), item);
        }
    }

    /**
     * Open SubMenu
     * @param {HTMLElement} item 
     * @param {HTMLElement | null} button 
     */
    async openSubMenu(item, button) {
        if (item.classList.contains('master-menu') && this.style === 'sticky') {
            if (this.root.classList.contains('header-scroll')) {
                this.root.classList.remove('header-scroll');
                await wait(150);        // Wait Until Topbar is shown
            }
        }

        const subnav = item.querySelector('.navbar-subnav,.navbar-subnav-master');
        if ((this.root.classList.contains('header-menu-active') || item.classList.contains('master-menu')) && subnav) {
            const height = this.determineHeight(subnav, item);

            const parentNav = subnav.parentElement.closest('.navbar-subnav');
            if (parentNav) {
                parentNav.style.height = `${parentNav.offsetHeight + height}px`;
            }
            subnav.style.height = `${height}px`;
        }

        item.classList.add('item-open');
        if (button) {
            button.classList.remove('collapsed');
        }
    }

    /**
     * Open SubMenu
     * @param {HTMLElement} item 
     * @param {HTMLElement | null} button 
     */
    closeSubMenu(item, button) {
        if (item.classList.contains('master-menu') && this.style === 'sticky') {
            setTimeout(() => { this.stickyNavbar(); }, 250); // Check Sticky Navbar Position after menu has been closed.
        }

        const subnav = item.querySelector('.navbar-subnav,.navbar-subnav-master');
        if ((this.root.classList.contains('header-menu-active') || item.classList.contains('master-menu')) && subnav) {
            const parentNav = subnav.parentElement.closest('.navbar-subnav');
            if (parentNav) {
                parentNav.style.height = `${parentNav.offsetHeight - subnav.offsetHeight}px`;
            }
            subnav.style.removeProperty('height');
        }

        item.classList.remove('item-open');
        if (button) {
            button.classList.add('collapsed');
        }

        if (document.activeElement === button || document.activeElement === item) {
            document.activeElement.blur();
        }
    }

    /**
     * Toggle Actions
     * @param {Event | null} event
     */
    toggleActions(event) {
        event.preventDefault();

        const navbarBrand = this.root.querySelector('.navbar-brand');

        if (this.actionToggler.parentElement.classList.contains('show')) {
            if (navbarBrand) {
                navbarBrand.classList.remove('hide');
            }

            this.actionToggler.parentElement.classList.remove('show');
            this.actionToggler.classList.add('collapsed');
        } else {
            if (navbarBrand) {
                navbarBrand.classList.add('hide');
            }

            this.actionToggler.parentElement.classList.add('show');
            this.actionToggler.classList.remove('collapsed');
        }
    }

}

// Invoke Functions
function invokeNavbar() {
    ready(function () {
        query('[data-newshub-header]').map(el => {
            if (!Navbar.hasInstance(el)) {
                new Navbar(el);
            }
        });
    });
}


// Export Module
export default invokeNavbar;
export { Navbar, invokeNavbar };
