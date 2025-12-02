import fs from 'node:fs';
import path from 'node:path';

const sourceDir = path.join('node_modules', 'bootstrap-icons', 'icons');
const targetDir = path.join('partials', 'icons', 'bootstrap');

if (fs.existsSync(targetDir)) {
    fs.rmSync(targetDir, { recursive: true });
}

fs.mkdirSync(targetDir, { recursive: true });
fs.readdirSync(sourceDir).forEach(file => {
    if (!file.endsWith('.svg')) {
        return;
    }
    const basename = path.basename(file, '.svg');
    const sourcePath = path.join(sourceDir, file);
    const targetPath = path.join(targetDir, basename + '.htm');

    // Read & Replace
    const svgContent = fs.readFileSync(sourcePath, 'utf8')
        .replace(
            /(width|height)="[^"]*"/g,
            '$1="{{ size|default(16) }}"'
        )
        .replace(
            /fill="currentColor"/g,
            'fill="{{ color|default(\'currentColor\') }}"'
        );

    // Write
    fs.writeFileSync(targetPath, svgContent, 'utf8');
});
