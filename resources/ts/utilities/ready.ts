
/**
 * Ready Factory State
 * @param factory 
 * @returns
 */
function ready(factory: Function | void): Promise<true> | void {
    if (typeof factory === 'undefined') {
        return new Promise(resolve => ready(resolve.bind(null, null)));
    } else {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => factory());
        } else {
            factory();
        }
    }
}

// Export Module
export default ready;
