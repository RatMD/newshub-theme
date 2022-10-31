
/**
 * Query Selector
 * @param selector 
 * @param context 
 * @returns 
 */
function query(selector: string, context: Document | HTMLElement | null = null): HTMLElement[] {
    return Array.from((context || document).querySelectorAll(selector));
}

// Export Module
export default query;
