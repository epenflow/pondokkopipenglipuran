'use client';
import React from 'react';
import './base.scss';
import hoc, { type Props } from './hoc';
const Header: React.FC<Props> = ({ scope, fnToggle }) => {
	return (
		<header ref={scope}>
			<nav className="navbar">
				<button onClick={fnToggle}>Menu</button>
			</nav>
			<nav className="navbar--content-outer"></nav>
		</header>
	);
};
export default hoc(Header);
