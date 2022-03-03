import React, { useContext } from 'react'
import {  StyleSheet, View } from 'react-native'
import { Text, Button } from 'react-native-elements'
import Spacer from '../components/Spacer'
import { Context as AuthContext } from '../context/AuthContext'
import { NavigationEvents } from 'react-navigation'

const SelecteAuthenticationScreen = ({navigation}) => {
  const { clearErrorMessage } = useContext(AuthContext)

  return (
  <View style={styles.container}>
  <NavigationEvents
  onWillBlur={clearErrorMessage}
  />
  <View style={styles.headerContainer}>
  <Text style={styles.text} h3>Welcome</Text>
  </View>
  <Spacer/>
  <View style={styles.buttonParent}>
  <View style={styles.loginButtonContainer}>
  <Button
  title='Log in'
  style={styles.button}
  onPress={()=>{navigation.navigate('login')}}
  />
  <Text style={styles.buttonDescription}>I have an Account</Text>
  </View >
  <View style={styles.signupButtonContainer}>
  <Button
  title='Sign up'
  style={styles.button}
  onPress={()=>{navigation.navigate('signup')}}
  />
  <Text style={styles.buttonDescription}>I want to create an Account</Text>
  </View>
  </View>
  </View>
  )
}

const styles = StyleSheet.create({
  container:{
    display: 'flex'
  },
  headerContainer:{
    justifyContent:'center',
    flexDirection: 'row',
    marginTop: 150
  },
  text: {
    fontSize: 30,
  },
  buttonParent:{
    flexDirection: 'row',
  },
  loginButtonContainer:{
    flexDirection: 'column',
    flex:1,
    marginLeft: 20,
    marginRight: 10
  },
  signupButtonContainer:{
    flexDirection: 'column',
    flex:1,
    marginLeft: 10,
    marginRight: 20
  },
  buttonDescription:{
    marginLeft: 20,
    marginRight: 20,
  }
})

export default SelecteAuthenticationScreen
