import React from 'react'
import renderer from 'react-test-renderer'

import DateStamp from './DateStamp'

describe('Atom | DateStamp', () => {
  test('DateStamp should render', () => {
    let component = renderer.create(
      <DateStamp date="18/02/2019" />
    )
    
    let tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })
})