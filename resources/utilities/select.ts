
/**
 * Select Handler
 * @param selector The desired element selector string.
 * @param context The context element.
 * @returns
 */
function select(selector: string, context?: Document | HTMLElement): HTMLElement | null {
    return (context || document).querySelector(selector);
}

// Export Module
export default select;
