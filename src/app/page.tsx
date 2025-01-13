'use client';
import dynamic from 'next/dynamic';
import React from 'react';
import gsap, { Flip, ScrollTrigger, useGSAP } from '~/libs/gsap';

gsap.registerPlugin(Flip, useGSAP, ScrollTrigger);
interface Props {
	scope: React.RefObject<HTMLElement | null>;
}
const Page: React.FC<Props> = ({ scope }) => {
	const { Views } = resources;
	return (
		<main
			ref={scope}
			className="overflow-x-hidden">
			{Object.entries(Views).map(([key, View]) => (
				<View key={key} />
			))}
		</main>
	);
};
export default hoc(Page);
const resources = {
	Views: {
		SpacerHeader: dynamic(() => import('~/components/views/spacer')),
		About: dynamic(() => import('~/components/views/about')),
		Grinder: dynamic(() => import('~/components/views/grinder')),
		Videos: dynamic(() => import('~/components/views/videos')),
		SpacerFooter: dynamic(() => import('~/components/views/spacer')),
	},
};
function hoc<T extends object>(Component: React.ComponentType<T & Props>) {
	function HOC(props: T) {
		const scope = React.useRef<HTMLElement>(null);
		const { contextSafe } = useGSAP({ scope });

		const animateSpoonOnScroll = contextSafe(() => {
			if (scope.current) {
				const config = { duration: 1, ease: 'sine.inOut' };
				const spoon = scope.current.querySelector('.spoon--image');
				const states = (gsap.utils.toArray('.spoon--step') as HTMLElement[]).map((state) =>
					Flip.getState(state),
				);
				const timeline = gsap.timeline({
					scrollTrigger: {
						trigger: '[data-spoon="start"]',
						endTrigger: '[data-spoon="end"]',
						start: 'top top',
						end: 'bottom center',
						scrub: 1.5,
						markers: true,
					},
				});

				states.forEach((state) => {
					timeline.add(Flip.fit(spoon, state, config) as GSAPAnimation);
				});
			}
		});

		useGSAP(
			() => {
				animateSpoonOnScroll();
			},
			{ scope },
		);
		return <Component {...{ ...props, scope }} />;
	}
	return React.memo(HOC);
}
