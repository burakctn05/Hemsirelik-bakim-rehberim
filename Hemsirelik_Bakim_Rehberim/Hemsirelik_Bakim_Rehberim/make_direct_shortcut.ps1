$desktops = @(
    [Environment]::GetFolderPath('Desktop'),
    "$env:USERPROFILE\Desktop",
    "$env:USERPROFILE\OneDrive\Masaüstü",
    "$env:USERPROFILE\OneDrive\Desktop"
) | Select-Object -Unique | Where-Object { Test-Path $_ }

$edgePath = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
if (-not (Test-Path $edgePath)) {
    $edgePath = "C:\Program Files\Microsoft\Edge\Application\msedge.exe"
}

$indexPath = "file:///c:/Users/Bilgisayarım/.gemini/antigravity-ide/scratch/nursing-care-app/index.html"
$wshShell = New-Object -ComObject WScript.Shell

foreach ($desktop in $desktops) {
    # Delete old broken shortcuts first
    $oldLnk1 = Join-Path $desktop "NursiPlan.lnk"
    $oldLnk2 = Join-Path $desktop "NursiPlan (Yedek Başlatıcı).lnk"
    if (Test-Path $oldLnk1) { Remove-Item $oldLnk1 -Force }
    if (Test-Path $oldLnk2) { Remove-Item $oldLnk2 -Force }

    # Create 100% Direct Edge App Shortcut
    $lnkPath = Join-Path $desktop "Hemşirelik Bakım Rehberim.lnk"
    $shortcut = $wshShell.CreateShortcut($lnkPath)
    $shortcut.TargetPath = $edgePath
    $shortcut.Arguments = "--app=`"$indexPath`""
    $shortcut.WorkingDirectory = "c:\Users\Bilgisayarım\.gemini\antigravity-ide\scratch\nursing-care-app"
    $shortcut.Description = "Hemşirelik Bakım Rehberim Uygulaması"
    $shortcut.IconLocation = "$edgePath,0"
    $shortcut.Save()

    Write-Host "Doğrudan Uygulama Kısayolu Oluşturuldu: $lnkPath"
}
