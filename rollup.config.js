import path from 'path';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

export default  {
    input: 'resources/js/theme.js',
    output: {
        compact: true,
        dir: 'assets',
        entryFileNames: 'js/newshub.min.js',
        format: 'iife',
        globals: {
            [path.resolve(__dirname, 'resources/js/vendors/bootstrap.js')]: 'Bootstrap',
            [path.resolve(__dirname, 'resources/js/vendors/keen-slider.js')]: 'KeenSlider',
        },
        sourcemap: true,
        plugins: [
            terser()
        ]
    },
    external: (id) => {
        return id.indexOf('./vendors/') >= 0;
    },
    plugins: [
        resolve()
    ]
};
