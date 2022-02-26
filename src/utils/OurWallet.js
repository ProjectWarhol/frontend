// third-party
const Web3 = require('web3')
let bip39 = require('bip39')

const web3 = new Web3()
// eslint-disable-next-line no-unused-vars
exports.generateSeedPhrase = () => {
    const mnemonic = bip39.generateMnemonic()
    return mnemonic
}

exports.createOurWallet = () => {
    const wallet = web3.eth.accounts.wallet.create(1)
    const seedPhrase = generateSeedPhrase()
    const data = {
        wallet: wallet,
        seedPhrase: seedPhrase,
    }
    return data
}

const storeOurWallet = (ourWalletData, password) => {
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
