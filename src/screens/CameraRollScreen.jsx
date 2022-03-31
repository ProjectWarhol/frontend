import React from 'react'
import { Text, StyleSheet, SafeAreaView } from 'react-native'

const CameraRollScreen = ({navigation}) => {
    return (
    <SafeAreaView style={styles.container}>
    <Text style={styles.text}>CameraRollScreen</Text>
    </SafeAreaView>)
}

const styles = StyleSheet.create({
    container:{
      flex: 1
    },
    text: {
        fontSize: 30,
    },
})

export default CameraRollScreen
