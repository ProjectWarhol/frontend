import React from 'react'
import { Text, StyleSheet, SafeAreaView } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'

const UnavailableScreen = ({navigation}) => {
    return( <SafeAreaView style={styles.container}>
    <Text style={styles.text}>Signup or Login to use this feature</Text>
    <TouchableOpacity onPress={()=> navigation.navigate('authenticationFlow')} style={styles.button}>
    <Text>Press here</Text>
    <Entypo name='login' size={24} color='black' style={styles.icon} />
    </TouchableOpacity>
    </SafeAreaView>)
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    text: {
        fontSize: 44,
        alignSelf: 'center'
    },
    button:{
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 30,
      borderRadius: 10,
      borderWidth: 2,
      padding: 20
    },
    icon:{
      paddingLeft: 8
    }
})

export default UnavailableScreen
