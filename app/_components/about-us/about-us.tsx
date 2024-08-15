'use client';
import React from 'react';
/**
 * Components
 */
import { Carousel } from '@/app/_components/about-us/carousel';
import { MappingWrapper } from '@/lib/mapping-wrapper';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);
const _Text = {
	heading: `about us`,
	main: [
		`Pondok Kopi was established by A.A Gde Joyti Rahadian and A.A Gde Krisna Adita in June 2017. This business is located in Penglipuran Tourism Village, specifically behind Karang Memadu. The name of the cafe is inspired by the name of Penglipuran Village, with the aim of attracting tourist visiting the village.`,
		`In addition to supporting economic development and increasing tourist interest in visiting Penglipuran Village, Pondok Kopi also supports local farmers. The coffee beans produced by this cafe are sourced from local farmers, purchased in the form of green beans. These coffee beans are then processed at Pondok Kopi using traditional roasting methods`,
	],
	footer: 'coffee journey',
};
export const AboutUs = () => {
	const containerRef = React.useRef<HTMLElement | null>(null);
	const carouselRef = React.useRef<HTMLDivElement | null>(null);
	useGSAP(() => {
		const textScroll: HTMLElement[] = gsap.utils.toArray('.text--scroll');
		textScroll.forEach((text) => {
			gsap.set(text, {
				yPercent: 100,
				autoAlpha: 0,
			});
			gsap.to(text, {
				yPercent: 0,
				autoAlpha: 1,
				ease: 'sine.inOut',
				scrollTrigger: {
					trigger: text,
					start: 'bottom bottom-=5%',
					end: 'bottom bottom-=5%',
					scrub: 1,
				},
			});
		});
	}, [containerRef]);
	return (
		<section
			ref={containerRef}
			id="about-us"
			className="h-auto w-full bg-lush-white flex items-center justify-center flex-col space-y-10 px-2 lg:px-0 relative pt-20">
			<div className="lg:w-1/2 md:w-4/5 space-y-2">
				<h1 className="text--scroll text-4xl capitalize text-center">
					{_Text.heading}
				</h1>
				<MappingWrapper
					array={_Text.main}
					render={(paragraph, index) => (
						<p
							key={index}
							className="text--scroll text-justify indent-6">
							{paragraph}
						</p>
					)}
				/>
			</div>
			<div id="gallery" className="space-y-5">
				<h1 className="text-4xl px-2 lg:px-5">Gallery</h1>
				<Carousel ref={carouselRef} />
				<p className="text-center">(swipe to scroll)</p>
			</div>
		</section>
	);
};
