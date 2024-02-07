'use client';
import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import dynamic from 'next/dynamic';
interface Props {
	children: React.ReactNode;
}
const RegisterGsap = ({ children }: Props) => {
	React.useLayoutEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
	});
	return children;
};

export default dynamic(() => Promise.resolve(RegisterGsap), { ssr: false });
