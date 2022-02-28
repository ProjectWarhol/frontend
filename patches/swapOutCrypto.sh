#!/bin/bash

Swap out `crypto` with `crypto-browserify`
- node_modules/@walletconnect/randombytes/dist/cjs/node/index.js
- node_modules/@walletconnect/crypto/dist/cjs/lib/node.js

Add `var Buffer = require("@craftzdog/react-native-buffer").Buffer at top`
- node_modules/@walletconnect/encoding/node_modules/typedarray-to-buffer/index.js
- node_modules/randombytes/index.js
- node_modules/@walletconnect/encoding/dist/cjs/index.js
- node_modules/@walletconnect/crypto/dist/cjs/lib/node.js
