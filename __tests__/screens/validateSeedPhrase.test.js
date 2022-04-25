import React from 'react'
import { act, create, fireEvent } from 'react-test-renderer'

import ValidateSeedPhraseScreen from '../../src/screens/ValidateSeedPhraseScreen'
import { AuthProvider, AuthContext } from '../../src/context/AuthContext'

jest.useFakeTimers()

const navigation = {
    navigate: jest.fn(),
}

jest.mock(
    '@expo/vector-icons/build/vendor/react-native-vector-icons/lib/create-icon-set.js',
    () => {
        return () => ''
    }
)

jest.mock('react-native-gesture-handler', () => {
    return {}
})

jest.mock('react-navigation', () => ({
    withNavigation: (ValidateSeedPhraseScreen) => (props) =>
        (
            <ValidateSeedPhraseScreen
                navigation={{ navigate: jest.fn() }}
                {...props}
            />
        ),
    NavigationEvents: 'mockNavigationEvents',
}))

test('renders correctly', () => {
    const tree = create(
        <AuthProvider value={null}>
            <ValidateSeedPhraseScreen navigation={navigation} />
        </AuthProvider>,
        {}
    )
    expect(tree).toMatchSnapshot()
})

test('click validate Button', () => {
    const validateInput = jest.fn()
    const tree = create(
        <AuthProvider value={{ validateInput }}>
            <ValidateSeedPhraseScreen navigation={navigation} />
        </AuthProvider>,
        {}
    )
    const input = tree.root.findByProps({
        testID: 'input',
    })
    const validateButton = tree.root.findByProps({
        testID: 'validateButton',
    }).props
    act(() => {
        validateButton.onPress(validateInput)
    })
    expect(validateInput).toHaveBeenCalledTimes(0)
})
