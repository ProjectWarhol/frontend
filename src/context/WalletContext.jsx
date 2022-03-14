import createDataContext from "./createDataContext"
import Api from '../api/api'
import { navigate } from '../navigationRef'
// import {createCustodialWallet, storeCustodialWallet, generateSeedPhrase} from '../wallet/CustodialWallet'

const walletReducer = (state, action) => {
  switch (action.type){
    case('createWallet'):
      return {...state }
    case 'signup':
      return {...state }
    case 'clear_error_message':
      return {...state, errorMessage: '' }
    case 'add_email':
      return {...state, email: action.payload}
    case 'add_password':
      return {...state, password: action.payload}
    case 'add_userName':
      return {...state, userName: action.payload}
    case 'add_userId':
      return {...state, userId: action.payload}
    case 'add_publicAddress':
      return {...state, publicAddress: action.payload}
    case 'add_privateKey':
      return {...state, privateKey: action.payload}
    case 'add_walletId':
      return {...state, walletId: action.payload}
    case 'add_index':
      return {...state, index: action.payload}
    case 'add_error':
      return {...state, errorMessage: action.payload }
    default:
      return state
  }
}

async function createWallet (userId, dispatch) {
    const response = await Api.post('/wallet/createWallet', {id: userId})
    console.log(response.data)
    const publicAddress = response.data.wallet.address
    const privateKey = response.data.wallet.privateKey
    const walletId = response.data.walletId
    const index = response.data.index
    dispatch({ type: 'add_publicAddress', payload: `${publicAddress}`})
    dispatch({ type: 'add_privateKey', payload: `${privateKey}` })
    dispatch({ type: 'add_walletId', payload: `${walletId}` })
    dispatch({ type: 'add_index', payload: `${index}` })
    return walletId
  }


const signup = (dispatch) => {
  return async ({ email, password, repeatedPassword, userName }) => {
    try{
      if (password === repeatedPassword)
      {const response = await Api.post('/users/createUser', { email: email, password: password, userName: userName })
      userId = response.data.userId
      const walletId = await createWallet(userId, dispatch)
      console.log(walletId)
      dispatch({ type: 'signup' })
      dispatch({ type: 'add_email', payload: `${email}`})
      dispatch({ type: 'add_password', payload: `${password}`})
      dispatch({ type: 'add_userName', payload: `${userName}`})
      dispatch({ type: 'add_userId', payload: `${userId}`})
      navigate('storageChoice')}
      else{dispatch({type: 'add_error', payload: 'Passwords need to match'})}
    } catch (err)
    {dispatch({ type: 'add_error', payload: 'Something went wrong' }, console.log(err))
    }
  }
}

const storeCustodialWallet = (dispatch) => {
  return async (array) => {
    console.log(array.array[0])
  }
}

const clearErrorMessage = dispatch => () => {
  dispatch({ type: 'clear_error_message' })
}

export const { Provider, Context } = createDataContext(
  walletReducer,
  { signup, clearErrorMessage, storeCustodialWallet },
  { errorMessage: '', email: '', password: '', userName: '', userId: '', privateKey: '', publicAddress: '', walletId: '', index: null }
)
