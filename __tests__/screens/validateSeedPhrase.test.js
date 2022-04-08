import React, {useContext} from "react";
import renderer from 'react-test-renderer';
import 'react-native-gesture-handler/jestSetup';

import ValidateSeedPhraseScreen from '../../src/screens/ValidateSeedPhraseScreen';
import { Context as AuthContext, AuthProvider, validateInput } from '../../src/context/AuthContext';

jest.useFakeTimers()

jest.mock('@expo/vector-icons/build/vendor/react-native-vector-icons/lib/create-icon-set.js', () => {
  return () => '';
});

jest.mock('react-native-gesture-handler', () => { return {} });

jest.mock('react-navigation', () => ({
  withNavigation: ValidateSeedPhraseScreen => props => (
    <ValidateSeedPhraseScreen navigation={{ navigate: jest.fn() }} {...props} />
  ), NavigationEvents: 'mockNavigationEvents'
}));

test('renders correctly', async () => {
  const tree = await renderer.create(
    <AuthProvider value={null}>
      <ValidateSeedPhraseScreen />
    </AuthProvider>, {}).toJSON();
  expect(tree).toMatchSnapshot();
});


