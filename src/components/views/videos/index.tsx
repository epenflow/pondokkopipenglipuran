'use client';

import React from 'react';
import flags from '~/libs/flags';
import gsap, { useGSAP } from '~/libs/gsap';
import './base.scss';
interface Props {
	scope: React.RefObject<HTMLElement | null>;
}
const Videos: React.FC<Props> = ({ scope }) => {
	return (
		<section
			ref={scope}
			suppressHydrationWarning
			data-flag-border={flags['border']}
			className="videos">
			<div className="video--container">
				<iframe
					data-lenis-prevent
					className="video--content"
					src="https://www.youtube.com/embed/H9Ledm14Nw0?si=TkhPPYVcEd8hZ-GS"
					title="YouTube video player"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerPolicy="strict-origin-when-cross-origin"
					allowFullScreen
				/>
			</div>
			<div
				data-flag-border={flags['border']}
				data-spoon="end"
				className="spoon--step"
			/>
		</section>
	);
};
export default hoc(Videos);

function hoc<T extends object>(Component: React.ComponentType<T & Props>) {
	function HOC(props: T) {
		const scope = React.useRef<HTMLElement>(null);

		useGSAP(
			() => {
				const video = scope.current!.querySelector(
					'.video--container',
				) as HTMLIFrameElement;

				gsap.to(video, {
					width: '80%',
					height: '80svh',
					borderRadius: '20px',
					ease: 'sine.inOut',
					scrollTrigger: {
						trigger: scope.current,
						start: 'top bottom',
						end: 'center bottom',
						scrub: 1.5,
						markers: flags['marker'],
						onEnter: () => {},
					},
				});
			},
			{ scope },
		);

		return <Component {...{ ...props, scope }} />;
	}
	return HOC;
}
/* eslint-disable @typescript-eslint/no-unused-vars */
const resources = {
	getVideoSrc: function () {
		const id = `H9Ledm14Nw0&t=5s`;
		const key = `AIzaSyAAwwHP1ZmetsiRQBc83EwxgSx2HQy8ei0`;
		return `https://www.googleapis.com/youtube/v3/videos?part=snippet,player&id=${id}&key=${key}`;
	},
	videoSrc: `https://www.youtube.com/watch?v=H9Ledm14Nw0&t=6s`,
};
