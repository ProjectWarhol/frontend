import React from 'react'
import { cleanup } from 'react-native-testing-library'
import { validateEmail, validateInput } from '../../src/context/AuthContext'

describe('AuthContext', () => {
    const navigation = {
        navigate: jest.fn(),
    }

    jest.mock('react-navigation', () => ({
        withNavigation: (SelectAuthenticationScreen) => (props) =>
            (
                <SelectAuthenticationScreen
                    navigation={{ navigate: jest.fn() }}
                    {...props}
                />
            ),
        NavigationEvents: 'mockNavigationEvents',
    }))

    afterEach(cleanup)

    it('gives invalid and valid email format', () => {
        expect(validateEmail('asdf')).toBeFalsy()
        expect(validateEmail('asdf@afd.com')).toBeTruthy()
    })

    it('gives valid input to validateInputPhrase', () => {
        const userInput = 'blouse'
        expect(validateInput(userInput, userInput)).toBeTruthy()
    })
})
