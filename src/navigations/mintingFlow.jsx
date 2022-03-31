import { createStackNavigator } from 'react-navigation-stack'
import CreationScreen from '../screens/CreationScreen'
import CameraScreen from '../screens/CameraScreen'
import CameraRollScreen from '../screens/CameraRollScreen'

const mintingFlow = createStackNavigator({
  creation: CreationScreen,
  camera: CameraScreen,
  cameraRoll: CameraRollScreen
})

export default mintingFlow
