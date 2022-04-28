import { createStackNavigator } from 'react-navigation-stack'
import CreationScreen from '../screens/CreationScreen'
import CameraScreen from '../screens/CameraScreen'
import UploadConfigurationScreen from '../screens/UploadConfigurationScreen'
import SetupRoyaltiesScreen from '../screens/SetupRoyaltiesScreen'

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
  },
  setupRoyalties:{
    screen: SetupRoyaltiesScreen,
    navigationOptions:{
      headerShown: false,
        }
  }
})

export default mintingFlow
