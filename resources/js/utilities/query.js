
/**
 * Query Selector
 * @param {*} selector 
 * @param {*} context 
 * @returns 
 */
function query(selector, context = null) {
    return Array.from((context || document).querySelectorAll(selector));
}

// Export Module
export default query;
