/**
 * Wait Handler
 * @param {number} ms The number of ms to wait.
 * @returns {Promise}
 */
function wait(ms: number): Promise<null> {
    return new Promise(resolve => {
        setTimeout(resolve.bind(null ,null), ms);
    });
}

/**
 * Wait until callback returns true
 * @param {Function} callback The callback function, which must return a boolean state or throw an
 *                   exception to exit the callback handler.
 * @param {number} ms The number of ms before the next attempt is started.
 * @param {number} limit The maximum number of attempts.
 * @returns {Promise}
 */
function waitUntil(callback: () => boolean, step: number = 200, limit: number = 100): Promise<null> {
    return new Promise((resolve, reject) => {
        let count = 0;
        const handler = async () => {
            let result: boolean = false;
            try {
                result = await callback();
            } catch (err) {
                reject(err);
            }
            count++;

            if (result) {
                resolve(null);
            } else if (count <= limit) {
                setTimeout(handler, step);
            }
        };
        handler();
    });
}

// Export Module
export default wait;
export { wait, waitUntil };
