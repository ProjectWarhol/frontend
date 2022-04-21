import React from "react";
import renderer from 'react-test-renderer';

import ValidateSeedPhraseScreen from '../../src/screens/ValidateSeedPhraseScreen';
import { AuthProvider, validateInput } from '../../src/context/AuthContext';
import { exp } from "react-native-reanimated";

jest.useFakeTimers()

const navigation = {
  navigate: jest.fn()
}

jest.mock('@expo/vector-icons/build/vendor/react-native-vector-icons/lib/create-icon-set.js', () => {
  return () => '';
});

jest.mock('react-native-gesture-handler', () => { return {} });

jest.mock('react-navigation', () => ({
  withNavigation: ValidateSeedPhraseScreen => props => (
    <ValidateSeedPhraseScreen navigation={{ navigate: jest.fn() }} {...props} />
  ), NavigationEvents: 'mockNavigationEvents'
}));

const tree = renderer.create(
  <AuthProvider value={null}>
    <ValidateSeedPhraseScreen navigation={navigation} />
  </AuthProvider>, {}).getInstance()

test('renders correctly', () => {
  expect(tree).toMatchSnapshot();
});

test('gives wrong input to validateInput function', () => {
  const userInput = 'hello'
  const expected = 'blouse'
  validateInput(userInput, expected)
  expect(validateInput).toReturn(false)
})
