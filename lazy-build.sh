#!/bin/bash
pnpm i
pnpm compileArrpc
pnpm package --linux pacman
sudo pacman -U dist/*.pacman