const TRULY_VALUES: any[] = [true, 'true', 1, '1', 'yes', 'on'];
const FALSY_VALUES: any[] = [false, 'false', 0, '0', 'no', 'off', null, void 0];

/**
 * Check if value is truly.
 * @param {mixed} value The desired value to check.
 * @returns {boolean}
 */
function truly(value: any): boolean {
    if (typeof value === 'string') {
        value = value.toLowerCase();
    }
    return TRULY_VALUES.indexOf(value) >= 0;
}

/**
 * Check if value is falsy.
 * @param {mixed} value The desired value to check.
 * @returns {boolean}
 */
function falsy(value: any): boolean {
    if (typeof value === 'string') {
        value = value.toLowerCase();
    }
    return FALSY_VALUES.indexOf(value) >= 0;
}

/**
 * Check if value is a boolean or something similar.
 * @param {mixed} value The desired value to check.
 * @returns {boolean|null}
 */
function boolean(value: any): boolean | null {
    if (typeof value === 'string') {
        value = value.toLowerCase();
    }

    if (TRULY_VALUES.indexOf(value) >= 0) {
        return true;
    } else if (FALSY_VALUES.indexOf(value) >= 0) {
        return false;
    } else {
        return null;
    }
}

/**
 * Check if value is a boolean or something similar.
 * @param value The desired value to check.
 * @returns
 */
function isBoolean(value: any): boolean {
    if (typeof value === 'string') {
        value = value.toLowerCase();
    }
    return TRULY_VALUES.indexOf(value) >= 0 || FALSY_VALUES.indexOf(value) >= 0;
}

// Export Module
export default boolean;
export { boolean, boolean as toBoolean, isBoolean, falsy, truly };
