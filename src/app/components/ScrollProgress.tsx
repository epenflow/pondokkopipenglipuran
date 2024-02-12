'use client';
import gsap from 'gsap';
import dynamic from 'next/dynamic';
import React from 'react';

const ScrollProgress = React.memo(() => {
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
		<div className='w-full overflow-hidden border-y-[1px] border-solid border-default-200 relative flex items-center justify-center'>
			<div
				className='w-full bg-default-200 z-20 absolute top-0'
				ref={linRef}></div>
			<h1 className='capitalize absolute'>(scroll down)</h1>
		</div>
	);
});

export default dynamic(() => Promise.resolve(ScrollProgress), { ssr: false });
