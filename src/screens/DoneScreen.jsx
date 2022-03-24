import React, {useContext} from 'react'
import { StyleSheet, Image, View, SafeAreaView } from 'react-native'
import { Text, Button } from 'react-native-elements'
import Spacer from '../components/Spacer'
import { Context as WalletContext } from '../context/WalletContext'


const DoneScreen = ({navigation}) => {
    const { state } = useContext(WalletContext)

    return (
    <SafeAreaView style={styles.container}>
    <Image source={require('../../assets/celebration.png')} style={styles.image}/>
    <Spacer/>
    <Text style={styles.text} h1>{state.doneScreenMessage}</Text>
    <Text h5>You can still access your public address in settings</Text>
    <Spacer/>
    <Button title={'Proceed to UNOS'} onPress={()=>{navigation.navigate('authenticatedUser')}}/>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container:{
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height:'100%',
    width:'100%'
  },
  image:{
    width: 100,
    height: 100,
    resizeMode: 'contain'
  },
  text:{
    paddingBottom: 20
  }
})

export default DoneScreen
