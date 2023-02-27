
const esbuild = require('esbuild');
const fs = require('fs');
const path = require('path');


//-- ----------------------------------------
//  Reporter Plugin
//-- ----------------------------------------

function reporterPlugin() {
    return {
        name: 'measure-time',
        setup(build) {
            let timeStart = null;

            build.onStart(() => {
                timeStart = Date.now()
                console.log(`\x1b[47m\x1b[30m  GO  \x1b[0m \x1b[37m New build process started \x1b[0m`);
            });

            build.onEnd((result) => {
                let seconds = ((Date.now() - timeStart) / 1000).toFixed(2);

                if (result.errors.length > 0) {
                    console.log(`\x1b[41m\x1b[30m ERRO \x1b[0m \x1b[31m An critical error occurred in ${seconds}s \x1b[0m`);
                } else if (result.warnings.length > 0) {
                    console.log(`\x1b[43m\x1b[30m WARN \x1b[0m \x1b[33m An warning occurred in ${seconds}s \x1b[0m`);
                } else {
                    console.log(`\x1b[42m\x1b[30m COOL \x1b[0m \x1b[32m Successfully build in ${seconds}s \x1b[0m`);
                }
            });
        }
    };
}


//-- ----------------------------------------
//  esbuild Configuration - Assets
//-- ----------------------------------------

async function assets(options = {}) {
    const entryPoints = {};
    const plugins = [reporterPlugin()];

    // EntryPoint CSS
    if (options.bundleCss) {
        entryPoints['css/newshub.min'] = 'resources/scss/theme.scss';
        plugins.push(require('esbuild-sass-plugin').sassPlugin({ }));
    }

    // EntryPoint JavaScript
    if (options.bundleJs) {
        entryPoints['js/newshub.min'] = 'resources/ts/theme.ts';
    }

    // Create esbuild context
    const context = await esbuild.context({
        bundle: true,
        entryPoints,
        external: [
            '*.gif',
            '*.jpg',
            '*.jpeg',
            '*.png', 
            '*.svg', 
            '*.woff', 
            '*.woff2', 
            '/resources/ts/vendors/*'
        ],
        format: 'iife',
        outdir: 'assets',
        globalName: 'NewsHub',
        minify: true,
        sourcemap: true,
        target: "es2019",
        plugins
    });

    // Bundle or Watch
    if (options.watch) {
        await context.watch();
    } else {
        await context.rebuild();
        process.exit(0);
    }
}


//-- ----------------------------------------
//  esbuild Configuration - Vendors
//-- ----------------------------------------

async function vendors(options = {}) {
    const entryPoints = {};
    const plugins = [reporterPlugin()];

    // Parse Vendors
    fs.readdirSync(
        path.join(process.cwd(), 'resources', 'ts', 'vendors')
    ).forEach(file => {
        let basename = file.slice(0, file.lastIndexOf('.'));
        entryPoints[`${basename}.min`] = `resources/ts/vendors/${file}`;
    });

    // Create esbuild context
    const context = await esbuild.context({
        bundle: true,
        entryPoints,
        external: [],
        format: 'iife',
        keepNames: true,
        outdir: 'assets/js/vendors',
        minify: true,
        sourcemap: true,
        target: "es2019",
        plugins
    });

    // Bundle & Exit
    await context.rebuild();
    process.exit(0);
}


//-- ----------------------------------------
//  Parse CLI Options
//-- ----------------------------------------

function parse(args) {
    const options = {
        bundleCss: true,
        bundleJs: true,
        include: null,
        vendors: false,
        watch: false
    };

    while (args.length > 0) {
        let arg = args.shift();

        if (arg === '--no-css') {
            options.bundleCss = false;
        } else if (arg === '--no-js') {
            options.bundleJs = false;
        } else if (arg === '--vendors') {
            options.vendors = true;
        } else if (arg === '--watch' || args === '-w') {
            options.watch = true;
        } else if (arg.indexOf('--folder') === 0) {
            let folder = null;
            
            if (arg === '--folder' && args[0].indexOf('--') < 0) {
                folder = args.shift();
            } else if (arg.length > 8 && arg[8] === '=') {
                folder = arg.slice(9)
            } else {
                throw new Error(`Invalid CLI arguments / syntax near part "${arg}"!`);
            }

            if (folder) {
                if (options.include === null) {
                    options.include = [];
                }
                options.include.push(folder);
            }
        }
    }

    return options;
}


//-- ----------------------------------------
//  Main CLI Handler
//-- ----------------------------------------

function main() {
    const args = parse(process.argv.slice(2));

    if (args.vendors) {
        vendors(args);
    } else {
        assets(args);
    }
}
main();
