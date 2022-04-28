import createDataContext from "./createDataContext"
import Api from '../api/api'
import { navigate } from '../navigationRef'
import * as ImagePicker from 'expo-image-picker';

const mintingReducer = (state, action) => {
  switch (action.type){
    case 'image':
      return {...state, image: action.payload}
    case 'setDerivative':
      return {isDerivative: action.payload}
    default:
      return state
  }
}

const takePicture = dispatch => async (camera) => {
  if(camera){
    const data = await camera.takePictureAsync(null)
    console.log(data)
    dispatch({type: 'image', payload: data.uri} )
    navigate('uploadConfiguration')
  }
}

const pickImage = dispatch => async () => {
  // No permissions request is necessary for launching the image library
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  if (!result.cancelled) {
    dispatch({type: 'image', payload: result.uri} )
    navigate('uploadConfiguration')
    dispatch({type: 'setDerivative', payload: false} )
    return false
  }
  else if(result.cancelled){
    return true
  }
};

const toggleBool = (dispatch) => (val) => {val = !val, dispatch({type: 'setDerivative', payload: val})}

export const { Provider: MintingProvider , Context: MintingContext } = createDataContext(
  mintingReducer,
  { takePicture, pickImage, toggleBool },
  { image: null, isDerivative: false }
)
