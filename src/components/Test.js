import React from 'react'

const Test = ({data}) => {
  const { markdownRemark } = data

  return (
    <div className="test">
      <h1>Test</h1>
    </div>
  )
}

export default Test