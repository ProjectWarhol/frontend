import { ethers } from 'ethers'
// eslint-disable-next-line no-unused-vars
const createWallet = () => {
  const wallet = ethers.Wallet.createRandom()
  let data = {}
  data = {
    'privateKey':wallet.privateKey,
    'mnemonicPhrase':wallet.mnemonic.phrase
  }
  return data
}
