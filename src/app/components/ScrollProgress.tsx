'use client';
import gsap from 'gsap';
import dynamic from 'next/dynamic';
import React from 'react';

const ScrollProgress = () => {
	const linRef = React.useRef<HTMLDivElement>(null);

	function handleScroll() {
		let winScroll =
			document.body.scrollTop || document.documentElement.scrollTop;
		let height =
			document.body.clientHeight - document.documentElement.clientHeight;
		const scrolled = Math.round((winScroll / height) * 100) + 1;
		gsap.to(linRef.current, {
			ease: 'bounce',
			height: `${scrolled}%`,
		});
	}

	React.useEffect(() => {
		document.addEventListener('scroll', handleScroll);
		return () => {
			document.removeEventListener('scroll', handleScroll);
		};
	}, []);
	console.info('render');
	return (
		<div className='fixed bottom-5 right-5 z-50'>
			<div className='h-[50px] w-[50px] lg:h-[100px] lg:w-[100px] bg-[#ff5d0b] rounded-full overflow-hidden'>
				<div
					className='w-full z-10 bg-[#170bff] relative'
					ref={linRef}></div>
				<h1 className='text-center text-white text-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 font-bold'></h1>
			</div>
		</div>
	);
};

export default dynamic(() => Promise.resolve(ScrollProgress), { ssr: false });
