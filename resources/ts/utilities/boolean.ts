
const TRULY = [1, '1', true, 'true', 'on', 'yes'];
const FALSY = [0, '0', false, 'false', 'off', 'no'];

function isBoolean(value: any): boolean {
    return TRULY.indexOf(value) >= 0 || FALSY.indexOf(value) >= 0;
}

function makeBoolean(value: any, defaultValue: boolean = false): boolean {
    if (TRULY.indexOf(value) >= 0) {
        return true;
    } else if (FALSY.indexOf(value) >= 0) {
        return false;
    } else {
        return defaultValue;
    }
}

export { isBoolean, makeBoolean };
