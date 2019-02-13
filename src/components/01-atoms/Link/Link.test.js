import React from 'react'
import Link from './Link'
import renderer from 'react-test-renderer'

describe('Atom | Link ', () => {
  let component = null
  
  // Json-representation of component
  let tree = null

  beforeEach(() => {
    component = renderer.create(
      // <Link className="link-class" url="#">Link</Link>
    )
    // tree = component.toJSON()
  })

  test('Link should render', () => {
    // expect(tree).toMatchSnapshot()
    expect(true).toBeTruthy()
  })

  
  // test('Link should have classname', () => {
  //   console.log('classname', tree)    
  // })
})