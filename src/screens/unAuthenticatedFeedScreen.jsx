import React, { useContext, useEffect } from 'react'
import { Text, StyleSheet } from 'react-native'
import { Context as AuthContext } from '../context/AuthContext'

const unAuthenticatedFeedScreen = () => {
  const { tryLocalSignin } = useContext(AuthContext)

  useEffect(() => {
    tryLocalSignin()
  }, [])

  return <Text style={styles.text}>FeedScreen</Text>
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
})

export default unAuthenticatedFeedScreen
