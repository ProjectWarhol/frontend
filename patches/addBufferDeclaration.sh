#!/bin/bash

# Add `var Buffer = require("@craftzdog/react-native-buffer").Buffer at top`
# - node_modules/randombytes/browser.js
# - node_modules/@walletconnect/encoding/dist/cjs/index.js
# - node_modules/@walletconnect/crypto/dist/cjs/lib/node.js
FILES=($1 $2 $3)
function addBuffer {
  for FILE in ${FILES[*]}
  do
    ex -sc '2i|var Buffer = require("@craftzdog/react-native-buffer").Buffer' -cx "$FILE"
  done
}
addBuffer
ex -sc '1i|var Buffer = require("@craftzdog/react-native-buffer").Buffer' -cx "$4"
echo "Successfully added Buffer declaration"
