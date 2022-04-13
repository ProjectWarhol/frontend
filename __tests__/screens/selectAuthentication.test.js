import React from "react";
import { create, act } from "react-test-renderer";
import SelecteAuthenticationScreen from "../../src/screens/SelectAuthenticationScreen";
import { AuthProvider } from '../../src/context/AuthContext';

const navigation = {
  navigate: jest.fn()
}

jest.mock('react-navigation', () => ({
  withNavigation: SelecteAuthenticationScreen => props => (
    <SelecteAuthenticationScreen navigation={{ navigate: jest.fn() }} {...props} />
  ), NavigationEvents: 'mockNavigationEvents'
}));

const tree = create(<AuthProvider value={null}><SelecteAuthenticationScreen navigation={navigation}/></AuthProvider>)

test('snapshot', ()=>{
  expect(tree).toMatchSnapshot()
})

test('press login button', ()=>{
  const loginButton = tree.root.findByProps({ testID: 'login'}).props
  loginButton.onPress()
  expect(navigation.navigate).toBeCalledWith('login')
})

test('press signup button', ()=>{
  const signupButton = tree.root.findByProps({ testID: 'signup'}).props
  signupButton.onPress()
  expect(navigation.navigate).toBeCalledWith('signup')
})
