@echo off
cd /d "%~dp0"
start "" http://localhost:8007
py -3 -m http.server 8007
pause
