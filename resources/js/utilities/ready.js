
/**
 * Ready Factory State
 * @param {*} factory 
 * @returns void
 */
function ready(factory) {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', factory);
    } else {
        factory();
    }
}

// Export Module
export default ready;
