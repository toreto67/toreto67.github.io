@echo off
setlocal
cd /d "%~dp0"

echo ============================================
echo   Push a GitHub: toreto67/torete.github.io
echo ============================================
echo.

git rev-parse --is-inside-work-tree >nul 2>&1
if errorlevel 1 (
  echo [X] Esta carpeta no es un repositorio git.
  goto :end
)

echo --- Estado actual ---
git status --short
echo.

set /p OK="Continuar con commit y push? [s/n]: "
if /i not "%OK%"=="s" (
  echo Cancelado.
  goto :end
)

git add -A

git diff --cached --quiet
if errorlevel 1 goto :have
echo [i] No hay cambios que commitear. Se intentara el push igualmente.
goto :push

:have
set "MSG=%~1"
if "%MSG%"=="" set "MSG=Update: blog HWIDLoader OBSIDIAN, drmini y ajustes del portfolio"
echo.
echo --- Commit ---
git commit -m "%MSG%"
if errorlevel 1 (
  echo [X] El commit ha fallado.
  goto :end
)

:push
echo.
echo --- Push a origin HEAD ---
git push origin HEAD
if errorlevel 1 (
  echo.
  echo [X] El push ha fallado. Revisa credenciales o conexion.
  goto :end
)

echo.
echo [OK] Subido correctamente a GitHub.

:end
echo.
pause
endlocal
