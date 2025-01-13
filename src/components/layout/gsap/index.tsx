'use client';
import { useGSAP } from '@gsap/react';
import { Flip, gsap, ScrollTrigger } from 'gsap/all';
import React from 'react';

const GSAP = () => {
	React.useLayoutEffect(() => {
		gsap.registerPlugin(useGSAP, ScrollTrigger, Flip);
	}, []);
	return null;
};
export { Flip, gsap, ScrollTrigger, useGSAP };
export default GSAP;
