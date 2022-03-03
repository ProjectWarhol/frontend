// third-party
const Web3 = require('web3')
let bip39 = require('bip39')

const web3 = new Web3()

exports.generateSeedPhrase = () => {
    const mnemonic = bip39.generateMnemonic()
    return mnemonic
}

exports.createCustodialWallet = () => {
    const wallet = web3.eth.accounts.wallet.create(1)
    const seedPhrase = exports.generateSeedPhrase()
    const data = {
        wallet: wallet,
        seedPhrase: seedPhrase,
    }
    return data
}

exports.storeCustodialWallet = (ourWalletData, password) => {
    const wallet = ourWalletData.wallet[0]
    const seedPhrase = ourWalletData.seedPhrase
    const address = wallet.address
    const privateKey = wallet.privateKey
    const encryptedPrivateKey = web3.eth.accounts.encrypt(privateKey, password)
    const data = {
        address: address,
        encryptedPrivateKey: encryptedPrivateKey,
        seedPhrase: seedPhrase,
    }
    return data
}

exports.validateInput = (userInput, expected) => {
    let validation = false
    if (userInput === expected) {
        validation = true
    }
    return validation
}