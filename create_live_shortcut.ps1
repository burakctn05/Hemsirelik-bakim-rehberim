$desktops = @(
    [Environment]::GetFolderPath('Desktop'),
    "$env:USERPROFILE\Desktop",
    "$env:USERPROFILE\OneDrive\Masaüstü",
    "$env:USERPROFILE\OneDrive\Desktop"
) | Select-Object -Unique | Where-Object { Test-Path $_ }

$urlContent = @"
[InternetShortcut]
URL=https://hemsirelikrehberi.com.tr/
IconIndex=0
IconFile=C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe
"@

foreach ($desktop in $desktops) {
    $urlPath = Join-Path $desktop "Hemşirelik Bakım Rehberim (Canlı Web Sitesi).url"
    [System.IO.File]::WriteAllText($urlPath, $urlContent, [System.Text.Encoding]::UTF8)
    Write-Host "Kısayol oluşturuldu: $urlPath"
}
