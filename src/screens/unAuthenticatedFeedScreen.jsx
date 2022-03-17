import React from 'react'
import { Text, StyleSheet, Button, SafeAreaView } from 'react-native'

const UnAuthenticatedFeedScreen = ({navigation}) => {

  return (<SafeAreaView style={styles.container}>
  <Text style={styles.text}>UnauthenticatedScreen</Text>
  <Button title='to storage choice' onPress={()=>{navigation.navigate('storageChoice')}}/>
  <Button title='to done' onPress={()=>{navigation.navigate('done')}}/>
  <Button title='to validatescreen' onPress={()=>{navigation.navigate('validateSeedPhrase')}}/>
  <Button title='to profil' onPress={()=>{navigation.navigate('profile')}}/>
  </SafeAreaView>)
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
    },
    container:{
      flex: 1
    }
})

export default UnAuthenticatedFeedScreen
