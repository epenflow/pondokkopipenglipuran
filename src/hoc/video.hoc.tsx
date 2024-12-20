"use client";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);
export interface VideoViewProps {
	containerRef: React.RefObject<HTMLElement | null>;
	videoRef: React.RefObject<HTMLIFrameElement | null>;
	textContainer: React.RefObject<HTMLDivElement | null>;
}
function VideoHOC<T extends object>(
	BaseComponent: React.ComponentType<T & VideoViewProps>,
) {
	const Video = (props: T) => {
		const containerRef = React.useRef<HTMLElement | null>(null);
		const videoRef = React.useRef<HTMLIFrameElement | null>(null);
		const textContainer = React.useRef<HTMLDivElement | null>(null);

		useGSAP(
			() => {
				const BACKGROUND = getComputedStyle(
					document.documentElement,
				).getPropertyValue("--foreground");
				gsap.set(videoRef.current, {
					scale: 0.25,
				});
				gsap.to(videoRef.current, {
					scale: 1,
					ease: "power4.in",
					scrollTrigger: {
						pin: containerRef.current,
						start: "top top",
						end: "bottom",
						toggleActions: "play pause reverse reverse",
					},
				});
			},
			{ scope: containerRef },
		);

		return (
			<BaseComponent
				{...{ ...props, containerRef, videoRef, textContainer }}
			/>
		);
	};
	return Video;
}

export default VideoHOC;
