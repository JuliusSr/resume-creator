#!/bin/bash

npx lerna clean --yes
npx rimraf **/node_modules
npx rimraf **/package-lock.json
npx rimraf **/build

exit 0
