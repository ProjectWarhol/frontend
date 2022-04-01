import createDataContext from "./createDataContext"
import Api from '../api/api'
import { navigate } from '../navigationRef'

const mintingReducer = (state, action) => {
  switch (action.type){
    case 'image':
      return {...state, image: action.payload}
    default:
      return state
  }
}

const takePicture = dispatch => async (camera) => {
  if(camera){
    const data = await camera.takePictureAsync(null)
    dispatch({type: 'image', payload: data.uri} )
    navigate('image')
  }
}

export const { Provider, Context } = createDataContext(
  mintingReducer,
  { takePicture },
  { image: null }
)
