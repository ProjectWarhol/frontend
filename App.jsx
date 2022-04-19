import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';
import { AuthProvider } from './src/context/AuthContext';
import { MintingProvider } from './src/context/MintingContext';
import  { setNavigator } from './src/navigationRef';
import unAuthenticatedUser from './src/navigations/unAuthenticatedUser';
import authenticatedUser from './src/navigations/authenticatedUser';

const navigator = createSwitchNavigator({
  resolveAuth: ResolveAuthScreen,
  unAuthenticatedUser: unAuthenticatedUser,
  authenticatedUser: authenticatedUser
})

const App = createAppContainer(navigator);

export default () => {
  return(
    <MintingProvider>
      <AuthProvider>
        <App ref={(navigator)=>{ setNavigator(navigator) }} />
      </AuthProvider>
    </MintingProvider>
  )
}
