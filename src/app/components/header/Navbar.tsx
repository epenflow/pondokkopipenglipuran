'use client';
import React from 'react';
import gsap from 'gsap';
import ScrollProgress from '../ScrollProgress';
const Navbar = () => {
	const [isToggle, setToggle] = React.useState<boolean>(false);
	const navContentRef = React.useRef<HTMLDivElement>(null);
	const animations = gsap.timeline({
		paused: true,
		reversed: false,
	});
	function handleToggle() {
		setToggle((prev) => !prev);
	}
	React.useEffect(() => {
		animations
			.set(navContentRef.current, {
				yPercent: -100,
				backgroundColor: 'black',
			})
			.to(navContentRef.current, {
				yPercent: 0,
				display: 'flex',
				backgroundColor: '#00ff00',
			});

		if (isToggle) {
			animations.play();
			document.body.style.overflow = 'hidden';
		}
		return () => {
			animations.reverse();
			document.body.style.overflow = 'unset';
		};
	}, [isToggle]);
	return (
		<header
			id='header__wrapper'
			className='fixed left-0 bottom-0 z-[100] mix-blend-difference text-default-200'>
			<nav className='w-screen capitalize'>
				<span className='block w-full h-[1px] bg-default-200'></span>
				<div className='flex flex-row justify-between px-5 py-2'>
					<div className='p-2 border-[1px] border-solid border-default-200 w-full flex items-center justify-center font-medium'>
						<h1>pondok kopi</h1>
					</div>
					<ScrollProgress />
					<div className='p-2 border-[1px] border-solid border-default-200 w-full flex items-center justify-center font-medium'>
						<h1>menu</h1>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
