Option Explicit
On Error Resume Next

Dim WshShell, fso, strScriptPath, strAppPath, psCmd, edgeCmd, res

Set WshShell = CreateObject("WScript.Shell")
Set fso = CreateObject("Scripting.FileSystemObject")

' Script'in bulunduğu tam dizin yolunu al
strScriptPath = WScript.ScriptFullName
strAppPath = fso.GetParentFolderName(strScriptPath)

' PowerShell sunucusunu gizli (hidden) pencerede başlat
psCmd = "powershell.exe -ExecutionPolicy Bypass -WindowStyle Hidden -File """ & strAppPath & "\server.ps1"""
WshShell.Run psCmd, 0, False

' Sunucunun başlaması için 1 saniye bekle
WScript.Sleep 1000

' MS Edge'i uygulama penceresi modunda aç
edgeCmd = "msedge.exe --app=http://localhost:3000/"
res = WshShell.Run(edgeCmd, 1, False)

' Edge açılmazsa varsayılan tarayıcıda aç
If res <> 0 Then
    WshShell.Run "http://localhost:3000/", 1, False
End If
