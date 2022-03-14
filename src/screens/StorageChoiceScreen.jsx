import React, {useContext} from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { Button } from 'react-native-elements'
import { Context as WalletContext } from '../context/WalletContext'


const StorageChoiceScreen = () => {
  const { state, storeCustodialWallet } = useContext(WalletContext)

  return(<View style={styles.container}>
    <Text style={styles.text}>Storage Choice Screen</Text>
    <Text style={styles.walletCredentials}>mnemonic phrase</Text>
    <Text>private Key</Text>
    <Text style={styles.walletCredentials}>{state.privateKey}</Text>
    <Text>public Key</Text>
    <Text style={styles.walletCredentials}>{state.publicAddress}</Text>
    <View style={styles.buttonContainer}>
    <Button title={"Store here"} onPress={()=> storeCustodialWallet({credentialArray:[state.userName, state.address, state.privateKey, state.index, state.password]})} style={styles.button}/>
    <Button title={"Store by myself"} style={styles.button}/>
    </View>
    </View>)
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      borderWidth: 2
    },
    text: {
        fontSize: 40,
    },
    walletCredentials:{
      padding: 70,
      borderWidth: 2
    },
    buttonContainer:{
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      marginTop: 20
    },
    button:{
    }
})

export default StorageChoiceScreen
