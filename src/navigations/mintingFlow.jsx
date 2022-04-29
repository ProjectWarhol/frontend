import { createStackNavigator } from 'react-navigation-stack'
import CreationScreen from '../screens/CreationScreen'
import CameraScreen from '../screens/CameraScreen'
import UploadConfigurationScreen from '../screens/UploadConfigurationScreen'
import SetupPriceScreen from '../screens/SetupPriceScreen'
import RoyaltyShareScreen from '../screens/RoyaltyShareScreen'

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
  setupPrice:{
    screen: SetupPriceScreen,
    navigationOptions:{
      headerShown: false,
        }
  },
  royaltyShare:{
    screen: RoyaltyShareScreen,
    navigationOptions:{
      headerShown: false,
        }
  }
})

export default mintingFlow
