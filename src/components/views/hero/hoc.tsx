import { useGSAP } from '@gsap/react';
import { gsap, ScrollTrigger } from 'gsap/all';
import React from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);
export interface Props {
	scope: React.RefObject<HTMLElement | null>;
}

export default function hoc<T extends object>(Component: React.ComponentType<T & Props>) {
	return function HOC(props: T) {
		const scope = React.useRef<HTMLElement>(null);

		// function createSquare(total: number) {
		// 	const parent = document.createElement('div');
		// 	parent.classList.add('hero-container--box');
		// 	for (let index = 0; index < total; index++) {
		// 		const element = document.createElement('div');
		// 		element.classList.add('hero--box');
		// 		parent.appendChild(element);
		// 	}
		// 	return parent;
		// }

		useGSAP(
			() => {
				gsap.to('.hero-container--image', {
					filter: 'blur(0rem) ',
					duration: 0.5,
				});
				gsap.to('.hero-container', {
					ease: 'sine.inOut',
					opacity: 0.75,
					scale: 0.75,
					scrollTrigger: {
						pin: scope.current,
						start: 'top top',
						end: 'bottom+=100%',
						scrub: 1.5,
						markers: true,
					},
				});
			},
			{ scope },
		);

		// useGSAP(
		// 	(_, contextSafe) => {
		// 		if (!contextSafe) return null;
		// 		const size = Number(getPropertyValue('--hero-box--size').match(/\d+/)?.[0]);
		// 		const radius = getPropertyValue('--hero-radius');
		// 		const { total } = getComputeGridDimensions(size);

		// 		const appendChild = contextSafe(() => {
		// 			scope.current?.appendChild(createSquare(total));
		// 		});

		// 		appendChild();

		// 		const boxes: HTMLElement[] = gsap.utils.toArray('.hero--box');
		// 		boxes.forEach((box) => {
		// 			const mousemove = contextSafe(() => {
		// 				gsap.to(box, {
		// 					backgroundColor: 'blue',
		// 					filter: 'blur(0.5rem)',
		// 					borderRadius: radius,
		// 					border: '20px solid blue',
		// 				});
		// 			});
		// 			const mouseleave = contextSafe(() => {
		// 				gsap.to(box, {
		// 					backgroundColor: 'transparent',
		// 					filter: 'blur(0rem)',
		// 					borderRadius: 0,
		// 					border: 'none',
		// 				});
		// 			});

		// 			box.addEventListener('mousemove', mousemove);
		// 			box.addEventListener('mouseleave', mouseleave);

		// 			return () => {
		// 				box.removeEventListener('mousemove', mousemove);
		// 				box.removeEventListener('mouseleave', mouseleave);
		// 			};
		// 		});
		// 		scope.current?.addEventListener('resize', appendChild);
		// 		return () => scope.current?.removeEventListener('mouseleave', appendChild);
		// 	},
		// 	{ scope },
		// );
		return <Component {...{ ...props, scope }} />;
	};
}
