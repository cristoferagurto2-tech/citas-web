import fs from 'fs';
import path from 'path';

// Leer el index.html generado
const distIndexPath = path.join(process.cwd(), 'dist', 'index.html');
const qrPath = path.join(process.cwd(), 'qr.html');

let content = fs.readFileSync(distIndexPath, 'utf8');

// Generar timestamp único
const timestamp = Date.now();

// Script anti-cache para forzar recarga
const antiCacheScript = `
    <script>
        (function() {
            if (!window.location.search.includes('fresh=')) {
                var ts = '${timestamp}';
                var separator = window.location.search ? '&' : '?';
                var newUrl = window.location.href + separator + 'fresh=' + ts;
                if ('caches' in window) {
                    caches.keys().then(function(names) {
                        names.forEach(function(name) { caches.delete(name); });
                    });
                }
                window.location.replace(newUrl);
            }
        })();
    </script>`;

// Insertar script después del charset en index.html
content = content.replace(
  '<meta charset="UTF-8" />',
  '<meta charset="UTF-8" />' + antiCacheScript
);

// Agregar meta tags anti-cache adicionales
const antiCacheMeta = `
    <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate, max-age=0">
    <meta http-equiv="Pragma" content="no-cache">
    <meta http-equiv="Expires" content="0">`;

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

// Crear qr.html como redirección con anti-cache
const qrContent = `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate, max-age=0">
    <meta http-equiv="Pragma" content="no-cache">
    <meta http-equiv="Expires" content="0">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Redireccionando...</title>
    <script>
        (function() {
            var ts = '${timestamp}';
            var targetUrl = './index.html?fresh=' + ts;
            if ('caches' in window) {
                caches.keys().then(function(names) {
                    names.forEach(function(name) { caches.delete(name); });
                });
            }
            window.location.replace(targetUrl);
        })();
    </script>
    <meta http-equiv="refresh" content="0; url=./index.html?fresh=1">
</head>
<body>
    <p>Redireccionando...</p>
    <a href="./index.html?fresh=${timestamp}">Haz clic aquí si no se redirige</a>
</body>
</html>`;

// Escribir el archivo qr.html en raíz
fs.writeFileSync(qrPath, qrContent);

// Copiar qr.html a la carpeta dist
const distQrPath = path.join(process.cwd(), 'dist', 'qr.html');
fs.writeFileSync(distQrPath, qrContent);

console.log(`✅ QR actualizado con timestamp: ${timestamp}`);
console.log('✅ Anti-cache script agregado a index.html');
console.log('✅ qr.html redirige a index.html con fresh=' + timestamp);
console.log('✅ Archivos listos para Cloudflare Pages');
