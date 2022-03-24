import { Entypo } from '@expo/vector-icons'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import UnavailableScreen from '../screens/UnavailableScreen';
import UnAuthenticatedFeedScreen from '../screens/UnAuthenticatedFeedScreen';
import authenticationFlow from './authenticationFlow';

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
        iconName = 'home'
        return <Feather name={iconName} size={25} color={tintColor} />
      }
      else if (routeName === 'unavailableScreen') {
        iconName = 'plus-square'
        return <Feather name={iconName} size={25} color={tintColor} />
      }
      else if (routeName === 'authenticationFlow') {
        iconName = 'login'
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

export default unAuthenticatedUser
