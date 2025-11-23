import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig(({ command }) => ({
    root: process.cwd(),
    build: {
        sourcemap: true,
        target: 'es2022',
        lib: {
            entry: resolve(__dirname, 'resources/ts/theme.ts'),
            name: 'NewsHub',
            formats: ['iife'],
            fileName: () => 'js/newshub.min.js',
        },
        rollupOptions: {
            output: {
                dir: 'assets',
                assetFileNames: (assetInfo) => {
                    if (assetInfo.name && assetInfo.name.endsWith('.css')) {
                        return 'css/newshub.min.css';
                    }
                    return 'assets/[name].[ext]';
                },
            },
        },
    },
    css: {
        preprocessorOptions: {
            scss: { },
        },
    },
}));
