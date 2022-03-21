import React from 'react'
import { Feather, Entypo, AntDesign } from '@expo/vector-icons'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import FeedScreen from './src/screens/FeedScreen';
import CreationScreen from './src/screens/CreationScreen';
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
import CreateModal from './src/screens/CreateModal';
import SelectUploadModal from './src/screens/SelectUploadModal';
import TimeLimitModal from './src/screens/TimeLimitModal';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { Provider as WalletProvider } from './src/context/WalletContext';
import  { setNavigator } from './src/navigationRef';

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
  forgotPw: ForgotPasswordScreen,
  storageChoice: {
    screen: StorageChoiceScreen,
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
      }
    },
  )

authenticationFlow.navigationOptions = ({navigation}) => {
  let tabBarVisible = true
  let routeName = navigation.state.routes[navigation.state.index].routeName
  if ( routeName == 'done' || routeName == 'storageChoice' || routeName == 'validateSeedPhrase' ) {
      tabBarVisible = false
  }
  return {
      tabBarVisible,
  }
}

const unAuthenticatedUser = createBottomTabNavigator({
  unAuthenticatedFeed: UnAuthenticatedFeedScreen,
  unavailableScreen: UnavailableScreen,
  authenticationFlow: authenticationFlow
},
{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state
      let iconName
      if (routeName === 'unAuthenticatedFeed') {
        iconName = focused ? 'home' : 'home'
        return <Feather name={iconName} size={25} color={tintColor} />
      }
      else if (routeName === 'unavailableScreen') {
        iconName = focused ? 'plus-square' : 'plus-square'
        return <Feather name={iconName} size={25} color={tintColor} />
      }
      else if (routeName === 'authenticationFlow') {
        iconName = focused ? 'login' : 'login'
        return <Entypo name={iconName} size={25} color={tintColor} />
      }
    },
  }),
  tabBarOptions: {
    activeTintColor: 'blue',
    inactiveTintColor: 'gray',
    showLabel: false
  },
})

const authenticatedUserFlow = createBottomTabNavigator({
  feed: FeedScreen,
  creation: CreationScreen,
  profile: ProfileScreen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state
        let iconName
        if (routeName === 'feed') {
          iconName = focused ? 'home' : 'home'
          return <Feather name={iconName} size={25} color={tintColor} />
        }
        else if (routeName === 'creation') {
          iconName = focused ? 'plus-square' : 'plus-square'
          return <Feather name={iconName} size={25} color={tintColor} />
        }
        else if (routeName === 'profile') {
          iconName = focused ? 'user' : 'user'
          return <AntDesign name={iconName} size={25} color={tintColor} />
        }
      },
    }),
    tabBarOptions: {
      activeTintColor: 'blue',
      inactiveTintColor: 'gray',
      showLabel: false
      },
    }
  )

const navigator = createSwitchNavigator({
  resolveAuth: ResolveAuthScreen,
  unAuthenticatedUser: unAuthenticatedUser,
  authenticatedUserFlow: authenticatedUserFlow
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
