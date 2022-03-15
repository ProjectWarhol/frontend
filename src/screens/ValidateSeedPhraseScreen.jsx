import React, { useState, useContext, useEffect } from 'react'
import { StyleSheet, View, TextInput } from 'react-native'
import { Text, Button } from 'react-native-elements'
import { NavigationEvents } from 'react-navigation'
import { Context as WalletContext } from '../context/WalletContext'

const ValidateSeedPhraseScreen = ({navigation}) => {
    const { validateInput, clearErrorMessage, state } = useContext(WalletContext)
    const [seedPhrase, setSeedPhrase] = useState('')
    const testPhrase = 'blouse diet retreat cry sun badge return decide ski stick glory lazy'

    const checkSeedPhrase = () => {
     validateInput(seedPhrase, testPhrase)}

    return (
        <View style={styles.container}>
            <NavigationEvents
            onWillFocus={clearErrorMessage}
            />
            <NavigationEvents />
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
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200,
        marginLeft: 25,
        marginRight: 25,
        marginTop: 50,
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
