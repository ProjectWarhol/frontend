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
      return { ...state, errorMessage: '' }
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
      console.log(response.data)
      dispatch({ type: 'signup' })
      navigate('selectWallet')}
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
  { errorMessage: '', email: '', password: '', userName: ''}
)
