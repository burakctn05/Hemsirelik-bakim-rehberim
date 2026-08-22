$desktops = @(
    [Environment]::GetFolderPath('Desktop'),
    "$env:USERPROFILE\Desktop",
    "$env:USERPROFILE\OneDrive\Masaüstü",
    "$env:USERPROFILE\OneDrive\Desktop"
) | Select-Object -Unique | Where-Object { $_ -and (Test-Path $_) }

$sourceDir = $PSScriptRoot
$itemsToCopy = Get-ChildItem -Path $sourceDir | Where-Object { $_.Name -ne "scratch" -and $_.Name -ne ".git" }

foreach ($desktop in $desktops) {
    $targetFolders = Get-ChildItem -Path $desktop -Directory -ErrorAction SilentlyContinue | Where-Object { $_.Name -like "*Hemsirelik*" -or $_.Name -like "*Bakim*" -or $_.Name -like "*Rehber*" }
    
    foreach ($targetDir in $targetFolders) {
        foreach ($item in $itemsToCopy) {
            Copy-Item -Path $item.FullName -Destination $targetDir.FullName -Recurse -Force
        }
        Write-Host "Masaüstü Klasörü Güncellendi: $($targetDir.FullName)"
        
        $subDirs = Get-ChildItem -Path $targetDir.FullName -Directory -ErrorAction SilentlyContinue | Where-Object { $_.Name -like "*Hemsirelik*" -or $_.Name -like "*Bakim*" -or $_.Name -like "*Rehber*" }
        foreach ($sub in $subDirs) {
            foreach ($item in $itemsToCopy) {
                Copy-Item -Path $item.FullName -Destination $sub.FullName -Recurse -Force
            }
            Write-Host "Alt Klasör Güncellendi: $($sub.FullName)"
        }
    }
}


