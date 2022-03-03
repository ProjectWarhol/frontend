import React from 'react'
import { Text, StyleSheet, Button } from 'react-native'

const UnAuthenticatedFeedScreen = ({navigation}) => {

  return (<>
  <Text style={styles.text}>UnauthenticatedScreen</Text>
  <Button title='to selectScreen' onPress={()=>{navigation.navigate('selectWallet')}}/>
  </>)
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
    },
})

export default UnAuthenticatedFeedScreen
