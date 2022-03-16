import React from 'react'
import { Text, StyleSheet } from 'react-native'

const UnavailableScreen = () => {
    return <Text style={styles.text}>Signup or Login to use this feature</Text>
}

const styles = StyleSheet.create({
    text: {
        marginTop: 60,
        fontSize: 30,
        alignSelf: 'center'
    },
})

export default UnavailableScreen
