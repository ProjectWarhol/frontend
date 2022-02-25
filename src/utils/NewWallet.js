const Web3 = require('web3')
var bip39 = require('bip39')

const web3 = new Web3()
// eslint-disable-next-line no-unused-vars
const generateSeedPhrase = () => {
    mnemonic = bip39.generateMnemonic()
    return mnemonic
}
