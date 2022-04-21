import { createStackNavigator } from 'react-navigation-stack'
import DoneScreen from '../screens/DoneScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import SignupScreen from '../screens/SignupScreen';
import LoginScreen from '../screens/LoginScreen';
import walletInformationScreen from '../screens/WalletInformationScreen';
import validateSeedPhraseScreen from '../screens/ValidateSeedPhraseScreen';
import SelectAuthenticationScreen from '../screens/SelectAuthenticationScreen';
import MnemonicScreen from '../screens/MnemonicScreen';

const authenticationFlow = createStackNavigator({
  selectAuthentication: {
    screen: SelectAuthenticationScreen,
    navigationOptions:{
      headerShown: false,
        }
  },
  login:{ screen: LoginScreen,
  navigationOptions:{
    headerShown: false,
      }
    },
  signup: {
    screen: SignupScreen,
    navigationOptions:{
      headerShown: false,
      gestureDirection: 'horizontal-inverted'
        }
  },
  forgotPassword: ForgotPasswordScreen,
  walletInformation: {
    screen: walletInformationScreen,
    navigationOptions:{
      headerShown: false,
      gestureDirection: 'horizontal-inverted'
        }
  },
  validateSeedPhrase: {
    screen: validateSeedPhraseScreen,
    navigationOptions:{
      headerShown: false,
      gestureDirection: 'horizontal-inverted'
        }
  },
  done: {
    screen: DoneScreen,
    navigationOptions:{
      headerShown: false,
        }
      },
  Mnemonic: MnemonicScreen
    },
  )

authenticationFlow.navigationOptions = ({navigation}) => {
  let tabBarVisible = true
  let routeName = navigation.state.routes[navigation.state.index].routeName
  if ( routeName == 'done' || routeName == 'walletInformation' || routeName == 'validateSeedPhrase' ) {
      tabBarVisible = false
  }
  return {
      tabBarVisible,
  }
}

export default authenticationFlow
