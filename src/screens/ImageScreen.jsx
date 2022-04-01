import React, {useContext} from 'react'
import { Text, StyleSheet, SafeAreaView, Image, Button, Pressable, View} from 'react-native'
import { Context as MintingContext } from '../context/MintingContext'

const ImageScreen = ({navigation}) => {
  const { state } = useContext(MintingContext)

    return (
    <SafeAreaView style={styles.container}>
    <Pressable style={styles.backButton} onPress={()=>{navigation.goBack()}}>
      <Text style={{fontSize: 20}}>Back</Text>
      </Pressable>
    <Image source={{uri: state.image}} style={styles.image}/>
    <View style={styles.buttonContainer}>
    <Pressable style={styles.button}><Text style={styles.buttonText}>Root</Text></Pressable>
    <Pressable style={styles.button}><Text style={styles.buttonText}>Derivative</Text></Pressable>
    </View>
    </SafeAreaView>)
}

const styles = StyleSheet.create({
    container:{
      flex: 1
    },
    backButton:{
      margin: 10
    },
    image:{
      flex: 0.9,
      borderRadius: 10
    },
    text: {
        fontSize: 30,
    },
    buttonContainer:{
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems:'center',
      flex: 0.1
    },
    button:{
      padding: 10,
      backgroundColor: 'blue',
      borderWidth: 2,
      borderColor: 'black',
      borderRadius: 20,
      flex: 0.4,
  },
  buttonText:{
    textAlign: 'center',
    color: 'white'
  }
})

export default ImageScreen
