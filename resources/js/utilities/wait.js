
/**
 * Asynchronous Wait command
 * @param {*} factory 
 * @returns {Promise}
 */
function wait(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve() }, ms);
    });
}

// Export Module
export default wait;
