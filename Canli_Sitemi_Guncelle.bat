@echo off
title Canli Sitemi Guncelle - Hemsirelik Bakim Rehberim
color 0A
echo =====================================================
echo   HEMSIRELIK BAKIM REHBERIM - CANLI SITE GUNCELLEYICI
echo =====================================================
echo 1. Proje dosyalariniz masaustunuza senkronize ediliyor...
powershell -ExecutionPolicy Bypass -File "%~dp0update_helper.ps1" >nul 2>&1

echo 2. Masaustunuzdeki guncel proje klasoru aciliyor...
echo 3. Google Chrome uzerinden GitHub yukleme sayfaniz aciliyor...
echo.
timeout /t 1 /nobreak >nul
if exist "%USERPROFILE%\OneDrive\Desktop\Hemsirelik_Bakim_Rehberim" (
    start explorer.exe "%USERPROFILE%\OneDrive\Desktop\Hemsirelik_Bakim_Rehberim"
) else (
    start explorer.exe "%USERPROFILE%\Desktop\Hemsirelik_Bakim_Rehberim"
)

start chrome.exe "https://github.com/burakctn05/Hemsirelik-bakim-rehberim/upload/main" 2>nul || start "" "https://github.com/burakctn05/Hemsirelik-bakim-rehberim/upload/main"

echo.
echo Acilan GitHub sayfasina klasordeki guncel dosyalari surukleyip "Commit changes" yapmaniz yeterlidir!
echo.
pause
