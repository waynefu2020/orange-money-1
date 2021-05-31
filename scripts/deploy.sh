#!/usr/bin/env bash

yarn build &&
cd build &&
git init &&
git add . &&
git commit -m 'deploy' &&
git remote add origin git@github.com:waynefu2020/orange-money-web.git &&
git branch -M main &&
git push -u origin main -f
cd ..