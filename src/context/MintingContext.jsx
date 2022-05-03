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
    case 'setDate':
      return {...state, date: action.payload}
    case 'setTitle':
      return{...state, title: action.payload}
    case 'setDescription':
      return{...state, description: action.payload}
    default:
      return state
  }
}

const takePicture = dispatch => async (camera) => {
  if(camera){
    const data = await camera.takePictureAsync({exif: true})
    dispatch({type: 'image', payload: data.uri} )
    dispatch({type: 'date', payload: data.DateTimeOriginal})
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

const uploadConfiguration = dispatch => (title, description) => {
  dispatch({type: 'setDescription', payload: description})
  dispatch({type: 'setTitle', payload: title})
}

// name, description, image, userName, publicAddress, date,

// const mint = async ({price}) => {
// try{
//   response = await Api.post('/nft/mint', {name: 'name', description: 'description',
//   image: 'image', creatorUsername: 'Massi_Ricci', creatorAdress: '0x4001B03038A24d75808b2F2d13f436aF152A8C04', ownerAdress: '0x4001B03038A24d75808b2F2d13f436aF152A8C04', date: '2022-04-30 15:05:54.496103+02',
//   location: 'Berlin', positionInTree: 0, amountSold: price})
//   console.log(response)
//   navigate('feed')
//  }
//  catch(err){
//   console.log(err)
//  }
// }

const toggleBool = (dispatch) => (val) => {val = !val, dispatch({type: 'setDerivative', payload: val})}

export const { Provider: MintingProvider , Context: MintingContext } = createDataContext(
  mintingReducer,
  { takePicture, pickImage, toggleBool, uploadConfiguration},
  { image: null, isDerivative: false, date: null, title: '', description: '' }
)
