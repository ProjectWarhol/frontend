import * as SecureStore from 'expo-secure-store'
import createDataContext from "./createDataContext"
import Api from '../api/api'
import { navigate } from '../navigationRef'

const authReducer = (state, action) => {
  switch (action.type){
    case 'signup':
      return {...state }
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
    case 'error_message':
      return {...state, errorMessage: action.payload }
    case 'login':
      return {errorMessage: '', cookie: action.payload}
    case 'clear_error_message':
      return { ...state, errorMessage: '' }
    case 'logout':
      return { cookie: null, errorMessage: '' }
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
  const mnemonic = response.data.mnemonic
  dispatch({ type: 'add_publicAddress', payload: `${publicAddress}`})
  dispatch({ type: 'add_privateKey', payload: `${privateKey}` })
  dispatch({ type: 'add_mnemonic', payload: `${mnemonic}` })
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

const logout = dispatch => async () => {
  try { const cookie = await SecureStore.getItemAsync('cookie')
  const config = {headers:{
    'my.sid': cookie
  }}
  await Api.post('/users/logout', config)
  await SecureStore.deleteItemAsync('cookie')
  dispatch({ type: 'logout'})
  navigate('unAuthenticatedUser')
  }catch(err){
  const cookie = await SecureStore.getItemAsync('cookie')
    await SecureStore.deleteItemAsync('cookie')
    dispatch({ type: 'logout'})
    navigate('unAuthenticatedUser')
}}

const tryLocalLogin = dispatch => async () => {
  const cookie = await SecureStore.getItemAsync('cookie')
if(cookie && isCookieValid()){
  dispatch({ type: 'login', payload: cookie})
  navigate('authenticatedUser')
}else{
  navigate('unAuthenticatedUser')
}
}

const isCookieValid = async(cookie) => {
  const config = {headers:{
    'my.sid': cookie
  }}
  await Api.get('/users/session', config)
  return true
}

const clearErrorMessage = dispatch => () => {
  dispatch({ type: 'clear_error_message' })
}

const login = (dispatch) => async ({ email, password }) => {
    try{
      const response = await Api.post('/users/login', { userCredential: email, password: password })
      let cookieArray = response["headers"]["set-cookie"]
      let cookieString = cookieArray.toString()
      const cookie = cookieString.substring(
        cookieString.indexOf('=') + 1,
        cookieString.indexOf(';')
      )
      await SecureStore.setItemAsync('cookie', cookie)
      dispatch({ type: 'login', payload: cookie})
      navigate('authenticatedUser')
    } catch (err){
      {dispatch({ type: 'error_message',  payload: 'Something went wrong' }, console.log(err))}
    }
  }

export const { Provider, Context } = createDataContext(
  authReducer,
  { login, logout, clearErrorMessage, tryLocalLogin, signup },
  { cookie: null, errorMessage: '', email: '', password: '', userName: '', userId: '', privateKey: '', publicAddress: '', mnemonic: '' }
)
