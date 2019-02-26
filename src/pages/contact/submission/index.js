import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import Layout from '../../../components/util/Layout'
import './Submission.css'

const Submission = () => {
  return (
    <Layout>
      <div className="p-submission">
        <h1 className="p-submission__header">Submission</h1>
        <p className="p-submission__lead">We'll be right back!</p>
        <Link className="p-submission__link" to="/">Home</Link>
      </div>
    </Layout>
  )
}

Submission.propTypes = {

}

export default Submission