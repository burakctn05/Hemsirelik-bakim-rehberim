$desktops = @(
    [Environment]::GetFolderPath('Desktop'),
    "$env:USERPROFILE\Desktop",
    "$env:USERPROFILE\OneDrive\Masaüstü",
    "$env:USERPROFILE\OneDrive\Desktop"
) | Select-Object -Unique | Where-Object { Test-Path $_ }

$urlContent = @"
[InternetShortcut]
URL=https://github.com/burakctn05/Hemsirelik-bakim-rehberim
IconIndex=0
IconFile=C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe
"@

foreach ($desktop in $desktops) {
    $urlPath = Join-Path $desktop "GitHub Deposu (Yönetim Paneli).url"
    [System.IO.File]::WriteAllText($urlPath, $urlContent, [System.Text.Encoding]::UTF8)
    Write-Host "GitHub kısayolu oluşturuldu: $urlPath"
}
