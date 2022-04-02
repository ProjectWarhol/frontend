import { createStackNavigator } from 'react-navigation-stack'
import CreationScreen from '../screens/CreationScreen'
import CameraScreen from '../screens/CameraScreen'
import UploadConfigurationScreen from '../screens/UploadConfigurationScreen'

const mintingFlow = createStackNavigator({
  camera: {
    screen: CameraScreen,
    navigationOptions:{
      headerShown: false,
        }
  },
  image: {
    screen: UploadConfigurationScreen,
    navigationOptions:{
      headerShown: false,
        }
  }
})

export default mintingFlow
