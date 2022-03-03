import React from 'react'
import { Text, StyleSheet } from 'react-native'

const FeedScreen = ({navigation}) => {
    return (
    <>
    <Text style={styles.text}>FeedScreen</Text>
    </>)
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
    },
})

export default FeedScreen
