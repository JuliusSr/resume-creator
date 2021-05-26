#!/bin/bash

TS_START=$(date +%s)sec
TS_PREV=$TS_START

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

echo "Copying resources..."
npx lerna run copy-resources
TS_COPY_RESOURCES=$(TZ=UTC date --date now-$TS_PREV +%H:%M:%S)
TS_PREV=$(date +%s)sec
echo ""

echo "Bootstrap time: $TS_BOOTSTRAP"
echo "Transpile time: $TS_TRANSPILE"
echo "Resources copy time: $TS_COPY_RESOURCES"
echo "Total build time: $(TZ=UTC date --date now-$TS_START +%H:%M:%S)"

exit 0
