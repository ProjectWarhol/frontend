import React, {useContext} from 'react'
import { Text, StyleSheet, SafeAreaView, Image, Button } from 'react-native'
import { Context as MintingContext } from '../context/MintingContext'

const ImageScreen = ({navigation}) => {
  const { state } = useContext(MintingContext)

    return (
    <SafeAreaView style={styles.container}>
    <Image source={{uri: state.image}} style={styles.image}/>

    </SafeAreaView>)
}

const styles = StyleSheet.create({
    container:{
      flex: 1
    },
    image:{
      flex: 0.9,
      borderWidth: 4,
      borderColor: 'black'
    },
    text: {
        fontSize: 30,
    },
})

export default ImageScreen
