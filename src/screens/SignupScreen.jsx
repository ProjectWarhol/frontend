import React, {useState, useContext} from 'react'
import {  StyleSheet, SafeAreaView } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import { NavigationEvents } from 'react-navigation'
import Spacer from '../components/Spacer'
import { AuthContext } from '../context/AuthContext'
import NavLink from '../components/NavLink'
import BackButton from '../components/BackButton'

const SignupScreen = ({ navigation }) => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext)
  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')
  const[repeatedPassword, setRepeatedPassword] = useState('')
  const[userName, setUsername] = useState('')

  return (
  <SafeAreaView style={styles.container}>
   <NavigationEvents
    onWillFocus={clearErrorMessage}
    />
    <BackButton routeName='selectAuthentication'/>
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
    <Spacer/>
    <Input
      secureTextEntry
      label='Repeat Password'
      value={repeatedPassword}
      onChangeText={setRepeatedPassword}
      autoCapitalize='none'
      autoCorrect={false}
    />
 {state.errorMessage ? (<Text style={styles.errorMessage}>{state.errorMessage}</Text> ) : null}
    <Button
    title='Sign Up'
    onPress={() => signup({ userName, email, password, repeatedPassword })} />
    <Spacer/>
    <NavLink
    routeName='login'
    text='Already have an Account? Sign in!' />
  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginLeft: 25,
      marginRight: 25,
    },
    errorMessage: {
      fontSize: 16,
      color: 'red',
      marginBottom: 20
    }
})

export default SignupScreen
