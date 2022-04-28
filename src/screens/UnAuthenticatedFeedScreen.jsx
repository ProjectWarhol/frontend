import React, {useContext} from 'react'
import { Text, StyleSheet, Button, SafeAreaView } from 'react-native'
import { AuthContext } from '../context/AuthContext'

const UnAuthenticatedFeedScreen = ({navigation}) => {
  const { state } = useContext(AuthContext)

  return (<SafeAreaView style={styles.container}>
  <Text style={styles.text}>UnauthenticatedScreen</Text>
  <Button title='to wallet info' onPress={()=>{navigation.navigate('walletInformation')}}/>
  <Button title='to done' onPress={()=>{navigation.navigate('done')}}/>
  <Button title='to validatescreen' onPress={()=>{navigation.navigate('validateSeedPhrase')}}/>
  <Button title='to profil' onPress={()=>{navigation.navigate('profile')}}/>
  <Button title='to image' onPress={()=>{navigation.navigate('uploadConfiguration')}}/>
  <Button title='to royalties' onPress={()=>{navigation.navigate('setupRoyalties')}}/>
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
