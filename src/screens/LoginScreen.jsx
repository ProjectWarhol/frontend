import React, {useState, useContext} from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import { NavigationEvents } from 'react-navigation'
import Spacer from '../components/Spacer'
import { Context as AuthContext } from '../context/AuthContext'
import NavLink from '../components/NavLink'
import BackButton from '../components/BackButton'

const LoginScreen = ( {navigation } ) => {
  const { state, login, clearErrorMessage } = useContext(AuthContext)
  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')

  return (
  <SafeAreaView style={styles.container}>
    <NavigationEvents
    onWillFocus={clearErrorMessage}
    />
    <BackButton routeName='selectAuthentication'/>
    <Spacer/>
      <Text style={styles.header} h3>Welcome back</Text>
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
    <Button title='Login' onPress={() => login({ email, password })} />
    <Spacer/>
    <NavLink routeName='signup' text='Dont have an Account yet? Sign up!'/>
  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginLeft: 25,
      marginRight: 25,
    },
    header:{
      marginTop: '25%'
    },
    errorMessage: {
      fontSize: 16,
      color: 'red',
      marginBottom: 20
    }
})

export default LoginScreen
