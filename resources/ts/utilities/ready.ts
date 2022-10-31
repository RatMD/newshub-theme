
/**
 * Ready Factory State
 * @param factory 
 * @returns
 */
function ready(factory: Function | void): Promise<true> | void {
    if (typeof factory === 'function') {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', factory.bind(this));
        } else {
            factory();
        }
    } else {
        return new Promise(resolve => {
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', resolve.bind(this, true));
            } else {
                resolve(true);
            }
        });
    }
}

// Export Module
export default ready;
