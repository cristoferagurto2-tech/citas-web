import fs from 'fs';
import path from 'path';

// Leer el index.html generado
const distIndexPath = path.join(process.cwd(), 'dist', 'index.html');
const qrPath = path.join(process.cwd(), 'qr.html');

let content = fs.readFileSync(distIndexPath, 'utf8');

// Generar timestamp único
const timestamp = Date.now();

// Agregar meta tags anti-cache simples al head
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

// Guardar index.html actualizado
fs.writeFileSync(distIndexPath, content);

// Crear qr.html simple que redirige a index.html
const qrContent = `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="refresh" content="0; url=./index.html?v=${timestamp}">
    <title>Redireccionando...</title>
</head>
<body>
    <p>Redireccionando a la aplicación...</p>
    <a href="./index.html?v=${timestamp}">Haz clic aquí si no se redirige automáticamente</a>
    <script>
        window.location.href = './index.html?v=${timestamp}';
    </script>
</body>
</html>`;

// Escribir el archivo qr.html en raíz
fs.writeFileSync(qrPath, qrContent);

// Copiar qr.html a la carpeta dist
const distQrPath = path.join(process.cwd(), 'dist', 'qr.html');
fs.writeFileSync(distQrPath, qrContent);

console.log(`✅ QR actualizado con timestamp: ${timestamp}`);
console.log('✅ Anti-cache headers agregados');
console.log('✅ qr.html redirige a index.html con versión actualizada');
console.log('✅ Archivos listos para Cloudflare Pages');
