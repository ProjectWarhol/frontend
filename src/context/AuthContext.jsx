import * as SecureStore from 'expo-secure-store'
import createDataContext from "./createDataContext"
import Api from '../api/api'
import { navigate } from '../navigationRef'

const authReducer = (state, action) => {
  switch (action.type){
    case 'add_error':
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
  navigate('mainFlow')
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
      navigate('mainFlow')
    } catch (err){
      {dispatch({ type: 'add_error',  payload: 'Something went wrong' }, console.log(err))}
    }
  }

export const { Provider, Context } = createDataContext(
  authReducer,
  { login, logout, clearErrorMessage, tryLocalLogin },
  { cookie: null, errorMessage: '' }
)
