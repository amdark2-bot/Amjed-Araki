import fs from 'node:fs';
import path from 'node:path';

const rootDir = process.cwd();
const distDir = path.join(rootDir, 'dist');
const assetsDir = path.join(distDir, 'assets');
const publicDir = path.join(rootDir, 'public');
const imagesDir = path.join(rootDir, 'src', 'assets', 'images');

const indexHtmlPath = path.join(distDir, 'index.html');
if (!fs.existsSync(indexHtmlPath)) {
  throw new Error('dist/index.html not found. Run vite build first.');
}

let html = fs.readFileSync(indexHtmlPath, 'utf8');

const assetFiles = fs.existsSync(assetsDir) ? fs.readdirSync(assetsDir) : [];
const cssFiles = assetFiles.filter((f) => f.endsWith('.css')).sort();
const jsFiles = assetFiles.filter((f) => f.endsWith('.js')).sort();

const combinedCss = cssFiles
  .map((f) => fs.readFileSync(path.join(assetsDir, f), 'utf8'))
  .join('\n');

let combinedJs = jsFiles
  .map((f) => fs.readFileSync(path.join(assetsDir, f), 'utf8'))
  .join('\n');

// Embed local images as base64 data URIs so the standalone HTML has zero broken assets anywhere
if (fs.existsSync(imagesDir)) {
  const imageFiles = fs.readdirSync(imagesDir);
  for (const file of imageFiles) {
    const ext = path.extname(file).toLowerCase();
    const mime =
      ext === '.png'
        ? 'image/png'
        : ext === '.webp'
          ? 'image/webp'
          : ext === '.svg'
            ? 'image/svg+xml'
            : 'image/jpeg';
    const dataUri = `data:${mime};base64,${fs.readFileSync(path.join(imagesDir, file)).toString('base64')}`;
    const publicSrcPath = `/src/assets/images/${file}`;
    combinedJs = combinedJs.split(publicSrcPath).join(dataUri);
  }
}

// Escape any accidental </script> sequence inside the bundled JS
const safeJs = combinedJs.replace(/<\/script>/gi, '<\\/script>');
const safeCss = combinedCss.replace(/<\/style>/gi, '<\\/style>');

// Remove external Vite asset tags and replace with inline CSS + inline JS module
html = html.replace(/<link\s+rel="stylesheet"[^>]*href="\/assets\/[^"]+\.css"[^>]*>\s*/gi, '');
html = html.replace(/<script\s+type="module"[^>]*src="\/assets\/[^"]+\.js"[^>]*><\/script>\s*/gi, '');

html = html.replace('</head>', () => `    <style>\n${safeCss}\n    </style>\n  </head>`);
html = html.replace(
  '</body>',
  () =>
    `    <script>window.__IS_STANDALONE_EXPORT__ = true;</script>\n    <script type="module">\n${safeJs}\n    </script>\n  </body>`,
);

fs.mkdirSync(publicDir, { recursive: true });
fs.writeFileSync(path.join(distDir, 'amjoid-ai-market.html'), html, 'utf8');
fs.writeFileSync(path.join(publicDir, 'amjoid-ai-market.html'), html, 'utf8');

const sizeKb = Math.round(Buffer.byteLength(html, 'utf8') / 1024);
console.log(`Generated standalone HTML package: amjoid-ai-market.html (${sizeKb} KB)`);
