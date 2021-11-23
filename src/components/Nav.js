import React from 'react'
import { useLocation } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { route_constants } from './constants/Routes';

const Nav = () => {

	const location = useLocation();

	return (
		<nav className="main-navigation">
			<button type="button" className="toggle-menu"><i className="fa fa-bars"></i></button>
			<ul className="menu">
				<NavLink
					to={route_constants.HOME}
					className="menu-item"
					activeClassName={location.pathname === route_constants.HOME ? 'current-menu-item' : ''}
				>Home</NavLink>
				<NavLink
					to={route_constants.ABOUT}
					className="menu-item"
					activeClassName="current-menu-item"
				>About</NavLink>
				<NavLink
					to={route_constants.PROJECT}
					className="menu-item"
					activeClassName="current-menu-item"
				>Projects</NavLink>
				<NavLink
					to={route_constants.ARTICLES}
					className="menu-item"
					activeClassName="current-menu-item"
				>Articles</NavLink>
			</ul>
		</nav>
	)
}

export default Nav