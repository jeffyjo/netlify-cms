import React from 'react'
import PropTypes from 'prop-types'

import './Hero.scss'

const Hero = ({ title, heroPosition, heroBackground }) => {
  heroBackground = heroBackground ? heroBackground : ''
  heroPosition = heroPosition ? heroPosition : ''

	return (
		<div className={`o-hero ${heroPosition}`} style={{ backgroundImage: `url(${heroBackground.publicURL})` }}>
			<h1 className="o-hero__title">{title}</h1>
		</div>
	)
}

Hero.propTypes = {
	title: PropTypes.string,
	backgroundImage: PropTypes.shape({
    publicURL: PropTypes.string
  })
}

export default Hero