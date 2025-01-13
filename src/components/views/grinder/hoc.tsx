import React from 'react';
import flags from '~/libs/flags';
import gsap, { useGSAP } from '~/libs/gsap';

export interface Props {
	scope: React.RefObject<HTMLElement | null>;
}

export default function hoc<T extends object>(Component: React.ComponentType<T & Props>) {
	function HOC(props: T) {
		const scope = React.useRef<HTMLElement>(null);

		useGSAP(
			() => {
				gsap.to('.grinder--image', {
					rotate: 380,
					ease: 'linear',
					scrollTrigger: {
						trigger: scope.current,
						start: 'top top',
						end: 'bottom',
						scrub: 1.5,
						markers: flags['marker'],
					},
				});
			},
			{ scope },
		);
		return <Component {...{ ...props, scope }} />;
	}

	return React.memo(HOC);
}
