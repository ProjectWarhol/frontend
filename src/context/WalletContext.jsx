import createDataContext from "./createDataContext"
import Api from '../api/api'
import { navigate } from '../navigationRef'
// import {createCustodialWallet, storeCustodialWallet, generateSeedPhrase} from '../wallet/CustodialWallet'

const walletReducer = (state, action) => {
  switch (action.type){
    case('createWallet'):
      return {...state, }
    default:
      return state
  }
}

const createWallet = dispatch => () => {
  const wallet = createCustodialWallet()
  console.log(wallet)
}

export const { Provider, Context } = createDataContext(
  walletReducer,
  { createWallet },
  {errorMessage: '', id: null}
)
