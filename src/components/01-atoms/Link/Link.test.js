import React from 'react'
import Link from './Link'
import renderer from 'react-test-renderer'
import { render, getByTestId } from 'react-testing-library'

describe('Atom | Link ', () => {
  let component = null
  
  // Json-representation of component
  let tree = null

  beforeEach(() => {
    component = renderer.create(
      <Link className="link-class" url="http://link.com">Link</Link>
      )
      tree = component.toJSON()
    })
    
    test('Link should render', () => {
      expect(tree).toMatchSnapshot()
    })
    
    test('Link should have default CSSclass', () => {
      expect(tree.props.className).toContain('a-link')
    })

    test('Link should be injected with cssCLass', () => {
      expect(tree.props.className).toContain('link-class')
    })
    
    const TestLink = () => <Link url="link">Link</Link>

    test('Link should display the correct link-text', () => {
      const { getByText } = render(<TestLink />)
      expect(getByText("Link")).toHaveTextContent("Link")
    })

    test('Link should have correct link', () => {
      const { getByText } = render(<TestLink />)
      expect(getByText("Link")).toHaveAttribute("href", "link")
    })
})