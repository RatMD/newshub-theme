
/**
 * Try to parse JSON
 * @param data 
 * @returns
 */
function parseJson(data: string): Object | null {
    let parser = JSON.parse;

    // Prefer OctoberCMS Storm JSON Parser
    if (typeof window['ocJSON'] === 'function') {
        parser = window['ocJSON'] as any;
    } else if (typeof (window['oc'] || {}).parseJSON === 'function') {
        parser = typeof (window['oc'] || {}).parseJSON as any;
    }

    // Try to Parse
    let result = null;
    try {
        let temp = parser(data);
        if (temp && typeof temp === 'object') {
            result = temp;
        }
    } catch (e) { }

    return result;
}

// Export Module
export default parseJson;
