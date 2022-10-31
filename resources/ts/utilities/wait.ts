
/**
 * Asynchronous Wait command
 * @param factory 
 * @returns
 */
function wait(ms: number): Promise<true> {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve(true) }, ms);
    });
}

// Export Module
export default wait;
