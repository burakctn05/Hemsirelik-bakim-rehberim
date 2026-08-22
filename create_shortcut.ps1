$desktops = @(
    [Environment]::GetFolderPath('Desktop'),
    "$env:USERPROFILE\Desktop",
    "$env:USERPROFILE\OneDrive\Masaüstü",
    "$env:USERPROFILE\OneDrive\Desktop"
) | Select-Object -Unique | Where-Object { Test-Path $_ }

$targetVbs = "c:\Users\Bilgisayarım\.gemini\antigravity-ide\scratch\nursing-care-app\BakimRehberim_Start.vbs"
$targetBat = "c:\Users\Bilgisayarım\.gemini\antigravity-ide\scratch\nursing-care-app\BakimRehberim_Baslat.bat"
$workDir = "c:\Users\Bilgisayarım\.gemini\antigravity-ide\scratch\nursing-care-app"

$wshShell = New-Object -ComObject WScript.Shell

foreach ($desktop in $desktops) {
    # 1. Main VBS Shortcut
    $lnkPath = Join-Path $desktop "Hemşirelik Bakım Rehberim.lnk"
    $shortcut = $wshShell.CreateShortcut($lnkPath)
    $shortcut.TargetPath = "wscript.exe"
    $shortcut.Arguments = "`"$targetVbs`""
    $shortcut.WorkingDirectory = $workDir
    $shortcut.Description = "Hemşirelik Bakım Rehberim NANDA-I Bakım Planı Asistanı"
    $shortcut.IconLocation = "c:\Users\Bilgisayarım\.gemini\antigravity-ide\scratch\nursing-care-app\assets\logo.ico"
    $shortcut.Save()

    # 2. Direct BAT Shortcut
    $batLnkPath = Join-Path $desktop "Hemşirelik Bakım Rehberim (Yedek Başlatıcı).lnk"
    $batShortcut = $wshShell.CreateShortcut($batLnkPath)
    $batShortcut.TargetPath = $targetBat
    $batShortcut.WorkingDirectory = $workDir
    $batShortcut.Description = "Hemşirelik Bakım Rehberim (Toplu İş Dosyası)"
    $batShortcut.IconLocation = "c:\Users\Bilgisayarım\.gemini\antigravity-ide\scratch\nursing-care-app\assets\logo.ico"
    $batShortcut.Save()

    Write-Host "Kısayollar oluşturuldu ($desktop):"
    Write-Host " - Hemşirelik Bakım Rehberim.lnk"
    Write-Host " - Hemşirelik Bakım Rehberim (Yedek Başlatıcı).lnk"
}
