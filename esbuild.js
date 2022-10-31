
const fs = require('fs');
const { join: join } = require('path');

/**
 * Reporter Function
 * @param {*} errors 
 * @param {*} warnings 
 */
let timeStart = null;
function report(errors, warnings) {
    if (errors.length === 0 && warnings.length === 0) {
        let seconds = ((Date.now() - timeStart) / 1000).toFixed(2);
        console.log(`\x1b[42m\x1b[30m COOL \x1b[0m \x1b[32m Successfully build in ${seconds}s \x1b[0m`);
    }
}

/**
 * Bundle Theme Assets
 * @param {*} disableJs 
 * @param {*} disableCss 
 * @param {*} watchMode 
 */
function assets(disableJs, disableCss, watchMode) {
    const entryPoints = {};

    if (!disableJs) {
        entryPoints['js/newshub.min'] = 'resources/ts/theme.ts';
    }

    if (!disableCss) {
        entryPoints['css/newshub.min'] = 'resources/scss/theme.scss';
    }

    require('esbuild')
        .build({
            bundle: true,
            entryPoints,
            external: [
                '*.woff', 
                '*.woff2',
                '/resources/ts/vendors/*'
            ],
            format: 'iife',
            outdir: 'assets',
            globalName: 'NewsHub',
            minify: false,
            sourcemap: true,
            target: "es2019",
            plugins: [
                {
                    name: 'measure-time',
                    setup(build) {
                        build.onStart(() => { timeStart = Date.now() });
                    }
                },
                require('esbuild-sass-plugin').sassPlugin({ }),
            ],
            watch: !watchMode ? false : {
                onRebuild(error, result) {
                    if (!error) {
                        report(result.error || [], result.warnings || []);
                    }
                }
            }
        })
        .then((result) => {
            report(result.error || [], result.warnings || []);
        });
}

/**
 * Bundle Theme Vendors
 */
function vendors() {

    const entryPoints = {};

    fs.readdirSync(
        join(process.cwd(), 'resources', 'js', 'vendors')
    ).forEach(file => {
        let basename = file.slice(0, file.lastIndexOf('.'));
        entryPoints[`${basename}.min`] = `resources/js/vendors/${file}`;
    });

    require('esbuild')
        .build({
            bundle: true,
            entryPoints,
            external: [],
            format: 'iife',
            keepNames: true,
            outdir: 'assets/ts/vendors',
            minify: true,
            sourcemap: true,
            target: "es2019",
            plugins: [
                {
                    name: 'measure-time',
                    setup(build) {
                        build.onStart(() => { timeStart = Date.now() });
                    }
                }
            ],
            watch: false
        })
        .then((result) => {
            report(result.error || [], result.warnings || []);
        });
}

/**
 * Main Handler Function
 */
function main() {
    const args = process.argv.slice(2);

    if (args.indexOf('--vendors') >= 0) {
        vendors();
    } else {
        assets(
            args.indexOf('--no-js') >= 0,
            args.indexOf('--no-css') >= 0,
            args.indexOf('--watch') >= 0 || args.indexOf('-w') >= 0
        );
    }
}
main();
