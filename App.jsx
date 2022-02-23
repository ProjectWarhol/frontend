import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import FeedScreen from './src/screens/FeedScreen';
import CameraScreen from './src/screens/CameraScreen';
import DoneScreen from './src/screens/DoneScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import GreyScreen from './src/screens/GreyScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import RecoveryKeyScreen from './src/screens/RecoveryKeyScreen';
import SelectWalletScreen from './src/screens/SelectWalletScreen';
import SignupScreen from './src/screens/SignupScreen';
import thirdPartyWalletSelectionScreen from './src/screens/thirdPartyWalletSelectionScreen';
import SigninScreen from './src/screens/SigninScreen';
import StorageChoiceScreen from './src/screens/StorageChoiceScreen';
import validatePhraseScreen from './src/screens/ValidatePhraseScreen';





const navigator = createSwitchNavigator(
  {
    default: createBottomTabNavigator(
    {
    feed: FeedScreen,
    camera: GreyScreen,
    signupFlow: createStackNavigator({
    signup: SignupScreen,
    walletFlow: createStackNavigator({
      selectWallet: SelectWalletScreen,
      expressWallet: createStackNavigator({
        done: DoneScreen
      }),
      thirdPartyWallet: createStackNavigator({
        thirdPartyWalletSelection: thirdPartyWalletSelectionScreen,
        ourWallet: createStackNavigator({
          recoveryKey: RecoveryKeyScreen,
          choice: createStackNavigator({
            storageChoice: StorageChoiceScreen,
            validation: createStackNavigator({
              validatePhrase: validatePhraseScreen
            })
          })
        })
      })
    }),
    signin: SigninScreen,
    forgotPw: ForgotPasswordScreen,
    })
  }),
mainFlow: createBottomTabNavigator(
  {
  feed: FeedScreen,
  camera: CameraScreen,
  profile: ProfileScreen
  })
  }
)



export default createAppContainer(navigator);
