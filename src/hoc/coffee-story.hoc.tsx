"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React from "react";
gsap.registerPlugin(useGSAP, ScrollTrigger);

export interface CoffeeStoryProps {
	coffeeJourneyRef: React.RefObject<HTMLElement | null>;
	spoonRef: React.RefObject<HTMLImageElement | null>;
	grinderRef: React.RefObject<HTMLImageElement | null>;
	storyRef: React.RefObject<HTMLElement | null>;
}
function CoffeeStoryHOC<T extends object>(
	BaseComponent: React.ComponentType<T & CoffeeStoryProps>,
) {
	const CoffeeStory = (props: T) => {
		const coffeeJourneyRef = React.useRef<HTMLElement | null>(null);
		const spoonRef = React.useRef<HTMLImageElement | null>(null);

		const storyRef = React.useRef<HTMLElement | null>(null);
		const grinderRef = React.useRef<HTMLImageElement | null>(null);

		useGSAP(
			() => {
				console.group("ScrollTrigger");
				const beans: HTMLImageElement[] = gsap.utils.toArray(".bean");
				console.log(beans);
				const timeline = gsap.timeline({
					scrollTrigger: {
						trigger: coffeeJourneyRef.current,
						start: "top top",
						end: "bottom-=10%",
						scrub: 1,
					},
				});

				timeline
					.to(
						spoonRef.current,
						{
							bottom: 20,
							rotate: -90,
						},
						0,
					)
					.to(
						beans,
						{
							x: 0,
							y: 0,
							left: 150,
							bottom: 0,
						},
						0,
					)
					.to(
						spoonRef.current,
						{
							rotate: -125,
						},
						1,
					)
					.to(spoonRef.current, {
						rotate: -90,
					});
			},
			{ scope: coffeeJourneyRef },
		);

		useGSAP(
			() => {
				const timeline = gsap.timeline({
					scrollTrigger: {
						trigger: storyRef.current,
						start: "top top",
						end: "bottom",
						scrub: 1,
					},
				});
				timeline.to(grinderRef.current, {
					rotate: 360,
					duration: 1,
				});
			},
			{ scope: storyRef },
		);
		return (
			<BaseComponent
				{...{
					...props,
					coffeeJourneyRef,
					spoonRef,
					grinderRef,
					storyRef,
				}}
			/>
		);
	};

	return CoffeeStory;
}
export default CoffeeStoryHOC;
