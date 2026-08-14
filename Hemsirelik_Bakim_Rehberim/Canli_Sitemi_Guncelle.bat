@echo off
title Canli Sitemi Guncelle - Hemsirelik Bakim Rehberim
color 0A
echo =====================================================
echo   HEMSIRELIK BAKIM REHBERIM - CANLI SITE GUNCELLEYICI
echo =====================================================
echo.
echo 1. Masaustunuzdeki guncel proje klasoru aciliyor...
echo 2. Google Chrome uzerinden GitHub yukleme sayfaniz aciliyor...
echo.
timeout /t 2 /nobreak >nul
start explorer.exe "C:\Users\Bilgisayarım\Desktop\Hemsirelik_Bakim_Rehberim"

start chrome.exe "https://github.com/burakctn05/Hemsirelik-bakim-rehberim/upload/main" 2>nul || start "" "https://github.com/burakctn05/Hemsirelik-bakim-rehberim/upload/main"

echo.
echo Acilan GitHub sayfasina klasordeki guncel dosyalari surukleyip "Commit changes" yapmaniz yeterlidir!
echo.
pause
