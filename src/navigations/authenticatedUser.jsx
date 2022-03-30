import { Feather, AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import FeedScreen from '../screens/FeedScreen';
import CreationScreen from '../screens/CreationScreen';
import ProfileScreen from '../screens/ProfileScreen';

const authenticatedUser = createBottomTabNavigator({
  feed: FeedScreen,
  creation: CreationScreen,
  profile: ProfileScreen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state
        let iconName
        if (routeName === 'feed') {
          iconName = 'home'
          return <Feather name={iconName} size={25} color={tintColor} />
        }
        else if (routeName === 'creation') {
          iconName = 'plus-square'
          return <Feather name={iconName} size={25} color={tintColor} />
        }
        else if (routeName === 'profile') {
          iconName = 'user'
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

export default authenticatedUser
