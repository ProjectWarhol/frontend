import createDataContext from "./createDataContext"
import Api from '../api/api'
import * as SecureStore from 'expo-secure-store'
import { navigate } from '../navigationRef'

const walletReducer = (state, action) => {
  switch (action.type){
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
    case 'add_mnemonic':
      return {...state, mnemonic: action.payload}
    case 'add_walletId':
      return {...state, walletId: action.payload}
    case 'error_message':
      return {...state, errorMessage: action.payload }
    default:
      return state
  }
}

async function createWallet ( dispatch, email, password, userName) {
  const response = await Api.post('/users/express', {userName: userName, email: email, password: password})
  let cookieArray = response["headers"]["set-cookie"]
  let cookieString = cookieArray.toString()
  const cookie = cookieString.substring(
  cookieString.indexOf('=') + 1,
  cookieString.indexOf(';'))
  await SecureStore.setItemAsync('cookie', cookie)
  const publicAddress = response.data.wallet.address
  const privateKey = response.data.wallet.privateKey
  const walletId = response.data.walletId
  const mnemonic = response.data.mnemonic
  dispatch({ type: 'add_publicAddress', payload: `${publicAddress}`})
  dispatch({ type: 'add_privateKey', payload: `${privateKey}` })
  dispatch({ type: 'add_mnemonic', payload: `${mnemonic}` })
  return walletId
}

const signup = (dispatch) => {
  return async ({ email, password, repeatedPassword, userName }) => {
    try{
      if (password === repeatedPassword)
      {const response = await Api.post('/users/createUser', { email: email, password: password, userName: userName })
      userId = response.data.userId
      await createWallet( dispatch, email, password, userName)
      dispatch({ type: 'signup' })
      dispatch({ type: 'add_email', payload: `${email}`})
      dispatch({ type: 'add_password', payload: `${password}`})
      dispatch({ type: 'add_userName', payload: `${userName}`})
      dispatch({ type: 'add_userId', payload: `${userId}`})
      navigate('storageChoice')}
      else{dispatch({type: 'error_message', payload: 'Passwords need to match'})}
    } catch (err)
    {dispatch({ type: 'error_message', payload: 'Something went wrong' }, console.log(err))
    }
  }
}

const clearErrorMessage = dispatch => () => {
  dispatch({ type: 'clear_error_message' })
}

export const { Provider, Context } = createDataContext(
  walletReducer,
  { signup, clearErrorMessage },
  { errorMessage: '', email: '', password: '', userName: '', userId: '', privateKey: '', publicAddress: '', walletId: '', mnemonic: '' }
)
