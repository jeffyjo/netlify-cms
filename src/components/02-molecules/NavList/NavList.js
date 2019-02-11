import React from 'react'
import { Link } from 'gatsby'

import './NavList.scss'

const NavList = () => {
  return (
    <div className="m-navbar">
      <Link className="m-navbar__item" to="/">
        Articles
      </Link>
      <Link className="m-navbar__item" to="/tags">
        Tags
      </Link>
    </div>
  )
}

export default NavList