import React, { useContext } from 'react'
import { Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import Spacer from '../components/Spacer'
import { Context as AuthContext } from '../context/AuthContext'

const ProfileScreen = () => {
  const { logout } = useContext(AuthContext)

  return (<>
  <Text style={styles.text}>Profile Screen</Text>
  <Spacer />
  <Button title='Sign Out' onPress={logout} />
  </>)
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
    },
})

export default ProfileScreen
