import React from 'react'
import { StyleSheet, Image, View } from 'react-native'
import { Text, Button } from 'react-native-elements'
import Spacer from '../components/Spacer'


const DoneScreen = ({navigation}) => {
    return (
    <View style={styles.container}>
    <Image source={require('../../assets/celebration.png')} style={styles.image}/>
    <Spacer/>
    <Text style={styles.text} h1>Your information is stored successfully!</Text>
    <Text h4>You can access it in setting</Text>
    <Spacer/>
    <Button title={'Proceed to UNOS'} onPress={()=>{navigation.navigate('mainFlow')}}/>
    </View>
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
