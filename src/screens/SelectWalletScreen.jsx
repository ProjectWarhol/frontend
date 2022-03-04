import React, { useContext } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Button} from 'react-native'
import { Context as AuthContext } from '../context/AuthContext'



const SelectWalletScreen = ({ navigation }) => {


    return (
    <>
    <Text style={styles.text}>Select Wallet Screen</Text>
    <View style={styles.buttonContainer} >
    <TouchableOpacity style={styles.selectWalletButton} onPress={()=>{createWallet()}}>
      <Text>Express Wallet creation</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.selectWalletButton} onPress={()=>{navigation.navigate('thirdPartyWalletSelection')}} >
      <Text>Connect with 3rd party Wallet</Text>
    </TouchableOpacity>
    </View>
    <Button title='Trigger state' onPress={()=>{console.log(state)}}/>
    </>
  )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
    },
    buttonContainer:{
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    flexDirection: 'row',
    borderColor: 'red',
    borderWidth:2

    },
    selectWalletButton:{
    marginTop: 100,
    backgroundColor: "#ADD8E6",
    padding: 10,
    borderRadius: 5
    }
})

export default SelectWalletScreen
