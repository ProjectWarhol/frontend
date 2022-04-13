import React, { useContext } from "react";
import renderer from 'react-test-renderer';
import 'react-native-gesture-handler/jestSetup';

import ValidateSeedPhraseScreen from '../../src/screens/ValidateSeedPhraseScreen';
import { AuthProvider, AuthContext} from '../../src/context/AuthContext';

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

