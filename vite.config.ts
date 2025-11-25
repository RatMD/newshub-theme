import { join, resolve } from 'node:path';
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig(({ command }) => ({
    root: process.cwd(),
    publicDir: join(__dirname, 'public'),
    plugins: [
        laravel({
            input: [
                'resources/theme.ts'
            ],
            hotFile: join(__dirname, 'assets', '.hot'),
            refresh: true,
        }),
    ],
    build: {
        copyPublicDir: true,
        sourcemap: true,
        target: 'es2022',
        lib: {
            entry: resolve(__dirname, 'resources/theme.ts'),
            name: 'NewsHub',
            formats: ['es'],
            fileName: () => 'js/newshub.min.js',
        },
        rollupOptions: {
            output: {
                dir: 'assets',
                assetFileNames: (assetInfo) => {
                    if (assetInfo.names.includes('newshub-theme.css')) {
                        return 'css/newshub.min.css';
                    } else {
                        return 'assets/[name].[ext]';
                    }
                },
                chunkFileNames(chunkInfo) {
                    return 'js/[name].min.js';
                },
                entryFileNames(chunkInfo) {
                    return 'js/newshub.min.js';
                },
                inlineDynamicImports: false,
                manualChunks: (id) => id.includes('node_modules') ? 'vendors' : null
            },
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                loadPaths: [
                    resolve(__dirname, 'node_modules'),
                    resolve(__dirname, 'resources/styles'),
                ],
                silenceDeprecations: [
                    'abs-percent',
                    'color-4-api',
                    'color-functions',
                    'global-builtin',
                    'import',
                ],
            },
        },
    },
    server: {
        origin: 'http://localhost:5144',
        host: 'localhost',
        port: 5144
    }
}));
