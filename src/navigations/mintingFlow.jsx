import { createStackNavigator } from 'react-navigation-stack'
import CreationScreen from '../screens/CreationScreen'
import CameraScreen from '../screens/CameraScreen'
import ImageScreen from '../screens/ImageScreen'

const mintingFlow = createStackNavigator({
  creation: {
    screen: CreationScreen,
    navigationOptions:{
      headerShown: false,
        }
      },
  camera: {
    screen: CameraScreen,
    navigationOptions:{
      headerShown: false,
        }
  },
  image: {
    screen: ImageScreen,
    navigationOptions:{
      headerShown: false,
        }
  }
})

export default mintingFlow
