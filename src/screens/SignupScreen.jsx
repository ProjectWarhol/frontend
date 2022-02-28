import AsyncStorage from '@react-native-async-storage/async-storage'
import { useWalletConnect, withWalletConnect } from '@walletconnect/react-native-dapp'
import React from 'react'
import { Button, Text } from 'react-native'

function SignupScreen() {
  const connector = useWalletConnect();
  if (!connector.connected) {
    return <Button title="Connect" onPress={() => connector.connect()} />
  }
  return <Button title="Kill Session" onPress={() => connector.killSession()} />
}

export default withWalletConnect(SignupScreen, {
  rpc: {
    4: 'https://rinkeby.infura.io/v3/',
    80001: 'https://polygon-mumbai.g.alchemy.com/v2/Pfpvdz49MNd58vUxy8DG96oU84FEN797'
  },
  redirectUrl: Platform.OS === 'web' ? window.location.origin : 'exp://wg-qka.community.app.exp.direct:80',
  storageOptions: {
    asyncStorage: AsyncStorage,
  },
  qrcodeModalOptions: {
    mobileLinks: [
      "rainbow",
      "metamask"
    ]
  }
})
