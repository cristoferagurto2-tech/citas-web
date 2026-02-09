import fs from 'fs';
import path from 'path';

// Leer el index.html generado
const distIndexPath = path.join(process.cwd(), 'dist', 'index.html');
const qrPath = path.join(process.cwd(), 'qr.html');

let content = fs.readFileSync(distIndexPath, 'utf8');

// Generar timestamp único
const timestamp = Date.now();

// Agregar meta tags anti-cache al head
const antiCacheMeta = `
    <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">
    <meta http-equiv="Pragma" content="no-cache">
    <meta http-equiv="Expires" content="0">`;

// Insertar meta tags después del charset
content = content.replace(
  '<meta charset="UTF-8" />',
  '<meta charset="UTF-8" />' + antiCacheMeta
);

// Agregar versión anti-cache a los assets
content = content.replace(
  /src="\/assets\/([^"]+)\.js"/g,
  `src="/assets/$1.js?v=${timestamp}"`
);

content = content.replace(
  /href="\/assets\/([^"]+)\.css"/g,
  `href="/assets/$1.css?v=${timestamp}"`
);

// Escribir el archivo qr.html actualizado (raíz del proyecto)
fs.writeFileSync(qrPath, content);

// También actualizar dist/index.html
fs.writeFileSync(distIndexPath, content);

// Copiar qr.html a la carpeta dist para Cloudflare Pages
const distQrPath = path.join(process.cwd(), 'dist', 'qr.html');
fs.writeFileSync(distQrPath, content);

console.log(`✅ QR actualizado con timestamp: ${timestamp}`);
console.log('✅ Anti-cache headers agregados');
console.log('✅ Assets versionados correctamente');
console.log('✅ qr.html copiado a dist/ para Cloudflare Pages');
