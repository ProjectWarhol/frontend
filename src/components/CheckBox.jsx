import Checkbox from 'expo-checkbox'
import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'

const CheckBox = ({text}) => {
  const [isChecked, setChecked] = useState(false)

  return(
    <View style={styles.checkboxContainer}>
    <Checkbox
    style={styles.checkbox}
    value={isChecked}
    onValueChange={setChecked} />
    <Text style={styles.checkboxText}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  checkboxContainer:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  checkbox: {
    margin: 8,
    marginTop: '3%',
  },
  checkboxText:{
    marginTop: '1%'
  },
  }
)

export default CheckBox
