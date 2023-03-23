
type ContextType = Document | HTMLElement;
type MapFunction = (element: HTMLElement, index: number) => boolean;

/**
 * Query Selector
 * @param selector 
 * @param context_or_map
 * @param mapFn
 * @returns 
 */
function query(selector: string): HTMLElement[]
function query(selector: string, context?: ContextType): HTMLElement[]
function query(selector: string, mapFn?: MapFunction): any[]
function query(selector: string, context_or_map?: ContextType | MapFunction, mapFn?: MapFunction): HTMLElement[] | any[] {
    let context: ContextType;
    if (typeof context_or_map === 'function') {
        context = document;
        mapFn = context_or_map;
    } else {
        context = context_or_map || document;
    }

    if (typeof mapFn === 'function') {
        return Array.from(context.querySelectorAll(selector), mapFn);
    } else {
        return Array.from(context.querySelectorAll(selector));
    }
}

// Export Module
export default query;
