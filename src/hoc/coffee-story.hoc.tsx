"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React from "react";
gsap.registerPlugin(useGSAP, ScrollTrigger);

export interface CoffeeStoryProps {
	coffeeJourneyRef: React.RefObject<HTMLElement | null>;
	journeyRef: React.RefObject<HTMLElement | null>;
	cultureRef: React.RefObject<HTMLElement | null>;
	storyRef: React.RefObject<HTMLElement | null>;
}
function CoffeeStoryHOC<T extends object>(
	BaseComponent: React.ComponentType<T & CoffeeStoryProps>,
) {
	const CoffeeStory = (props: T) => {
		const coffeeJourneyRef = React.useRef<HTMLElement | null>(null);
		const journeyRef = React.useRef<HTMLElement | null>(null);
		const storyRef = React.useRef<HTMLElement | null>(null);

		const cultureRef = React.useRef<HTMLElement | null>(null);

		useGSAP(
			() => {
				const beans: HTMLImageElement[] = gsap.utils.toArray(".bean");
				const spoon = coffeeJourneyRef.current!.querySelector("#spoon");

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
						spoon,
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
						spoon,
						{
							rotate: -125,
						},
						1,
					)
					.to(spoon, {
						rotate: -90,
					});
			},
			{ scope: coffeeJourneyRef },
		);

		useGSAP(
			() => {
				const image = cultureRef.current!.querySelector("img");
				const text = cultureRef.current!.querySelector("h1");

				const timeline = gsap.timeline({
					scrollTrigger: {
						trigger: cultureRef.current,
						start: "top center",
						end: "bottom",
						scrub: 1,
					},
				});
				timeline
					.to(image, {
						rotate: 360,
						duration: 1,
					})
					.to(
						text,
						{
							scaleY: 0.95,
							rotateX: 45,
						},
						0,
					);
			},
			{ scope: cultureRef },
		);

		useGSAP(
			() => {
				const text = journeyRef.current!.querySelector("h1");
				gsap.to(text, {
					yPercent: -200,
					opacity: 100,
					scrollTrigger: {
						trigger: journeyRef.current,
						start: "top center",
						end: "center",
						scrub: 1,
					},
				});
			},
			{ scope: journeyRef },
		);

		useGSAP(
			() => {
				const text = storyRef.current!.querySelector("h1");
				const image = storyRef.current!.querySelector("img");

				const timeline = gsap.timeline({
					scrollTrigger: {
						trigger: storyRef.current,
						start: "top center",
						end: "bottom",
						scrub: 1,
					},
				});
				timeline
					.to(text, {
						yPercent: -200,
						opacity: 100,
					})
					.to(
						image,
						{
							rotate: 0,
						},
						0,
					);
			},
			{ scope: storyRef },
		);

		return (
			<BaseComponent
				{...{
					...props,
					storyRef,
					journeyRef,
					coffeeJourneyRef,
					cultureRef,
				}}
			/>
		);
	};

	return CoffeeStory;
}
export default CoffeeStoryHOC;
