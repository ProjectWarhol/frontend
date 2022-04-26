import React, {useContext} from 'react'
import { StyleSheet, SafeAreaView, Image } from 'react-native'
import { MintingContext } from '../context/MintingContext'

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
