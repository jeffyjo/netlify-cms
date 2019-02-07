import React from 'react'
import { Link } from 'gatsby'
import LinkIcon from '../atoms/LinkIcon/LinkIcon'

import './navbar.scss'

const Navbar = class extends React.Component {

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

			<div id="navMenu" className="o-navbar">
				<div className="m-navbar">
					<Link className="m-navbar__item" to="/">
						About
					</Link>
					<Link className="m-navbar__item" to="/">
						About
					</Link>
				</div>
				
				{/* Search component */}

			</div>
		</nav>
	)}
}

export default Navbar
