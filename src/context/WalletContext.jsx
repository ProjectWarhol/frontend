import createDataContext from "./createDataContext"
import Api from '../api/api'
import { navigate } from '../navigationRef'

const walletReducer = (state, action) => {
  switch (action, type){
    default:
      return state
  }
}

const createWallet = dispatch => () => {

}

export const { Provider, Context } = createWalletContext(
  walletReducer,
  { createWallet }
)
