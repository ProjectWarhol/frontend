import React, { useState, useContext } from 'react'
import { Text, StyleSheet, SafeAreaView, TextInput, View } from 'react-native'
import Checkbox from 'expo-checkbox'
import Spacer from '../components/Spacer'
import { MintingContext } from '../context/MintingContext'
import { AuthContext } from '../context/AuthContext'
import { Button } from 'react-native-elements'


const SetupPriceScreen = ({navigation}) => {
    const [price, setPrice] = useState(0)
    const [royalties, setRoyalties] = useState(0)
    const [splitRoyaltiesIsChecked, setSplitRoyaltiesIsChecked] = useState(false)
    const [lazyMinting, setLazyMinting] = useState(false)

    const authContext = useContext(AuthContext)
    const userName = authContext.state.userName
    const publicAddress = authContext.state.publicAddress

    const { state, mint } = useContext(MintingContext)
    const image = state.image
    const date = state.date
    const name = state.title
    const description = state.description

    return( <SafeAreaView style={styles.container}>
    {state.isDerivative ?
    (<><Text style={styles.text}>Price</Text>
    <Spacer/>
    <TextInput
        style={styles.titleInput}
        placeholder="Price not changeable"
       /></>)
     :
     (<><Text style={styles.text}>Set a Price</Text>
     <Spacer/>
     <TextInput
         style={styles.titleInput}
         placeholder="Price"
         editable
         onChangeText={(input) => {setPrice(input)}}
         autoCorrect={false}
         autoCapitalize='none'
         maxLength={20}
        /></>)
    }
       <Spacer/>
    <Text style={styles.text}>Set up Royalties from 1-10%</Text>
    <Spacer/>
    <TextInput
        style={styles.titleInput}
        placeholder="Royalties"
        editable
        onChangeText={(input) => setRoyalties(input)}
        autoCorrect={false}
        autoCapitalize='none'
        maxLength={20}
       />
     <View style={styles.checkboxContainer}>
    <Checkbox
    style={styles.checkbox}
    value={splitRoyaltiesIsChecked}
    onValueChange={setSplitRoyaltiesIsChecked} />
    <Text style={styles.checkboxText}>Split Royalties</Text>
    </View>
     <Spacer/>
     <Text style={styles.text}>Minting Settings</Text>
     <View style={styles.checkboxContainer}>
    <Checkbox
    style={styles.checkbox}
    value={lazyMinting}
    onValueChange={setLazyMinting} />
    <Text style={styles.checkboxText}>Add Lazy Minting</Text>
    </View>
     <Spacer/>
     <Button title={splitRoyaltiesIsChecked ? 'Set Royalty Shares': 'Upload'} onPress={()=>{splitRoyaltiesIsChecked ? navigation.navigate('royaltyShare') : mint(name, description, image, publicAddress, date, price)}}/>
    </SafeAreaView>)
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
    },
    text: {
        fontSize: 44,
        alignSelf: 'center',
        textAlign: 'center'
    },
    titleInput:{
      borderWidth: 1,
      borderColor: 'black',
      borderRadius: 10,
      padding: 10,
      marginTop: '3%',
      width: '75%'
    },
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
})

export default SetupPriceScreen
