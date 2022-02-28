import React, {useState, useContext} from 'react'
import {  StyleSheet, View, TouchableOpacity } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import Spacer from '../components/Spacer'
import { Context as AuthContext } from '../context/AuthContext'

const SignupScreen = ( {navigation }) => {
  const {state, signup } = useContext(AuthContext)
  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')
  const[userName, setUsername] = useState('')


  return (
  <View style={styles.container}>
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
    <Button title='Sign Up' onPress={() => signup({ userName, email, password })} />
    <Spacer/>
    <TouchableOpacity onPress={()=> navigation.navigate('signin')}><Text>Already have an Account? Sign in!</Text>
    </TouchableOpacity>
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
