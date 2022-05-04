import React, {useContext} from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import { MintingContext } from '../context/MintingContext'

const UploadButton = ({price}) => {
  const {mint} = useContext(MintingContext)

return(<Button onPress={()=>{mint({price})}} title='hello world'/>
  )
}

const styles = StyleSheet.create({
  backButton:{
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: '70%'
  },
  backButtonText:{
    fontSize: 20
  },
  text: {
      fontSize: 40,
  },
  }
)

export default UploadButton
