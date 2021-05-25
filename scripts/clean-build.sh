#!/bin/bash

TS_START=$(date +%s)sec
TS_PREV=$TS_START

echo "Cleaning..."
npx lerna clean --yes
npx rimraf **/node_modules
npx rimraf **/package-lock.json
npx rimraf **/build
TS_CLEAN=$(TZ=UTC date --date now-$TS_PREV +%H:%M:%S)
TS_PREV=$(date +%s)sec
echo ""

echo "Bootstrapping..."
npx lerna bootstrap --hoist
TS_BOOTSTRAP=$(TZ=UTC date --date now-$TS_PREV +%H:%M:%S)
TS_PREV=$(date +%s)sec
echo ""

echo "Transpiling..."
npx lerna run transpile
TS_TRANSPILE=$(TZ=UTC date --date now-$TS_PREV +%H:%M:%S)
TS_PREV=$(date +%s)sec
echo ""

echo "Clean time: $TS_CLEAN"
echo "Bootstrap time: $TS_BOOTSTRAP"
echo "Transpile time: $TS_TRANSPILE"
echo "Total build time: $(TZ=UTC date --date now-$TS_START +%H:%M:%S)"

exit 0
