import React from 'react'
import { Text, StyleSheet, SafeAreaView, TextInput } from 'react-native'
import { Button } from 'react-native-elements'
import Spacer from '../components/Spacer'

const RoyaltyShareScreen = ({navigation}) => {
    return( <SafeAreaView style={styles.container}>
    <Text style={styles.text}>Set up Royalty Shares</Text>
    <Spacer/>
    <TextInput
         style={styles.titleInput}
         placeholder="Price"
         editable
         onChangeText={(input) => {setPrice(input)}}
         autoCorrect={false}
         autoCapitalize='none'
         maxLength={20}
        />
        <Spacer/>
      <Button title={'Upload'}/>
    </SafeAreaView>)
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    text: {
        fontSize: 44,
        alignSelf: 'center'
    },
    titleInput:{
      borderWidth: 1,
      borderColor: 'black',
      borderRadius: 10,
      padding: 10,
      marginTop: '3%',
      width: '75%'
    },
    button:{
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 30,
      borderRadius: 10,
      borderWidth: 2,
      padding: 20
    },
    icon:{
      paddingLeft: 8
    }
})

export default RoyaltyShareScreen
