#!/bin/bash

cd /root/app

npm ci
if [[ "$DEBUG" == "true" ]]; then
    echo "[*] starting application in debug mode"
    exec npm run debug
else
    echo "[*] starting application"
    exec npm run dev
fi
