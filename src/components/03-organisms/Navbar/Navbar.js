import React from 'react'

import './Navbar.scss'
import Search from '../../02-molecules/Search/Search';
import NavList from '../../02-molecules/NavList/NavList';

const Navbar = class extends React.Component {

	// Create navbar for mobile
	// Use componentDidMount

render() {

	return (
    <div id="navMenu" className="o-navbar">
      <NavList />
				
      <Search />

    </div>
	)}
}

export default Navbar
