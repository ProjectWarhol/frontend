import * as SecureStore from 'expo-secure-store'
import createDataContext from "./createDataContext"
import Api from '../api/api'
import { navigate } from '../navigationRef'

const authReducer = (state, action) => {
  switch (action.type){
    case 'add_error':
      return {...state, errorMessage: action.payload }
    case 'signin':
      return {errorMessage: '', token: action.payload}
    case 'clear_error_message':
      return { ...state, errorMessage: '' }
    default:
      return state
  }
}

const tryLocalSignin = dispatch => async () => {
  const cookie = await SecureStore.getItemAsync('cookie')
  if (cookie) {
    dispatch({ type: 'signin', payload: cookie})
    navigate('mainFlow')
  }
  else{
    navigate('default')
  }

}

const clearErrorMessage = dispatch => () => {
  dispatch({ type: 'clear_error_message' })
}

const signup = (dispatch) => {
  return async ({ email, password, userName }) => {
    try{
      const response = await Api.post('/users/createUser', { email: email, password: password, userName: userName })
      console.log(response.data)
    } catch (err)
    {dispatch({ type: 'add_error', payload: 'Something went wrong' }, console.log(err))
    }
  }
}

const signin = (dispatch) => async ({ email, password }) => {
    try{
      const response = await Api.post('/users/login', { email: email, password: password })
      let cookieArray = response["headers"]["set-cookie"]
      let cookieString = cookieArray.toString()
      const cookie = cookieString.substring(
        cookieString.indexOf('=') + 1,
        cookieString.indexOf(';')
      )
      await SecureStore.setItemAsync('cookie', cookie)
      dispatch({ type: 'signin', payload: cookie})

      navigate('mainFlow')
      console.log(cookie + "2")
    }catch (err){
      {dispatch({ type: 'add_error',  payload: 'Something went wrong' }, console.log(err))}
    }
  }

const signout = (dispatch) => {
  return () => {
  }
}

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signup, signout, clearErrorMessage, tryLocalSignin },
  { token: null, errorMessage: '' }
)
