'use client';
import gsap from 'gsap';
import { LenisProps, LenisRef, ReactLenis } from 'lenis/react';
import React from 'react';

const Lenis: React.FC<
	LenisProps & {
		frameRate?: number;
	}
> = ({ frameRate = 1_000, options, ...rest }) => {
	const lenisRef = React.useRef<LenisRef>(null);

	React.useEffect(() => {
		function update(time: number) {
			lenisRef.current?.lenis?.raf(time * frameRate);
		}

		gsap.ticker.add(update);

		return () => gsap.ticker.remove(update);
	}, [frameRate]);

	function easing(time: number) {
		const ease = Math.sin((time * Math.PI) / 2);
		console.log(ease);
		return ease;
	}

	return (
		<ReactLenis
			{...rest}
			root
			ref={lenisRef}
			options={{
				...options,
				autoRaf: false,
				easing,
			}}
		/>
	);
};

export default Lenis;
