#!/bin/bash
# Swap out `crypto` with `crypto-browserify`
# - node_modules/@walletconnect/randombytes/dist/cjs/node/index.js
# - node_modules/@walletconnect/crypto/dist/cjs/lib/node.js
FILES=($1 $2)
function swapPackages {
  for ARG in ${FILES[*]}
  do
    sed -i -e 's/\"crypto\"/\"crypto-browserify\"/' $ARG
  done
}
swapPackages
echo "Successfully swapped out crypto with crypto-browserify"
