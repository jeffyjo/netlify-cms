import React from 'react'
import PropTypes from 'prop-types'

import Layout from '../../components/util/Layout'

import './Contact.css'

const Contact = () => {
  
  const submit = (e) => {
    e.preventDefault()
    let form = e.target
    let inputs = form.querySelectorAll('[data-input]')
    let serializedValues = '' 
    inputs.forEach((e,i) => serializedValues = serializedValues + serialize(e.getAttribute('name'), e.value) )
    serializedValues = serializedValues.slice(0, serializedValues.lastIndexOf('&'))
    
    // Submit form
    console.log('serializedValues', serializedValues)
  }

  const serialize = (key, value) => {
    return `${key}=${value}&`
  }
  
  return (
    <Layout>
        {/* Ajax */}
        {/* <form onSubmit={e => submit(e)} className="o-form" data-netlify="true"> */}
        
        {/* Postback */}
        <form name="contact" className="o-form" data-netlify="true">
          <div className="o-form__group">
            <label className="o-form__group-label">Name</label>
            <input className="o-form__group-input" data-input="name" name="name" />
          </div>
          <div className="o-form__group">
            <label className="o-form__group-label">E-mail</label>
            <input className="o-form__group-input" data-input="email" name="email" />
          </div>
          <div className="o-form__group">
            <label className="o-form__group-label">Message</label>
            <textarea className="o-form__group-text" data-input="message" name="message" cols="50" rows="10"></textarea>
          </div>
          <button className="o-form__group-submit" type="submit">Send</button>
        </form>
    </Layout>
  )
}

Contact.propTypes = {

}

export default Contact