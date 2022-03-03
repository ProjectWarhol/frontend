import React from 'react'
import { Text, StyleSheet, View, TouchableOpacity} from 'react-native'


const SelectWalletScreen = ({ navigation }) => {
    return (
    <>
    <Text style={styles.text}>Select Wallet Screen</Text>
    <View style={styles.buttonContainer} >
    <TouchableOpacity style={styles.selectWalletButton}>
      <Text>Express Wallet creation</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.selectWalletButton} onPress={()=>{navigation.navigate('thirdPartyWalletSelection')}} >
      <Text>Connect with 3rd party Wallet</Text>
    </TouchableOpacity>
    </View>
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

    },
    selectWalletButton:{
    marginTop: 100,
    alignItems: "center",
    backgroundColor: "#ADD8E6",
    padding: 10,
    borderRadius: 5
    }
})

export default SelectWalletScreen
