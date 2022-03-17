import React from 'react'
import { Text, StyleSheet, SafeAreaView } from 'react-native'

const UnavailableScreen = () => {
    return( <SafeAreaView style={styles.container}>
    <Text style={styles.text}>Signup or Login to use this feature</Text>
    </SafeAreaView>)
}

const styles = StyleSheet.create({
    container:{
      flex: 1
    },
    text: {
        marginTop: 60,
        fontSize: 30,
        alignSelf: 'center'
    },
})

export default UnavailableScreen
