import React from 'react'
import SearchField from './SearchField'
import renderer from 'react-test-renderer'

describe('Atom | SearchField', () => {
  let component = null
  let tree = null
  let action = () => true

  beforeEach(() => {
    component = renderer.create(
      <SearchField action={action} componentClass="search-field-class" />
    )
    tree = component.toJSON()
  })
  
  test('SearchField should render', () => {
    expect(tree).toMatchSnapshot()
  })
  
  test('SearchField should have CSSclass', () => {
    expect(tree.props.className).toEqual('search-field-class')
  })

  test('SearchField should trigger action', () => {
    const componentAction = tree.props.onChange()
    expect(componentAction).toBeTruthy()
  })

  test('SearchField should change value', () => {
    expect(tree).toMatchSnapshot()
    tree.props.value = 'This is a test'
    expect(tree).toMatchSnapshot()
  })

})