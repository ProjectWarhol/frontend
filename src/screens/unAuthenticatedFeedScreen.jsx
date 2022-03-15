import React from 'react'
import { Text, StyleSheet, Button } from 'react-native'

const UnAuthenticatedFeedScreen = ({navigation}) => {

  return (<>
  <Text style={styles.text}>UnauthenticatedScreen</Text>
  <Button title='to storage choice' onPress={()=>{navigation.navigate('storageChoice')}}/>
  <Button title='to done' onPress={()=>{navigation.navigate('done')}}/>
  <Button title='to validatescreen' onPress={()=>{navigation.navigate('validatePhrase')}}/>
  </>)
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
    },
})

export default UnAuthenticatedFeedScreen
