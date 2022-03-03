import React, { useState } from 'react'
import { StyleSheet, View, TextInput } from 'react-native'
import { Text, Button } from 'react-native-elements'
import { NavigationEvents } from 'react-navigation'

const SeedPhraseValidationScreen = () => {
    const [seedPhrase, setSeedPhrase] = useState('')

    return (
        <View style={styles.container}>
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
                maxLength={200}
            />
            <Button
                title="Validate"
                // onPress={() => login({ email, password })}
            />
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
    },
})

export default SeedPhraseValidationScreen
