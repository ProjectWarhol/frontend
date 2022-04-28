import React, { useState } from 'react'
import { Text, StyleSheet, SafeAreaView, TextInput, View } from 'react-native'
import CheckBox from '../components/CheckBox'
import Spacer from '../components/Spacer'

const SetupRoyaltiesScreen = ({navigation}) => {

    return( <SafeAreaView style={styles.container}>
    <Text style={styles.text}>Set a Price</Text>
    <Spacer/>
    <TextInput
        style={styles.titleInput}
        placeholder="Price"
       />
       <Spacer/>
    <Text style={styles.text}>Set up Royalties from 1-10%</Text>
    <Spacer/>
    <TextInput
        style={styles.titleInput}
        placeholder="Royalties"
       />
     <CheckBox text='Split Royalties'/>
     <Spacer/>
     <Text style={styles.text}>Minting Settings</Text>
     <CheckBox text='Add Lazy Minting'/>
    </SafeAreaView>)
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
    },
    text: {
        fontSize: 44,
        alignSelf: 'center',
        textAlign: 'center'
    },
    titleInput:{
      borderWidth: 1,
      borderColor: 'black',
      borderRadius: 10,
      padding: 10,
      marginTop: '3%',
      width: '75%'
    },
})

export default SetupRoyaltiesScreen
