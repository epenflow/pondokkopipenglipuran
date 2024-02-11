'use client';
import React from 'react';
import Lenis from '@studio-freight/lenis';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import dynamic from 'next/dynamic';
interface Props {
	children: React.ReactNode;
}
const LenisScroll = ({ children }: Props) => {
	const scrollRef = React.useRef<Lenis>(null);
	React.useLayoutEffect(() => {
		const lenis = new Lenis({
			duration: 2,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
			touchMultiplier: 2,
			smoothWheel: true,
			syncTouch: true,
			syncTouchLerp: 1.5,
		});
		function update(time: number) {
			lenis.raf(time * 1000);
		}
		function initSmoothScrolling() {
			lenis.on('scroll', () => ScrollTrigger.update);
			gsap.ticker.add(update, false, true);
			gsap.ticker.lagSmoothing(0);
		}
		initSmoothScrolling();
		return () => {
			gsap.ticker.remove(update);
			lenis.destroy();
		};
	}, []);
	return children;
};

export default dynamic(() => Promise.resolve(LenisScroll), {
	ssr: false,
});
