"use client";
import React from "react";
/** Components */
import { HeroFooter } from "@/app/_components/hero/hero-footer";
import { HeroHeader } from "@/app/_components/hero/hero-header";
/** GSAP */
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

/** GSAP Register Plugin */
gsap.registerPlugin(ScrollTrigger);
export const Hero = () => {
	const containerRef = React.useRef<HTMLDivElement | null>(null);
	const heroFooterRef = React.useRef<HTMLDivElement | null>(null);

	useGSAP(
		() => {
			const content: HTMLDivElement[] = gsap.utils.toArray(".content--sticky");
			content.forEach((element, index) => {
				const lastElement = content.length === index + 1;
				gsap
					.timeline({
						scrollTrigger: {
							trigger: element,
							start: "top+=20% top",
							end: "+120%",
							scrub: 1,
						},
					})
					.to(
						element,
						{
							ease: "none",
							scale: lastElement ? 1 : 0.75,
							borderRadius: lastElement ? 0 : 40,
						},
						0,
					);
			});
			/** HeroFooter */
			const heroFooterTimeline = gsap.timeline({
				scrollTrigger: {
					trigger: heroFooterRef.current,
					pin: containerRef.current,
					start: "top top",
					end: "bottom+=100vh top",
					scrub: true,
				},
			});
			heroFooterTimeline
				.to(
					heroFooterRef.current!.children[0],
					{
						clipPath: "polygon(50% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%)",
						scale: 1,
					},
					0,
				)
				.to(
					heroFooterRef.current,
					{
						backgroundColor: "#151517",
					},
					0,
				);
		},
		{ scope: containerRef },
	);
	return (
		<section ref={containerRef} className="bg-foreground/95">
			<HeroHeader />
			<HeroFooter ref={heroFooterRef} />
		</section>
	);
};
