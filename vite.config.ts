import { readdirSync } from 'node:fs';
import { resolve, join } from 'node:path';
import { defineConfig } from 'vite';

/**
 *
 * @returns
 */
function getVendorEntries() {
    const vendorDir = join(__dirname, 'resources/ts/vendors');
    const entries: Record<string, string> = {};

    for (const file of readdirSync(vendorDir)) {
        if (!file.endsWith('.ts') && !file.endsWith('.js')) {
            continue;
        }
        const basename = file.slice(0, file.lastIndexOf('.'));
        entries[basename] = join(vendorDir, file);
    }

    return entries;
}

/**
 *
 */
export default defineConfig(({ command }) => ({
    root: process.cwd(),
    build: {
        sourcemap: true,
        target: 'es2022',
        lib: {
            entry: resolve(__dirname, 'resources/ts/theme.ts'),
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
                    resolve(__dirname, 'resources/scss'),
                ],
                silenceDeprecations: [
                    'abs-percent',
                    'color-4-api',
                    'color-functions',
                    'import',
                    'global-builtin',
                ],
            },
        },
    },
}));
