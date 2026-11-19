# Windows-side build helper. Real Archive/upload must run on macOS/Xcode.
$ErrorActionPreference='Stop'
Set-Location (Split-Path $PSScriptRoot)
Write-Host '1) install deps'
npm ci
Write-Host '2) refresh www/ mirror from repo root (excluding ios/node_modules/.git/appstore/notion-pack)'
if(Test-Path www){Remove-Item www -Recurse -Force}
New-Item -ItemType Directory www | Out-Null
Get-ChildItem -Exclude www,ios,node_modules,.git,appstore,notion-pack,capacitor.config.json,package.json,package-lock.json,README.md | ForEach-Object { Copy-Item $_.FullName www\ -Recurse -Force }
Write-Host '3) cap sync ios'
npx cap sync ios
Write-Host 'Done. Now on Mac: npx cap open ios → Archive → Distribute.'
