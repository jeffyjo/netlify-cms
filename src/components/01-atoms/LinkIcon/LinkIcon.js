import React from 'react'
import { Link } from 'gatsby'
import './atoms.logo.scss'

import logo from '../../../img/logo.svg'

const LinkIcon = ({url}) => {
  return (
    <Link to={url} className="a-logo" title="Logo">
      <img src={logo} alt="Pentia" />
    </Link>
  )
}

export default LinkIcon