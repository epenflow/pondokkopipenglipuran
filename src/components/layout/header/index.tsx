'use client';
import React from 'react';
import './base.css';
import hoc, { type Props } from './hoc';
const Header: React.FC<Props> = ({ scope, fnToggleMenu }) => {
	return (
		<header ref={scope}>
			<nav className="header-navbar">
				<button onClick={fnToggleMenu}>Menu</button>
			</nav>
			<nav className="navbar-content--outer"></nav>
		</header>
	);
};
export default hoc(Header);
