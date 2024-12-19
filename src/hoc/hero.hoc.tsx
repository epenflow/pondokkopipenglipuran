"use client";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import React from "react";

gsap.registerPlugin(useGSAP, TextPlugin, ScrollTrigger);

export interface HeroViewProps
	extends React.ComponentPropsWithoutRef<"article"> {
	containerRef: React.RefObject<HTMLElement>;
}

export function HeroHOC<T extends object>(
	BaseComponent: React.ComponentType<T & HeroViewProps>,
) {
	const HeroView = (props: T) => {
		const containerRef = React.useRef<HTMLElement | null>(null);

		/**
		 * Reveal animations
		 */
		useGSAP(
			() => {
				const storyText: Array<HTMLElement> =
					gsap.utils.toArray(".story-text");
				const timeline = gsap.timeline();
				const imageItem: Array<HTMLElement> =
					gsap.utils.toArray(".image-item");

				timeline.set(".heading-text", {
					text: "",
				});
				timeline.to(".heading-text", {
					text: "THE STORY",
					ease: "power3.in",
					duration: 1,
				});
				storyText.forEach((element, index) => {
					gsap.set(element, {
						xPercent: index % 2 === 1 ? 200 : -200,
						yPercent: index % 2 === 1 ? 200 : -200,
					});
				});
				imageItem.forEach((element, index) => {
					gsap.set(element, {
						clipPath:
							index % 2 === 1
								? "inset(100% 0% 0% 0%)"
								: "inset(0% 0% 100% 0%)",
					});
				});
				timeline
					.to(
						storyText,
						{
							xPercent: 0,
							yPercent: 0,
							ease: "power3.out",
							stagger: {
								each: 1.5,
								amount: 1,
							},
						},
						"<=1",
					)
					.to(
						imageItem,
						{
							clipPath: "inset(0% 0% 0% 0%)",
							ease: "power4.in",
							duration: 0.5,
						},
						"<=1",
					);
			},
			{ scope: containerRef },
		);

		// /**
		//  * Scroll animations
		//  */
		// useGSAP(
		// 	() => {
		// 		const imageItem: Array<HTMLElement> =
		// 			gsap.utils.toArray(".image-item");
		// 		const timeline = gsap.timeline({
		// 			scrollTrigger: {
		// 				trigger: containerRef.current,
		// 				pin: true,
		// 				start: "top top",
		// 				end: "bottom",
		// 				markers: true,
		// 				scrub: true,
		// 				invalidateOnRefresh: true,
		// 				immediateRender: true,
		// 			},
		// 		});
		// 		imageItem.forEach((image) => {
		// 			timeline.to(image, {
		// 				clipPath: "inset(100% 0% 0% 0%)",
		// 				rotateY: 90,
		// 				ease: "power1.out",
		// 			});
		// 		});
		// 	},
		// 	{ scope: containerRef },
		// );

		/**
		 * Hover animations
		 */
		useGSAP(
			() => {
				const FOREGROUND_COLOR = getComputedStyle(
					document.documentElement,
				).getPropertyValue("--button-primary-color");
				const PRIMARY_COLOR = getComputedStyle(
					document.documentElement,
				).getPropertyValue("--primary-foreground");

				const wwwLine =
					document.querySelector<HTMLSpanElement>(".www-line");
				const wwwTextContainer = document.querySelector<HTMLDivElement>(
					".www-text-container",
				);

				gsap.set(wwwLine, {
					width: 0,
					immediateRender: true,
					backgroundColor: `hsl(${PRIMARY_COLOR})`,
				});

				const timeline = gsap.timeline({
					paused: true,
				});
				timeline.to(wwwLine, {
					width: "100%",
					backgroundColor: `hsl(${FOREGROUND_COLOR})`,
				});

				wwwTextContainer?.addEventListener("mouseenter", () => {
					timeline.play();
				});
				wwwTextContainer?.addEventListener("mouseleave", () => {
					timeline.reverse();
				});
			},
			{ scope: containerRef },
		);
		return <BaseComponent {...{ ...props, containerRef }} />;
	};
	return HeroView;
}
