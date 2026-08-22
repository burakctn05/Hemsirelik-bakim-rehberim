$desktops = @(
    [Environment]::GetFolderPath('Desktop'),
    "$env:USERPROFILE\Desktop",
    "$env:USERPROFILE\OneDrive\Masaüstü",
    "$env:USERPROFILE\OneDrive\Desktop"
) | Select-Object -Unique | Where-Object { $_ -and (Test-Path $_) }

$sourceDir = $PSScriptRoot
$itemsToCopy = Get-ChildItem -Path $sourceDir | Where-Object { $_.Name -ne "scratch" -and $_.Name -ne ".git" }

foreach ($desktop in $desktops) {
    $targetDir = Join-Path $desktop "Hemsirelik_Bakim_Rehberim"
    if (Test-Path $targetDir) {
        foreach ($item in $itemsToCopy) {
            Copy-Item -Path $item.FullName -Destination $targetDir -Recurse -Force
        }
        Write-Host "Masaüstü Klasörü Güncellendi: $targetDir"
    }
}



