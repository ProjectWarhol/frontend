import Web3 from 'web3'

const web3 = new Web3()

const createPrivateKey = () => {
  const account = web3.eth.accounts.create()
  const privateKey = account.privateKey
  return privateKey
}


