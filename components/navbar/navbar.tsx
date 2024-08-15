import Time from '@/components/navbar/time';
import { Cross as Hamburger } from 'hamburger-react';

import React from 'react';

interface NavbarProps {
	isActive: boolean;
	handleToggle: () => void;
}
export const Navbar: React.FC<NavbarProps> = ({ isActive, handleToggle }) => {
	return (
		<header className="header--container">
			<nav className="header--navbar" data-open={isActive}>
				<button
					onClick={handleToggle}
					className="header--navbar-button">
					<Hamburger size={10} toggled={isActive} />
					<div className="navbar--wrapper" data-open={isActive}>
						<p className="navbar--item">Menu</p>
						<p className="navbar--item">Close</p>
					</div>
				</button>
				<Time />
				<h1 className="font-bold">Pondok Kopi</h1>
			</nav>
		</header>
	);
};
