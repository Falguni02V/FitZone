@echo off
title FitZone Gym Management - Launcher
color 0A

echo ============================================
echo    FitZone Gym Management System
echo    Auto Launcher
echo ============================================
echo.

:: ─── Check Node.js ───
echo [1/4] Checking if Node.js is installed...
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo.
    echo  ERROR: Node.js is NOT installed!
    echo.
    echo  Please download and install Node.js from:
    echo  https://nodejs.org/en/download/
    echo.
    start https://nodejs.org/en/download/
    echo  After installing Node.js, run this file again.
    pause
    exit /b
)

for /f "tokens=*" %%i in ('node -v') do set NODE_VER=%%i
echo  Node.js found: %NODE_VER%

for /f "tokens=*" %%i in ('npm -v') do set NPM_VER=%%i
echo  npm found: v%NPM_VER%
echo.

:: ─── Save project path ───
set PROJECT_DIR=%~dp0
set PROJECT_DIR=%PROJECT_DIR:~0,-1%

:: ─── Install Dependencies ───
echo [2/4] Installing dependencies...
cd /d "%PROJECT_DIR%"
if not exist "node_modules" (
    echo  Running npm install... (this may take a minute)
    call npm install
    if %ERRORLEVEL% NEQ 0 (
        echo  ERROR: npm install failed!
        pause
        exit /b
    )
    echo  Dependencies installed successfully!
) else (
    echo  Dependencies already installed.
)
echo.

:: ─── Check .env ───
echo [3/4] Checking configuration...
if not exist "%PROJECT_DIR%\backend\.env" (
    echo  WARNING: backend\.env not found!
)
echo.

:: ─── Start Server + Open Browser ───
echo [4/4] Starting FitZone server...
echo.
echo ============================================
echo  Server: http://localhost:3000
echo  Opening browser in 4 seconds...
echo  Press Ctrl+C to stop the server.
echo ============================================
echo.

:: Open browser after delay in background
start "" cmd /c "timeout /t 4 /nobreak >nul & start http://localhost:3000"

:: Run server directly here (same as manual)
cd /d "%PROJECT_DIR%"
node backend\server.js

pause
