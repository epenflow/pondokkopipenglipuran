'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react';
gsap.registerPlugin(useGSAP);

export interface Props {
	scope: React.RefObject<HTMLElement | null>;
	fnToggle: <T>(event: React.MouseEvent<T>) => void;
}
export default function hoc<T extends object>(Component: React.ComponentType<T & Props>) {
	return function HOC(props: T) {
		const scope = React.useRef<HTMLElement>(null);
		const [isActive, setActive] = React.useState<boolean>(false);
		const timeline = React.useRef<GSAPTimeline>(null);

		const { contextSafe } = useGSAP(
			() => {
				timeline.current = gsap.timeline({ paused: true }).to('.navbar--content-outer', {
					width: '100%',
					height: '100svh',
					top: '0px',
					borderRadius: '0px',
				});
			},
			{ scope },
		);

		const fnToggle = React.useCallback(
			<T,>(event: React.MouseEvent<T>) => {
				event.preventDefault();
				setActive((prev) => !prev);
			},
			[setActive],
		);

		const reveal = contextSafe(() => {
			if (isActive) {
				console.log('trigger', timeline);
				timeline.current?.play();
			} else {
				console.log('trigger', timeline);
				timeline.current?.reverse();
			}
		});

		React.useEffect(() => {
			reveal();
		}, [reveal]);
		return <Component {...{ ...props, scope, fnToggle }} />;
	};
}
