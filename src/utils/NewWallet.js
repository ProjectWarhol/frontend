import { ethers } from 'ethers'

const createWallet = () => {
  const wallet = ethers.Wallet.createRandom()
  let data = {}
  data = {
    'privateKey':wallet.privateKey,
    'mnemonicPhrase':wallet.mnemonic.phrase
  }
  return data
}
