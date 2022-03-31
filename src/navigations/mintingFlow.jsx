import { createStackNavigator } from 'react-navigation-stack'
import CreationScreen from '../screens/CreationScreen'
import CameraScreen from '../screens/CameraScreen'
import CameraRollScreen from '../screens/CameraRollScreen'

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
  cameraRoll: CameraRollScreen
})

export default mintingFlow
