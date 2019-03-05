import React from 'react'
import PropTypes from 'prop-types'

import './atoms.date-stamp.scss'

let DateStamp = ({ date }) => {
  return <div className="a-date-stamp">{date}</div>
}

DateStamp.propTypes = {
  date: PropTypes.string,
}

export default DateStamp
