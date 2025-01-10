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

		const seedFlipOnScroll = contextSafe(() => {
			const seeds: HTMLElement[] = gsap.utils.toArray('.seed');

			const config = {
				duration: 1,
				ease: 'sine.inOut',
			};

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: scope.current,
					start: 'top center',
					end: 'center center',
					scrub: 1.5,
					markers: process.env.NODE_ENV === 'development',
				},
			});

			seeds.forEach((seed) => {
				tl.add(
					Flip.fit(seed, '.about-description--outer .seed-step', {
						...config,
						rotate: 380,
					}) as GSAPAnimation,
					1,
				);
			});
		});

		const spoonFlipOnScroll = contextSafe(() => {
			const spoon = scope.current!.querySelector('.spoon');
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: spoon,
					start: 'top top',
					end: 'bottom',
					scrub: 1.5,
					markers: process.env.NODE_ENV === 'development',
				},
			});
			tl.add(
				Flip.fit(spoon, '.spoon-step', {
					duration: 1,
					ease: 'sine.inOut',
					rotate: -90,
				}) as GSAPAnimation,
			);
		});

		const textAnimateOnScroll = contextSafe(() => {
			const texts: HTMLElement[] = gsap.utils.toArray('[data-text]');
			texts.forEach((text) => {
				gsap.from(text, {
					filter: 'blur(0.25rem)',
					scrollTrigger: {
						trigger: text,
						start: 'top center',
						end: 'bottom center',
						scrub: 1.5,
						markers: process.env.NODE_ENV === 'development',
					},
				});
			});
		});

		useGSAP(
			(_, contextSafe) => {
				if (!contextSafe) return null;

				const loadAnimations = contextSafe(() => {
					gsap.to('.grinder', {
						rotate: 380,
						ease: 'sine.inOut',
						scale: 1,
						scrollTrigger: {
							trigger: '.about-description--outer',
							start: 'top center',
							end: 'bottom',
							scrub: 1.5,
							markers: process.env.NODE_ENV === 'development',
						},
					});
					textAnimateOnScroll();
					seedFlipOnScroll();
					spoonFlipOnScroll();
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
