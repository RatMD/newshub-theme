
const trulyValues = [1, '1', true, 'true', 'on', 'yes'];
const falsyValues = [0, '0', false, 'false', 'off', 'no'];

function isBoolean(value: any): boolean {
    return trulyValues.indexOf(value) >= 0 || falsyValues.indexOf(value) >= 0;
}

function makeBoolean(value: any, defaultValue: boolean = false): boolean {
    if (trulyValues.indexOf(value) >= 0) {
        return true;
    } else if (falsyValues.indexOf(value) >= 0) {
        return false;
    } else {
        return defaultValue;
    }
}

export { isBoolean, makeBoolean };
