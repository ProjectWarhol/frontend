import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import { MintingContext } from '../context/MintingContext'
import { AuthContext } from '../context/AuthContext'

const UploadButton = ({ price }) => {
    const { mint, state } = useContext(MintingContext)

    const image = state.image
    const date = state.date
    const name = state.title
    const description = state.description

    const authContext = useContext(AuthContext)
    const userName = authContext.state.userName
    const publicAddress = authContext.state.publicAddres

    return (
        <Button
            onPress={() => {
                mint({ price, image, date, name, description, userName, publicAddress })
            }}
            title="hello world"
        />
    )
}

const styles = StyleSheet.create({
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: '70%',
    },
    backButtonText: {
        fontSize: 20,
    },
    text: {
        fontSize: 40,
    },
})

export default UploadButton
