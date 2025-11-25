/**
 * Wraps a callback function into a debounced handler.
 * The debounce handler ensures that the passed function is called only after a certain period of
 * inactivity.
 * @param {Function} callback The desired function to call.
 * @param {number} ms The amount of milliseconds the function should be debounced.
 * @param {number} ms The number of ms
 *
 * to throttle/wait until the callback function is called.
 * @returns
 */
function debounce(callback: Function, ms: number): Function {
    let timeout: number | undefined = void 0;
    return function (this: any, ...args: any[]) {
        window.clearTimeout(timeout);
        timeout = window.setTimeout(() => callback.apply(this, args), ms);
    };
}

// Export Module
export default debounce;
export { debounce };
