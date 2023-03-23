
const TRULY_VALUES = [true, 'true', 1, '1', 'yes', 'on'];
const FALSY_VALUES = [false, 'false', 0, '0', 'no', 'off', null, void 0];

/**
 * Check if value is truly.
 * @param value The desired value to check.
 * @returns
 */
function truly(value: any): boolean {
    if (typeof value === 'string') {
        value = value.toLowerCase();
    }
    return TRULY_VALUES.indexOf(value) >= 0;
}

/**
 * Check if value is falsy.
 * @param value The desired value to check.
 * @returns
 */
function falsy(value: any): boolean {
    if (typeof value === 'string') {
        value = value.toLowerCase();
    }
    return FALSY_VALUES.indexOf(value) >= 0;
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

/**
 * Check if value is a boolean or something similar.
 * @param value The desired value to check.
 * @returns
 */
function toBoolean(value: any, defaultValue: boolean = false): boolean {
    if (typeof value === 'string') {
        value = value.toLowerCase();
    }
    if (TRULY_VALUES.indexOf(value) >= 0) {
        return true;
    } else if (FALSY_VALUES.indexOf(value) >= 0) {
        return false;
    } else {
        return defaultValue;
    }
}

// Export Module
export { truly, falsy, isBoolean, toBoolean };
