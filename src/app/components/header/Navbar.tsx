'use client';
import React from 'react';
import gsap from 'gsap';
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
		<header className='sticky top-0 z-[100] px-10 py-2'>
			<div className='h-10 w-full rounded-md border-primary flex items-center justify-between p-2 text-black uppercase bg-default-100 shadow-sm relative font-mono z-50'>
				<h1>pondok kopi</h1>
				<div className='absolute flex-col origin-center left-1/2 -translate-x-1/2 text-xs text-center'>
					<h1>january, 24 - 2024</h1>
					<h1>04: 00 pm</h1>
				</div>
				<h1 onClick={handleToggle}>menu</h1>
			</div>
			<div
				ref={navContentRef}
				className='absolute bg-[#f5f5f5] h-screen w-screen left-0 top-0 -z-10 hidden justify-center flex-col p-2 text-6xl gap-2 lg:hidden'></div>
		</header>
	);
};

export default Navbar;
