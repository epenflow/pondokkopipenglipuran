"use client";
import React from "react";
/**
 * Components
 */
import { Footer } from "@/app/_components/locations/footer";
import { LocationMap } from "@/app/_components/locations/location-map";

/**
 *
 * GSAP
 */
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import dynamic from "next/dynamic";
gsap.registerPlugin(ScrollTrigger);
const Locations = () => {
	const containerRef = React.useRef<HTMLElement | null>(null);
	const locationMapRef = React.useRef<HTMLDivElement | null>(null);
	const footerRef = React.useRef<HTMLDivElement | null>(null);

	useGSAP(() => {
		ScrollTrigger.create({
			trigger: footerRef.current,
			pin: true,
			start: "bottom bottom",
			end: "+=100%",
			scrub: 1,
		});
	}, [containerRef]);
	return (
		<section
			ref={containerRef}
			className="w-full bg-foreground/95"
			id="location">
			<LocationMap ref={locationMapRef} />
			<Footer ref={footerRef} />
		</section>
	);
};
export default dynamic(() => Promise.resolve(Locations), {
	ssr: false,
});
