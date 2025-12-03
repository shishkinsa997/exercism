@echo off
for /d %%i in (.\javascript\*) do (
    cd "%%i"
    call corepack pnpm install
    cd "..\.."
)
