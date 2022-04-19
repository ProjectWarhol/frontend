import { createStackNavigator } from 'react-navigation-stack'
import CreationScreen from '../screens/CreationScreen'
import CameraScreen from '../screens/CameraScreen'
import UploadConfigurationScreen from '../screens/UploadConfigurationScreen'

const mintingFlow = createStackNavigator({
  creation:{
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
  uploadConfiguration: {
    screen: UploadConfigurationScreen,
    navigationOptions:{
      headerShown: false,
        }
  }
})

export default mintingFlow
