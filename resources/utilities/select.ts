/**
 * Select Handler
 * @param {string} selector The desired element selector string.
 * @param {mixed} context The context element.
 * @returns {HTMLElement|null}
 */
function select<T = HTMLElement>(selector: string, context?: HTMLElement | Document): T | null {
    return (context || document).querySelector(selector) as T | null;
}

// Export Module
export default select;
export { select };
