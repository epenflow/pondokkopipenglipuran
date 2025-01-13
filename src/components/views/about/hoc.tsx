'use client';
import React from 'react';
import { gsap, useGSAP } from '~/components/layout/gsap';
import flags from '~/libs/flags';

export interface Props {
	scope: React.RefObject<HTMLElement | null>;
}

export default function hoc<T extends object>(Component: React.ComponentType<T & Props>) {
	function HOC(props: T) {
		const scope = React.useRef<HTMLElement>(null);
		const { contextSafe } = useGSAP({ scope });
		const revealTextOnScroll = contextSafe(() => {
			const texts: HTMLElement[] = gsap.utils.toArray('.heading--content, .text--content');

			texts.forEach((text) => {
				gsap.to(text, {
					filter: 'blur(0rem)',
					ease: 'sine.inOut',
					scrollTrigger: {
						trigger: text,
						start: 'clamp(top center)',
						end: 'clamp(bottom center)',
						scrub: 1.5,
						markers: flags['marker'],
					},
				});
			});
		});

		useGSAP(
			() => {
				revealTextOnScroll();
			},
			{ scope },
		);
		return <Component {...{ ...props, scope }} />;
	}
	return React.memo(HOC);
}
