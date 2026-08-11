$desktops = @(
    [Environment]::GetFolderPath('Desktop'),
    "$env:USERPROFILE\Desktop",
    "$env:USERPROFILE\OneDrive\Masaüstü",
    "$env:USERPROFILE\OneDrive\Desktop"
) | Select-Object -Unique | Where-Object { Test-Path $_ }

$redirectHtml = @"
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="refresh" content="0; url=file:///c:/Users/Bilgisayar%C4%B1m/.gemini/antigravity-ide/scratch/nursing-care-app/index.html">
    <title>Hemşirelik Bakım Rehberim</title>
    <script>
        window.location.href = "file:///c:/Users/Bilgisayar%C4%B1m/.gemini/antigravity-ide/scratch/nursing-care-app/index.html";
    </script>
</head>
<body style="font-family: system-ui, -apple-system, sans-serif; text-align: center; padding: 60px; background-color: #0f172a; color: #f8fafc;">
    <div style="max-width: 500px; margin: 0 auto; background: #1e293b; padding: 40px; border-radius: 16px; border: 1px solid #334155; box-shadow: 0 10px 25px rgba(0,0,0,0.3);">
        <h2 style="color: #0d9488; margin-bottom: 12px;">🏥 Hemşirelik Bakım Rehberim</h2>
        <p style="margin-bottom: 20px; color: #94a3b8;">Uygulama açılıyor, lütfen bekleyiniz...</p>
        <a href="file:///c:/Users/Bilgisayar%C4%B1m/.gemini/antigravity-ide/scratch/nursing-care-app/index.html" style="color: #5eead4; text-decoration: none; font-weight: bold;">Doğrudan Açmak İçin Tıklayın →</a>
    </div>
</body>
</html>
"@

foreach ($desktop in $desktops) {
    $targetFile1 = Join-Path $desktop "Hemşirelik Bakım Rehberim.html"
    $targetFile2 = Join-Path $desktop "Hemsirelik_Bakim_Rehberim.html"
    
    [System.IO.File]::WriteAllText($targetFile1, $redirectHtml, [System.Text.Encoding]::UTF8)
    [System.IO.File]::WriteAllText($targetFile2, $redirectHtml, [System.Text.Encoding]::UTF8)
    
    Write-Host "Masaüstü HTML dosyaları oluşturuldu: $desktop"
}
