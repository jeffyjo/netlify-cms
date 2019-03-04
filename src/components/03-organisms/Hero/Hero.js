import React from 'react'
import PropTypes from 'prop-types'

import './Hero.scss'

const Hero = ({ title, heroPosition, heroBackground, heroTextColor }) => {
  heroBackground = heroBackground ? heroBackground : ''
  heroPosition = heroPosition ? heroPosition : ''
  heroTextColor = heroTextColor ? heroTextColor : ''

	return (
		<div className={`o-hero ${heroPosition}`}>
      <div className="o-hero__background" style={{ backgroundImage: `url(${heroBackground.publicURL})` }}></div>
			<h1 className={`o-hero__title ${heroTextColor}`}>{title}</h1>
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