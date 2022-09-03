import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import copy from 'rollup-plugin-copy';
import { terser } from 'rollup-plugin-terser';

const config = {
    output: {
        compact: true,
        dir: 'assets/js/vendors',
        entryFileNames: '[name].min.js',
        name: 'Bootstrap',
        format: 'umd',
        sourcemap: true,
        plugins: [
            terser()
        ]
    },
    plugins: [
        resolve()
    ]
};

export default [
    {
        input: 'resources/js/vendors/bootstrap.js',
        output: {
            ...config.output,
            name: 'Bootstrap',
        },
        plugins: [
            ...config.plugins,
            copy({
                targets: [{
                    src: 'node_modules/bootstrap-icons/icons/*.svg',
                    dest: 'partials/icons/bootstrap',
                    rename: (name) => `${name}.htm`
                }]
            }),
            replace({
                'process.env.NODE_ENV': JSON.stringify('production'),
            }),
        ]
    },
    {
        input: 'resources/js/vendors/keen-slider.js',
        output: {
            ...config.output,
            name: 'KeenSlider',
        },
        plugins: [
            ...config.plugins
        ]
    },
    {
        input: 'resources/js/vendors/bootstrap-lightbox.js',
        output: {
            ...config.output,
            name: 'Lightbox',
            format: 'iife',
            globals: {
                bootstrap: 'Bootstrap'
            }
        },
        external: ['bootstrap'],
        plugins: [
            ...config.plugins
        ]
    }
];
