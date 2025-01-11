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

		return <Component {...{ ...props, scope }} />;
	};
}
