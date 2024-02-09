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
	React.useLayoutEffect(() => {
		const lenis = new Lenis({
			smoothWheel: true,
			lerp: 0.025,
			syncTouch: true,
			syncTouchLerp: 0.025,
			autoResize: true,
			touchInertiaMultiplier: 35,
		});
		function update(time: number) {
			lenis.raf(time * 1000);
		}
		function initSmoothScrolling() {
			lenis.on('scroll', () => ScrollTrigger.update);
			gsap.ticker.add(update);
			gsap.ticker.lagSmoothing(0);
		}
		initSmoothScrolling();
		return () => {
			gsap.ticker.remove(update);
		};
	}, []);
	return children;
};

export default dynamic(() => Promise.resolve(LenisScroll), {
	ssr: false,
});
