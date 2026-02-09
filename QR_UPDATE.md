# Guía de Actualización del QR

## Problema Resuelto
Se actualizó el QR para apuntar a la versión más reciente del proyecto con:
- ✅ Integración funcional de imgbb para subir fotos
- ✅ Mejor manejo de errores en la subida de imágenes
- ✅ Actualización del qr.html para apuntar al build más reciente

## Cambios Realizados

### 1. Actualización de subirImagenAServidor
- Cambiado de file.io a imgbb API (más confiable)
- Agregado logging detallado para debugging
- Mejor validación de respuesta de la API

### 2. Sincronización del QR
- Actualizado qr.html para apuntar a index-DldMsQr-.js
- Automatización de copia del index.html al qr.html en cada build

### 3. Scripts de Build
```json
"build": "vite build && copy dist\\index.html qr.html"
```

## Cómo Probar el QR

1. **Generar nuevo QR**
   ```bash
   npm run build
   ```

2. **Verificar que qr.html apunta al build correcto**
   ```bash
   dir qr.html
   dir dist\index.html
   ```
   Ambos archivos deben tener el mismo contenido.

3. **Iniciar servidor de desarrollo**
   ```bash
   npm run dev
   ```

4. **Prueba de funcionalidad**
   - Selecciona un servicio
   - Selecciona una plantilla
   - Sube una foto
   - Envía por WhatsApp
   - Verifica que el enlace de la foto se incluya en el mensaje

## Debugging

Si el QR sigue mostrando la versión antigua:

1. **Limpia el caché del navegador**
   - Ctrl + Shift + Delete
   - Selecciona "Imágenes y archivos de sitios"
   - Elimina el caché del sitio

2. **Verifica el contenido de qr.html**
   ```bash
   type qr.html
   ```
   Debe mostrar:
   ```html
   <script type="module" src="/assets/index-DldMsQr-.js"></script>
   ```

3. **Verifica la versión del JavaScript**
   ```bash
   dir dist\assets
   ```
   Debe haber un archivo index-DldMsQr-.js

4. **Revisa la consola del navegador**
   - Abre las herramientas de desarrollador (F12)
   - Ve a la pestaña Console
   - Verifica si hay errores al subir imágenes

## Errores Comunes

### "Imagen subida exitosamente" pero no aparece en WhatsApp
- Verifica que fotoUrl tenga el valor
- Revisa el mensaje generado antes de codificarlo
- Asegúrate de que la foto no sea demasiado grande (WhatsApp tiene límites)

### "Error de imgbb: ...data: { success: false, message: "..." }"
- La API key de imgbb puede estar expirada
- Verifica la API key en el código de Tarjeta.jsx:153

### QR apunta a versión antigua
- Ejecuta `npm run build` para regenerar el build y el qr.html
- Limpia el caché del navegador
- Verifica que el servidor esté sirviendo el contenido correcto

## Notas Importantes

1. Cada vez que hagas cambios, ejecuta `npm run build` para actualizar tanto el build como el qr.html

2. El servidor de desarrollo (`npm run dev`) no necesita un build completo, pero el QR debe generarse desde el build de producción

3. La API key de imgbb se usa para demostración; considera obtener tu propia key en https://imgbb.com/

4. WhatsApp tiene límites de caracteres (255 caracteres por mensaje), así que las imágenes largas pueden causar problemas

## Recursos

- Documentación de imgbb: https://api.imgbb.com/
- Documentación de WhatsApp: https://developers.facebook.com/docs/whatsapp/api
