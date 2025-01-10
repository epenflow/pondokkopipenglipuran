import { useGSAP } from '@gsap/react';
import { Flip, gsap, ScrollTrigger } from 'gsap/all';
import React from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger, Flip);

export interface Props {
	scope: React.RefObject<HTMLElement | null>;
}

export default function hoc<T extends object>(Component: React.ComponentType<T & Props>) {
	return function HOC(props: T) {
		const scope = React.useRef<HTMLElement>(null);
		const { contextSafe } = useGSAP({ scope });

		const revealTextOnScroll = contextSafe(
			(value: string | object | Element | null, scrollTrigger?: ScrollTrigger.Vars) => {
				const splitter: HTMLElement[] = gsap.utils.toArray(value);

				splitter.forEach((split) => {
					gsap.from(split, {
						yPercent: 100,
						ease: 'sine.inOut',
						scrollTrigger: {
							...scrollTrigger,
							trigger: split,
						},
					});
				});
			},
		);

		const seedFlipOnScroll = contextSafe(() => {
			const seeds: HTMLElement[] = gsap.utils.toArray('.seed');
			const secondStep: HTMLElement[] = gsap.utils.toArray(
				'.about-description--outer .seed-container .seed-step',
			);
			const config = {
				duration: 1,
				ease: 'sine.inOut',
			};
			const secondStates = secondStep.map((state) => Flip.getState(state));

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: scope.current,
					start: 'top center',
					end: 'center center',
					scrub: 1.5,
					markers: true,
				},
			});
			seeds.forEach((seed) => {
				tl.add(
					Flip.fit(seed, '.about-intro--outer .seed-step', {
						...config,
						rotate: 380,
					}) as GSAPAnimation,
					0,
				);
			});

			seeds.forEach((seed, index) => {
				tl.add(
					Flip.fit(seed, secondStates[index], {
						...config,
					}) as GSAPAnimation,
					1,
				);
			});
		});

		useGSAP(
			(_, contextSafe) => {
				if (!contextSafe) return null;

				const loadAnimations = contextSafe(() => {
					revealTextOnScroll('[data-splitter]', {
						start: 'top center',
						end: 'bottom center',
						scrub: 1.5,
					});
					seedFlipOnScroll();
				});

				loadAnimations();
				window.addEventListener('resize', loadAnimations);
				return () => window.addEventListener('resize', loadAnimations);
			},
			{ scope },
		);

		return <Component {...{ ...props, scope }} />;
	};
}
