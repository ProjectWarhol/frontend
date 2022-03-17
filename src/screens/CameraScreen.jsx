import React from 'react'
import { Text, StyleSheet, SafeAreaView } from 'react-native'

const CameraScreen = () => {
    return (<SafeAreaView style={styles.container}>
    <Text style={styles.text}>Camera Screen</Text>
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

export default CameraScreen
