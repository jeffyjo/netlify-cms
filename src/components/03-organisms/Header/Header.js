import React from 'react'
import LinkIcon from '../../01-atoms/LinkIcon/LinkIcon'

import Navbar from '../Navbar/Navbar'

import './Header.scss'

const Header = class extends React.Component {

	// Create navbar for mobile
	// Use componentDidMount

render() {

	return (
		<nav className="o-header" role="navigation" aria-label="main-navigation">
			<div className="navbar-brand">
				
				<LinkIcon url="/" />

				{/* Hamburger menu */}
				<div className="navbar-burger burger" data-target="navMenu">
					<span></span>
					<span></span>
					<span></span>
				</div>

			</div>

			<Navbar />
		</nav>
	)}
}

export default Header
