import React, { useContext } from 'react'
import { Text, StyleSheet, SafeAreaView } from 'react-native'
import { Button } from 'react-native-elements'
import Spacer from '../components/Spacer'
import { AuthContext } from '../context/AuthContext'

const ProfileScreen = () => {
  const { logout } = useContext(AuthContext)

  return (<SafeAreaView style={styles.container}>
  <Text style={styles.text}>Profile Screen</Text>
  <Spacer />
  <Button title='Logut' onPress={logout} />
  </SafeAreaView>)
}

const styles = StyleSheet.create({
    container:{
      flex: 1
    },
    text: {
        fontSize: 30,
    },
})

export default ProfileScreen
