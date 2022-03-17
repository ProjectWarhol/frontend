import React from 'react'
import { Text, StyleSheet } from 'react-native'

const UnAuthenticatedFeedScreen = () => {

  return <Text style={styles.text}>UnauthenticatedScreen</Text>
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
    },
})

export default UnAuthenticatedFeedScreen
