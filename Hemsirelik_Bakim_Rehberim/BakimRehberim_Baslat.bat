@echo off
title Hemşirelik Bakım Rehberim Başlatıcı
cd /d "%~dp0"
echo Hemşirelik Bakım Rehberim sunucusu başlatılıyor...
start /b powershell.exe -ExecutionPolicy Bypass -WindowStyle Hidden -File "%~dp0server.ps1"
timeout /t 1 /nobreak >nul
start msedge.exe --app=http://localhost:3000/
