'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react';
gsap.registerPlugin(useGSAP);

export interface Props {
	scope: React.RefObject<HTMLElement | null>;
	fnToggleMenu: (event: React.MouseEvent) => void;
}
export default function hoc<T extends object>(Component: React.ComponentType<T & Props>) {
	return function HOC(props: T) {
		const scope = React.useRef<HTMLElement>(null);
		const [isActive, setActive] = React.useState<boolean>(false);
		const toggleTween = React.useRef<GSAPTimeline>(null);

		useGSAP(
			() => {
				toggleTween.current = gsap.timeline({ paused: true }).to('.navbar-content--outer', {
					height: '100svh',
					width: '100%',
					top: '0px',
					borderRadius: '0px',
					opacity: '100%',
					ease: 'sine.inOut',
				});
			},
			{ scope },
		);
		const fnToggleMenu = (event: React.MouseEvent) => {
			event.preventDefault();
			event.stopPropagation();
			setActive((prev) => !prev);
		};

		useGSAP(
			() => {
				if (isActive) {
					document.body.style.overflow = 'hidden';
					toggleTween.current?.play();
				} else {
					document.body.style.overflow = 'unset';
					toggleTween.current?.reverse();
				}
			},
			{ scope, dependencies: [isActive] },
		);

		return <Component {...{ ...props, scope, fnToggleMenu }} />;
	};
}
