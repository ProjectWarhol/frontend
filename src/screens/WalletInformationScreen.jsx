import React, { useContext } from 'react'
import { Text, StyleSheet, View, SafeAreaView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Context as AuthContext } from '../context/AuthContext'
import { navigate } from '../navigationRef'
import { NavigationEvents } from 'react-navigation'
import { Ionicons } from '@expo/vector-icons'

const StorageChoiceScreen = () => {
  const { state, clearErrorMessage, deleteUser } = useContext(AuthContext)

  return(<SafeAreaView style={styles.container}>
    <NavigationEvents
    onWillFocus={clearErrorMessage}
    />
    <TouchableOpacity style={styles.backButton} onPress={()=>deleteUser({Array:[state.walletId, state.userId]})} ><Ionicons name="chevron-back-sharp" size={34} color="black" /><Text style={styles.backButtonText}>Go Back</Text></TouchableOpacity>
    <Text style={styles.text}>Storage Choice Screen</Text>
    <Text style={styles.walletCredentials}>mnemonic phrase</Text>
    <Text>private Key</Text>
    <Text style={styles.walletCredentials}>{state.privateKey}</Text>
    <Text>public Key</Text>
    <Text style={styles.walletCredentials}>{state.publicAddress}</Text>
    <View style={styles.buttonContainer}>
      <TouchableOpacity
      onPress={()=>{navigate('validateSeedPhrase')}}
      style={styles.buttonStoreMyself}
      ><Text
      style={{color: 'black',
      fontWeight: 'bold'}}
      >I saved it</Text></TouchableOpacity>
    </View>
    {state.errorMessage ? (<Text>{state.errorMessage}</Text> ) : null}
    </SafeAreaView>)
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      borderWidth: 2,
      justifyContent: 'space-evenly',
      alignItems: 'center',
      backgroundColor: 'rgb(238, 238, 238)',
    },
    backButton:{
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: '70%',
    },
    backButtonText:{
      fontSize: 20
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
