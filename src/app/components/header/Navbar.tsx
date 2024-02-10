'use client';
import React from 'react';

const Navbar = () => {
	const [isToggle, setToggle] = React.useState<boolean>(false);
	function handleToggle() {
		setToggle((prev) => !prev);
	}
	React.useEffect(() => {
		if (isToggle) document.body.style.overflow = 'hidden';
		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [isToggle]);
	return (
		<header className='sticky top-0 left-0 origin-top-left overflow-y-hidden p-2 z-50'>
			<div className='h-10 w-full rounded-md border-primary flex items-center justify-between p-2 text-black uppercase bg-default-100 shadow-sm relative font-mono z-50'>
				<h1>pondok kopi</h1>
				<div className='absolute flex-col origin-center left-1/2 -translate-x-1/2 text-xs text-center'>
					<h1>january, 24 - 2024</h1>
					<h1>04: 00 pm</h1>
				</div>
				<h1 onClick={handleToggle}>menu</h1>
			</div>
			{isToggle ? (
				<div className='fixed top-0 left-0 z-20 bg-white h-screen w-screen'></div>
			) : null}
		</header>
	);
};

export default Navbar;
