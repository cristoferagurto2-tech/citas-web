@echo off
echo ========================================
echo Verificacion de QR Actualizado
echo ========================================
echo.

echo 1. Verificando qr.html...
echo ----------------------------------------
type qr.html | findstr /C:"index-DldMsQr-"
if %errorlevel% equ 0 (
    echo [OK] qr.html apunta a la version correcta
) else (
    echo [ERROR] qr.html no apunta a la version correcta
)
echo.

echo 2. Verificando archivo en dist...
echo ----------------------------------------
dir dist\assets\index-DldMsQr-.js
echo.

echo 3. Verificando contenido en dist\index.html...
echo ----------------------------------------
type dist\index.html | findstr /C:"index-DldMsQr-"
echo.

echo 4. Verificando archivos de imagen...
echo ----------------------------------------
dir dist\assets\*.js
dir dist\assets\*.css
echo.

echo ========================================
echo Proceso completado
echo ========================================
echo.
echo Si algun paso fallo, ejecuta: npm run build
echo.
pause
