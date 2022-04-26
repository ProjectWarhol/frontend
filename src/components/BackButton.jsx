import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { withNavigation } from 'react-navigation'

const BackButton = ({ navigation, routeName, }) => {
return(<TouchableOpacity
style={styles.backButton} onPress={()=>{navigation.navigate(routeName)}}>
<Ionicons name="chevron-back-sharp" size={34} color="black" />
<Text style={styles.backButtonText}>Go Back</Text>
</TouchableOpacity>
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

export default withNavigation(BackButton)
