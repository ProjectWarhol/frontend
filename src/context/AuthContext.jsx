import createDataContext from "./createDataContext";
import Api from '../api/api'

const authReducer = (state, action) => {
  switch (action.type){
    case 'add_error':
      return {...state, errorMessage: action.payload }
    default:
      return state
  }
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

const signin = (dispatch) => {
  return ({ email, password }) => {

  }
}

const signout = (dispatch) => {
  return () => {

  }
}

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signup, signout },
  { isSignedIn: false, errorMessage: '' }
)
