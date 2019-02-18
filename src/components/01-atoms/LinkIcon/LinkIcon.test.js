import React from 'react'
import { render } from 'react-testing-library';

import LinkIcon from './LinkIcon'

describe('Atom | LinkIcon', () => {
  let LinkIconMock = () => <LinkIcon url="/" />

  test('Should have Alt text', () => {
    let { getByAltText } = render(<LinkIconMock />)
    expect(getByAltText("Pentia")).toHaveAttribute("Alt", "Pentia")
  })
})