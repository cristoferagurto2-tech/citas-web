import fs from 'fs';
import path from 'path';

// Leer el index.html generado
const distIndexPath = path.join(process.cwd(), 'dist', 'index.html');
const qrPath = path.join(process.cwd(), 'qr.html');

let content = fs.readFileSync(distIndexPath, 'utf8');

// Generar timestamp único
const timestamp = Date.now();

// Script anti-cache que debe ir PRIMERO en el head
const antiCacheScript = `
    <script>
      // ANTI-CACHE: Redirigir con timestamp si no existe
      if (!window.location.search.includes('nocache=')) {
        var url = new URL(window.location.href);
        url.searchParams.set('nocache', Date.now());
        window.location.replace(url.toString());
      }
    </script>`;

// Insertar el script anti-cache justo después de <head>
content = content.replace(
  '<head>',
  '<head>' + antiCacheScript
);

// Agregar meta tags anti-cache después del charset
const antiCacheMeta = `
    <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">
    <meta http-equiv="Pragma" content="no-cache">
    <meta http-equiv="Expires" content="0">`;

content = content.replace(
  '<meta charset="UTF-8" />',
  '<meta charset="UTF-8" />' + antiCacheMeta
);

// Agregar versión a los assets
content = content.replace(
  /src="\/assets\/([^"]+)\.js"/g,
  `src="/assets/$1.js?v=${timestamp}"`
);

content = content.replace(
  /href="\/assets\/([^"]+)\.css"/g,
  `href="/assets/$1.css?v=${timestamp}"`
);

// Guardar index.html
fs.writeFileSync(distIndexPath, content);

// Crear qr.html simple con redirección
const qrContent = `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="refresh" content="0; url=./index.html?nocache=${timestamp}">
    <title>Redireccionando...</title>
    <script>
        window.location.replace('./index.html?nocache=${timestamp}');
    </script>
</head>
<body>
    <p>Cargando aplicación...</p>
    <a href="./index.html?nocache=${timestamp}">Haz clic aquí</a>
</body>
</html>`;

// Escribir qr.html
fs.writeFileSync(qrPath, qrContent);

// Copiar a dist
const distQrPath = path.join(process.cwd(), 'dist', 'qr.html');
fs.writeFileSync(distQrPath, qrContent);

console.log(`✅ Build actualizado con anti-cache: ${timestamp}`);
console.log('✅ index.html redirige automáticamente con ?nocache=');
console.log('✅ qr.html redirige con timestamp único');
