import React from 'react'
import PropTypes from 'prop-types'

import './Hero.scss'

const Hero = ({ title, backgroundImage, className}) => {
	console.log('className', className)

	backgroundImage = backgroundImage ? backgroundImage : ''

	return (
		<div className={`o-hero ${className}`} style={{ backgroundImage: `url(${backgroundImage})` }}>
			<h1 className="o-hero__title">{title}</h1>
		</div>
	)
}

Hero.propTypes = {
	title: PropTypes.string,
	backgroundImage: PropTypes.string
}

export default Hero