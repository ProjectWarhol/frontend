import createDataContext from "./createDataContext"
import Api from '../api/api'
import { navigate } from '../navigationRef'
// import {createCustodialWallet, storeCustodialWallet, generateSeedPhrase} from '../wallet/CustodialWallet'

const walletReducer = (state, action) => {
  switch (action, type){
    case('createWallet'):
      return {...state, }
    case 'add_error':
      return {...state, errorMessage: action.payload }
    case 'signup':
      return {...state, id: id}
    default:
      return state
  }
}

const signup = (dispatch) => {
  return async ({ email, password, userName }) => {
    try{
      const response = await Api.post('/users/createUser', { email: email, password: password, userName: userName })
      console.log(response.data)
      navigate('selectWallet')
    } catch (err)
    {dispatch({ type: 'add_error', payload: 'Something went wrong' }, console.log(err))
    }
  }
}

// const createWallet = dispatch => () => {
//   const wallet = createCustodialWallet()
//   console.log(wallet)

// }

export const { Provider, Context } = createDataContext(
  walletReducer,
  { signup },
  {errorMessage: '', id: null}

)
