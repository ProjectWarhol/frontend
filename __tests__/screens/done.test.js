import React from 'react'
import renderer from 'react-test-renderer'

import DoneScreen from '../../src/screens/DoneScreen'

jest.useFakeTimers()

test('renders correctly', () => {
    const tree = renderer.create(<DoneScreen />).toJSON()
    expect(tree).toMatchSnapshot()
})
