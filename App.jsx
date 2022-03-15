import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import FeedScreen from './src/screens/FeedScreen';
import CameraScreen from './src/screens/CameraScreen';
import DoneScreen from './src/screens/DoneScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import UnavailableScreen from './src/screens/UnavailableScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import SignupScreen from './src/screens/SignupScreen';
import LoginScreen from './src/screens/LoginScreen';
import StorageChoiceScreen from './src/screens/StorageChoiceScreen';
import validateSeedPhraseScreen from './src/screens/ValidateSeedPhraseScreen';
import UnAuthenticatedFeedScreen from './src/screens/UnAuthenticatedFeedScreen';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';
import SelectAuthenticationScreen from './src/screens/SelectAuthenticationScreen';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { Provider as WalletProvider } from './src/context/WalletContext';
import  { setNavigator } from './src/navigationRef';


const navigator = createSwitchNavigator({
  resolveAuth: ResolveAuthScreen,
  default: createBottomTabNavigator({
    unAuthenticatedFeed: UnAuthenticatedFeedScreen,
    camera: UnavailableScreen,
    signupFlow: createStackNavigator({
    selectAuthentication: SelectAuthenticationScreen,
    login: LoginScreen,
    signup: SignupScreen,
    forgotPw: ForgotPasswordScreen,
    walletFlow: createStackNavigator({
      storageChoice: StorageChoiceScreen,
      validateSeedPhrase: validateSeedPhraseScreen,
      done: DoneScreen,
        },{ headerMode: 'none'}),
      })
    }),
    mainFlow: createBottomTabNavigator({
        feed: FeedScreen,
        camera: CameraScreen,
        profile: ProfileScreen,
    }),
})

const App = createAppContainer(navigator);

export default () => {
  return(

    <WalletProvider>
      <AuthProvider>
        <App ref={(navigator)=>{ setNavigator(navigator) }} />
      </AuthProvider>
    </WalletProvider>
  )
}

