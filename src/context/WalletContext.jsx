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
    case 'add_error':
      return {...state, errorMessage: action.payload }
    default:
      return state
  }
}

const signup = (dispatch) => {
  return async ({ email, password, repeatedPassword, userName }) => {
    try{
      if (password === repeatedPassword)
      {const response = await Api.post('/users/createUser', { email: email, password: password, userName: userName })
      console.log(response.data.userId)
      userId = response.data.userId
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

const clearErrorMessage = dispatch => () => {
  dispatch({ type: 'clear_error_message' })
}

export const { Provider, Context } = createDataContext(
  walletReducer,
  { signup, clearErrorMessage },
  { errorMessage: '', email: '', password: '', userName: '', userId: ''}
)
