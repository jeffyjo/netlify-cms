import React from 'react'
import TTRLabel from './TTRLabel'
import renderer from 'react-test-renderer'

describe('Atom | TTRLabel', () => {
  let component = null
  let tree = null

  beforeEach(() => {
    component = renderer.create(
      <TTRLabel TTRText="10" />
    )
    tree = component.toJSON()
  })

  test('TTRLabel should render', () => {
    expect(tree).toMatchSnapshot()
  })

  test('TTRLabel should have text', () => {
    expect(tree.children[1]).toEqual('10')
  })

  test('TTRLabel should have default CSS class', () => {
    expect(tree.props.className).toEqual('a-ttr-label')
  })
})