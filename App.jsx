import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import FeedScreen from './src/screens/FeedScreen';
import CameraScreen from './src/screens/CameraScreen';
import DoneScreen from './src/screens/DoneScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import UnavailableScreen from './src/screens/UnavailableScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import RecoveryKeyScreen from './src/screens/RecoveryKeyScreen';
import SelectWalletScreen from './src/screens/SelectWalletScreen';
import SignupScreen from './src/screens/SignupScreen';
import ThirdPartyWalletSelectionScreen from './src/screens/ThirdPartyWalletSelectionScreen';
import SigninScreen from './src/screens/SigninScreen';
import StorageChoiceScreen from './src/screens/StorageChoiceScreen';
import ValidatePhraseScreen from './src/screens/ValidatePhraseScreen';
import SeedPhraseValidationScreen from './src/screens/SeedPhraseValidationScreen';

const navigator = createSwitchNavigator({
  default: createBottomTabNavigator({
    feed: FeedScreen,
    camera: UnavailableScreen,
    seedPhraseValidation: SeedPhraseValidationScreen,
    signupFlow: createStackNavigator({
      signup: SignupScreen,
      walletFlow: createStackNavigator({
        selectWallet: SelectWalletScreen,
        expressWallet: createStackNavigator({
          done: DoneScreen,
        }),
        thirdPartyWallet: createStackNavigator({
          thirdPartyWalletSelection: ThirdPartyWalletSelectionScreen,
          ourWallet: createStackNavigator({
            recoveryKey: RecoveryKeyScreen,
            choice: createStackNavigator({
              storageChoice: StorageChoiceScreen,
              validation: createStackNavigator({
                validatePhrase: ValidatePhraseScreen,
              }),
            }),
          }),
        }),
      }),
      signin: SigninScreen,
      forgotPw: ForgotPasswordScreen,
    }),
  }),
  mainFlow: createBottomTabNavigator({
    feed: FeedScreen,
    camera: CameraScreen,
    profile: ProfileScreen,
  }),
});

export default createAppContainer(navigator);
