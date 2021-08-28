Set oShell = CreateObject ("Wscript.Shell") 
Dim strArgs
strArgs = "cmd /c settings.bat"
oShell.Run strArgs, 0, false