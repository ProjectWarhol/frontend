import createDataContext from "./createDataContext"
import Api from '../api/api'
import { navigate } from '../navigationRef'
import * as ImagePicker from 'expo-image-picker';

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
    navigate('UploadConfigurationScreen')
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

  console.log(result);

  if (!result.cancelled) {
    dispatch({type: 'image', payload: result.uri} )
    navigate('UploadConfigurationScreen')
    return false
  }
  else if(result.cancelled){
    return true
  }
};

export const { Provider, Context } = createDataContext(
  mintingReducer,
  { takePicture, pickImage },
  { image: null }
)
