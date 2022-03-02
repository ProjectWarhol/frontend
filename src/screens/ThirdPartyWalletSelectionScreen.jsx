import React from 'react'
import { Text, StyleSheet } from 'react-native'

const ThirdPartyWalletSelectionScreen = () => {
    return (
        <Text style={styles.text}>
            Wallets Screen. here we show different selection of thord party and
            our wallet
        </Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
    },
})

export default ThirdPartyWalletSelectionScreen
