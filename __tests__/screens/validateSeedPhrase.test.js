import React from 'react'
import { create, fireEvent } from 'react-test-renderer'
import { render, fireEvent as fire } from 'react-native-testing-library'
import { Button } from 'react-native-elements'
import ValidateSeedPhraseScreen from '../../src/screens/ValidateSeedPhraseScreen'
import {
    AuthProvider,
    AuthContext,
    validateInput,
} from '../../src/context/AuthContext'

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

it('clicks the validate input button', () => {
    const Test = ({ onPress, validateInput }) => (
        <Button
            testID="btn"
            onPress={() => {
                onPress()
                validateInput('blosue', 'blouse')
            }}
        />
    )
    const onPress = jest.fn()
    const { getByTestId } = render(
        <AuthProvider>
            <AuthContext.Consumer>
                {(value) => <Test onPress={onPress} {...value} />}
            </AuthContext.Consumer>
        </AuthProvider>
    )
    fire(getByTestId('btn'), 'onPress')
    expect(onPress).toHaveBeenCalled()
})
