import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

const Input = () => (
    <View style={styles.inputView}>
        <TextInput
            style={styles.TextInput}
            placeholder="Email."
            placeholderTextColor="#003f5c"
            // onChangeText={(email) => setEmail(email)}
        />
    </View>
)
const styles = StyleSheet.create({
    inputView: {
        backgroundColor: '#FFC0CB',
        borderRadius: 30,
        width: '70%',
        height: 45,
        marginBottom: 20,
        alignItems: 'center',
    },

    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },
})
export default Input
