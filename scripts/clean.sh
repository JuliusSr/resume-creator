#!/bin/bash

TS_START=$(date +%s)sec

echo "Cleaning..."
npx lerna clean --yes
npx rimraf **/node_modules
npx rimraf **/package-lock.json
npx rimraf **/build
echo ""

echo "Clean time: $(TZ=UTC date --date now-$TS_START +%H:%M:%S)"

exit 0
