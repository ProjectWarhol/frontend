import React from 'react';
import renderer from 'react-test-renderer';

import DoneScreen from '../../src/screens/DoneScreen';

test('renders correctly', () => {
  const tree = renderer.create(<DoneScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
