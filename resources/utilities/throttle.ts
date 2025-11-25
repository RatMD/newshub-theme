/**
 * Throttle a Function
 * @param callback The desired function to call.
 * @param limit The amount of milliseconds the function should be called.
 * @returns 
 */
function throttle(callback: Function, limit: number): Function {
    let waiting = false;

    return function () {
        if (waiting) {
            return;
        }
        waiting = true;

        let result = callback.apply(this, arguments);
        if (typeof result !== 'undefined' && result instanceof Promise) {
            result.then(() => setTimeout(() => waiting = false, limit));
        } else {
            setTimeout(() => waiting = false, limit);
        }
    };
}

// Export Module
export default throttle;
