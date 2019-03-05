import React from 'react'
import PropTypes from 'prop-types'

import './TTRLabel.scss'

const TTRLabel = ({ TTRText }) => {
  return <div className="a-ttr-label">Time to Read: {TTRText} min.</div>
}

TTRLabel.proptypes = {
  TTRText: PropTypes.string.isRequired,
}

export default TTRLabel
