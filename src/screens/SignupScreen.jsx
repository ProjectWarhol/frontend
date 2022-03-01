import React, {useState, useContext} from 'react'
import {  StyleSheet, View } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import { NavigationEvents } from 'react-navigation'
import Spacer from '../components/Spacer'
import { Context as AuthContext } from '../context/AuthContext'
import NavLink from '../components/NavLink'

const SignupScreen = ( { navigation }) => {
  const {state, signup, clearErrorMessage } = useContext(AuthContext)
  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')
  const[userName, setUsername] = useState('')


  return (
  <View style={styles.container}>
    <NavigationEvents
    onWillBlur={clearErrorMessage}
    />
    <Spacer/>
      <Text h3>Signup Screen</Text>
    <Spacer/>
    <Input
      label='Username'
      value={userName}
      onChangeText={setUsername}
      autoCapitalize='none'
      autoCorrect={false}
    />
    <Spacer/>
    <Input
      label='Email'
      value={email}
      onChangeText={setEmail}
      autoCapitalize='none'
      autoCorrect={false}
    />
    <Spacer/>
    <Input
      secureTextEntry
      label='Password'
      value={password}
      onChangeText={setPassword}
      autoCapitalize='none'
      autoCorrect={false}
    />
  {state.errorMessage ? (<Text style={styles.errorMessage}>{state.errorMessage}</Text> ) : null}
    <Button
    title='Sign Up'
    onPress={() => signup({ userName, email, password })} />
    <Spacer/>
    <NavLink
    routeName='login'
    text='Already have an Account? Sign in!' />
  </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      marginBottom: 200,
      marginLeft: 25,
      marginRight: 25,
      marginTop: 50
    },
    errorMessage: {
      fontSize: 16,
      color: 'red',
      marginBottom: 20
    }
})

export default SignupScreen
