'use client';

import React from 'react';
import flags from '~/libs/flags';
import { useGSAP } from '~/libs/gsap';
import './base.scss';
interface Props {
	scope: React.RefObject<HTMLElement | null>;
}
const Videos: React.FC<Props> = ({ scope }) => {
	return (
		<section
			ref={scope}
			data-flag-border={flags['border']}
			className="videos">
			<iframe
				data-lenis-prevent
				data-lenis-prevent-wheel
				className="video--content"
				src="https://www.youtube.com/embed/H9Ledm14Nw0?si=yRxM_Uzt-khgW0jA"
				allowFullScreen
			/>
			{/* <iframe
				data-flag-border={flags['border']}
				className="video--content"
				src="https://www.youtube.com/embed/H9Ledm14Nw0?si=yRxM_Uzt-khgW0jA"
				title="Pondok Kopi"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerPolicy="strict-origin-when-cross-origin"
				allowFullScreen
			/> */}
		</section>
	);
};
export default hoc(Videos);

function hoc<T extends object>(Component: React.ComponentType<T & Props>) {
	function HOC(props: T) {
		const scope = React.useRef<HTMLElement>(null);

		useGSAP(() => {}, { scope });

		return <Component {...{ ...props, scope }} />;
	}
	return HOC;
}
