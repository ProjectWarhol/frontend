import React, {useContext} from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Context as WalletContext } from '../context/WalletContext'
import { navigate } from '../navigationRef'


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
      <TouchableOpacity
      onPress={()=> storeCustodialWallet({credentialArray:[state.userName, state.address, state.privateKey, state.index, state.password, state.walletId]})}
      style={styles.buttonStoreHere}
      ><Text
      style={{color: 'white',
      fontWeight: 'bold'}}
      >Store here</Text></TouchableOpacity>
      <TouchableOpacity
      onPress={()=>{navigate('validateSeedPhrase')}}
      style={styles.buttonStoreMyself}
      ><Text
      style={{color: 'black',
      fontWeight: 'bold'}}
      >Store by myself</Text></TouchableOpacity>
    </View>
    </View>)
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      borderWidth: 2,
      justifyContent: 'space-evenly',
      alignItems: 'center',
      backgroundColor: 'rgb(238, 238, 238)',
    },
    text: {
        fontSize: 40,
    },
    walletCredentials:{
      padding: 50,
      width: '75%',
      borderRadius: 20,
      backgroundColor: 'rgb(251, 253, 253)',
      overflow: 'hidden'
    },
    buttonContainer:{
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      marginTop: 20,
    },
    buttonStoreHere:{
      borderRadius: 25,
      paddingTop: 18,
      paddingBottom: 18,
      paddingLeft: 50,
      paddingRight: 50,
      backgroundColor: 'rgb(31, 87, 230)',
      marginRight: 5
    },
    buttonStoreMyself:{
      borderWidth: 4,
      borderColor: 'rgb(31, 87, 230)',
      borderRadius: 25,
      paddingTop: 15,
      paddingBottom: 15,
      paddingLeft: 30,
      paddingRight: 30,
      marginLeft: 5
    }
})

export default StorageChoiceScreen
