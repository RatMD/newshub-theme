/**
 * Format bytes as human-readable text.
 * @source https://stackoverflow.com/a/14919494
 *
 * @param {number} bytes Number of bytes.
 * @param {boolean} metric Whether to use metric (SI, 1000) or binary (IEC, 1024) units.
 * @param {number} digits Number of decimal places to display.
 * @returns {string}
 */
function filesize(bytes: number, metric: boolean = false, digits: number = 1): string {
    const thresh = metric ? 1000 : 1024;

    if (Math.abs(bytes) < thresh) {
        return bytes + ' B';
    }

    const units = metric
        ? ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
        : ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
    let u = -1;
    const r = 10**digits;
    do {
        bytes /= thresh;
        ++u;
    } while (Math.round(Math.abs(bytes) * r) / r >= thresh && u < units.length - 1);
    return bytes.toFixed(digits) + ' ' + units[u];
}

// Export Module
export default filesize;
export { filesize };
