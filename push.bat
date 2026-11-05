@echo off
echo ========================================================
echo   Pushing Portfolio to https://github.com/sajjadali4441-web/portfolio
echo ========================================================
cd /d D:\Portfolio
"C:\Users\Arcana\AppData\Local\Microsoft\WinGet\Packages\Git.MinGit_Microsoft.Winget.Source_8wekyb3d8bbwe\cmd\git.exe" remote add origin https://github.com/sajjadali4441-web/portfolio.git 2>nul
"C:\Users\Arcana\AppData\Local\Microsoft\WinGet\Packages\Git.MinGit_Microsoft.Winget.Source_8wekyb3d8bbwe\cmd\git.exe" remote set-url origin https://github.com/sajjadali4441-web/portfolio.git
"C:\Users\Arcana\AppData\Local\Microsoft\WinGet\Packages\Git.MinGit_Microsoft.Winget.Source_8wekyb3d8bbwe\cmd\git.exe" push -u origin main
echo.
echo If push succeeded, your site is now deploying on GitHub Actions!
pause
