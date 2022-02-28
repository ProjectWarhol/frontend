import AsyncStorage from '@react-native-async-storage/async-storage'
import { useWalletConnect, withWalletConnect } from '@walletconnect/react-native-dapp'
import * as React from 'react'
import { Button } from 'react-native'

function SignupScreen() {
  const connector = useWalletConnect();
  if (!connector.connected) {
    return <Button title="Connect" onPress={() => connector.connect()} />
  }
  return <Button title="Kill Session" onPress={() => connector.killSession()} />
}

export default withWalletConnect(SignupScreen, {
  redirectUrl: Platform.OS === 'web' ? window.location.origin : 'yourappscheme://',
  storageOptions: {
    asyncStorage: AsyncStorage,
  },
})

// export default SignupScreen
