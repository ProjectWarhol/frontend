import React, { useState, useContext, useEffect } from 'react'
import { StyleSheet, View, TextInput, SafeAreaView } from 'react-native'
import { Text, Button } from 'react-native-elements'
import { NavigationEvents } from 'react-navigation'
import { AuthContext } from '../context/AuthContext'
import BackButton from '../components/BackButton'

const ValidateSeedPhraseScreen = ({navigation}) => {
    const { validateInput, clearErrorMessage, state } = useContext(AuthContext)
    const [seedPhrase, setSeedPhrase] = useState('')
    const testPhrase = 'blouse'

    const checkSeedPhrase = () => {
     validateInput(seedPhrase, testPhrase)}

    return (
        <SafeAreaView style={styles.container}>
            <NavigationEvents
            onWillFocus={clearErrorMessage}
            />
            <BackButton routeName='walletInformation'/>
            <View style={styles.seedPhraseContainer}>
            <Text h3>Validate Your Seed Phrase</Text>
            <TextInput
                style={styles.input}
                editable
                multiline
                onChangeText={(text) => setSeedPhrase(text)}
                value={seedPhrase}
                placeholder="Your Validation Seed Phrase"
                autoCorrect={false}
                autoCapitalize='none'
                maxLength={200}
            />
            <Button
                title="Validate"
                onPress={() => checkSeedPhrase(seedPhrase, testPhrase)}
                style={styles.validateButton}
            />
            {state.errorMessage ? (<Text style={styles.errorMessage}>{state.errorMessage}</Text> ) : null}
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 25,
        marginRight: 25
    },
    seedPhraseContainer:{
      marginTop: '40%'
    },
    input: {
        height: 200,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 20,
        borderRadius: 10
    },
    validateButton:{
      paddingBottom: 15
    }
})
export default ValidateSeedPhraseScreen
