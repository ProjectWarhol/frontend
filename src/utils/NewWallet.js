const Web3 = require('web3')
var bip39 = require('bip39')

const web3 = new Web3()
// eslint-disable-next-line no-unused-vars
const generateSeedPhrase = () => {
    mnemonic = bip39.generateMnemonic()
    return mnemonic
}

const createAccount = (password) => {
    const account = web3.eth.accounts.create()
    const privateKey = account.privateKey
    const encryptedPrivateKey = web3.eth.accounts.encrypt(privateKey, password)
    const address = account.address
    const seedPhrase = generateSeedPhrase()
    const data = {
        address: address,
        encryptedPrivateKey: encryptedPrivateKey,
        seedPhrase: seedPhrase,
    }
    return data
}