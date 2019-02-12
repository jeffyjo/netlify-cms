import React from 'react'
// import { Link } from 'gatsby'
import Link from '../../01-atoms/Link/Link'

import './NavList.scss'

const NavList = () => {
  return (
    <div className="m-navlist">
      <Link className="m-navlist__item" to="/search-results">
        Articles
      </Link>
      <Link className="m-navlist__item" to="/tags">
        Tags
      </Link>
    </div>
  )
}

export default NavList