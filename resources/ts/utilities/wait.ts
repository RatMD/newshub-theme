
/**
 * Asynchronous Wait command
 * @param factory 
 * @returns
 */
function wait(ms: number): Promise<true> {
    return new Promise(resolve => {
        setTimeout(resolve.bind(null, null), ms);
    });
}

// Export Module
export default wait;
