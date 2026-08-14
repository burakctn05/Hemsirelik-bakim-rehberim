$desktops = @(
    [Environment]::GetFolderPath('Desktop'),
    "$env:USERPROFILE\Desktop",
    "$env:USERPROFILE\OneDrive\Masaüstü",
    "$env:USERPROFILE\OneDrive\Desktop"
) | Select-Object -Unique | Where-Object { Test-Path $_ }

$sourceDir = $PSScriptRoot

foreach ($desktop in $desktops) {
    $possibleNames = @("Hemsirelik Bakım Reberim", "Hemsirelik_Bakim_Rehberim", "Hemsirelik Bakım Rehberim", "Hemsirelik Bakım Reberim\Hemsirelik_Bakim_Rehberim")
    foreach ($name in $possibleNames) {
        $targetFolder = Join-Path $desktop $name
        if (Test-Path $targetFolder) {
            Copy-Item -Path "$sourceDir\*" -Destination $targetFolder -Recurse -Force
            Write-Host "Güncellendi: $targetFolder"
        }
    }
}
