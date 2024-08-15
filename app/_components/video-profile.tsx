'use client';
import React from 'react';
import dynamic from 'next/dynamic';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { MappingWrapper } from '@/lib/mapping-wrapper';
gsap.registerPlugin(ScrollTrigger);
const _Text = {
	main: [
		`Nestled in the heart of the serene Penglipuran Village, Pondok Kopi offers more than just a cup of coffee – it provides an immersive experience into the rich cultural heritage of Bali. Our coffee is crafted with passion, using traditional methods that have been passed down through generations, ensuring every sip is a journey through time.`,
		`At Pondok Kopi Penglipuran, we believe in sustainability and community. Our beans are sourced from local farmers who practice eco-friendly farming techniques, supporting both the environment and the local economy. The tranquil ambiance of our café, surrounded by lush greenery and traditional Balinese architecture, makes it the perfect spot to relax and unwind.`,
		`Join us in celebrating the art of coffee-making and the beauty of Balinese culture. Watch our video to learn more about our story, our commitment to quality, and the unique experience that awaits you at Pondok Kopi Penglipuran.`,
	],
};
export const VideoProfile = () => {
	const containerRef = React.useRef<HTMLElement | null>(null);
	const videoRef = React.useRef<HTMLIFrameElement | null>(null);
	useGSAP(() => {
		gsap.set(videoRef.current, {
			scale: 0.25,
		});
		gsap.to(videoRef.current, {
			scale: 1,
			scrollTrigger: {
				pin: containerRef.current,
				start: 'top top',
				end: 'bottom',
				scrub: 1,
			},
		});
	}, [containerRef]);
	return (
		<section
			ref={containerRef}
			className="h-screen w-full relative bg-lush-white">
			<div className="absolute--center w-full lg:w-1/2 px-2 lg:px-0">
				{/* <MappingWrapper
					array={_Text.main}
					render={(text, index) => (
						<p key={index} className="text-justify indent-5">
							{text}
						</p>
					)}
				/> */}
				<p className="text-center indent-5">
					Nestled in the heart of the serene Penglipuran Village,
					Pondok Kopi offers more than just a cup of coffee – it
					provides an immersive experience into the rich cultural
					heritage of Bali.
				</p>
			</div>
			<iframe
				ref={videoRef}
				className="w-full h-full object-cover origin-bottom-left bg-lush-white"
				src="https://www.youtube.com/embed/H9Ledm14Nw0?si=Whlqcg04CbItzT0W"
				title="YouTube video player"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
			{/* <video
				ref={videoRef}
				className="w-full h-full object-cover origin-bottom-left"
				controls>
				<source src="https://www.youtube.com/watch?v=H9Ledm14Nw0" type="video/mp4" />
			</video> */}
		</section>
	);
};
export default dynamic(() => Promise.resolve(VideoProfile), {
	ssr: false,
});
