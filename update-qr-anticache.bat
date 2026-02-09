@echo off
setlocal enabledelayedexpansion

:: Obtener timestamp
set TIMESTAMP=%date:~6,4%%date:~3,2%%date:~0,2%%time:~0,2%%time:~3,2%%time:~6,2%
set TIMESTAMP=!TIMESTAMP: =0!

echo ========================================
echo Actualizando QR con Anti-Cache
echo ========================================
echo Timestamp: !TIMESTAMP!
echo.

:: Crear backup
copy /Y qr.html qr.html.backup >nul 2>&1

:: Leer dist/index.html y agregar anti-cache
for /f "tokens=* delims=" %%a in (dist\index.html) do (
    set line=%%a
    set line=!line:src="/assets/=src="/assets/!
    set line=!line:href="/assets/=href="/assets/!
    
    :: Agregar parametros anti-cache
    if "!line!" neq "%%a" (
        set line=!line:.js"=.js?v=!TIMESTAMP!"!
        set line=!line:.css"=.css?v=!TIMESTAMP!"!
    )
    
    echo !line!>>qr.html.new
)

:: Agregar headers anti-cache al inicio
(
echo ^<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate"^>
echo ^<meta http-equiv="Pragma" content="no-cache"^>
echo ^<meta http-equiv="Expires" content="0"^>
) >qr.html.temp
type qr.html.new >>qr.html.temp

:: Reemplazar archivo original
move /Y qr.html.temp qr.html >nul 2>&1
del qr.html.new >nul 2>&1

echo [OK] QR actualizado con timestamp: !TIMESTAMP!
echo.
echo ========================================
echo Proceso completado exitosamente
echo ========================================
