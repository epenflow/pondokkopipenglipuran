'use client';
import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Video = () => {
	const sectionRef = React.useRef<HTMLElement>(null);
	const videoContainerRef = React.useRef<HTMLDivElement>(null);
	const videoRef = React.useRef<HTMLDivElement>(null);
	const textRef = React.useRef<HTMLDivElement>(null);
	React.useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			gsap.timeline({
				scrollTrigger: {
					trigger: sectionRef.current,
					start: 'top top',
					end: 'bottom+=500% top',
					scrub: 1,
					pin: true,
					markers: true,
				},
				smoothChildTiming: true,
			})
				.set(
					videoContainerRef.current,
					{
						backgroundColor: 'black',
					},
					0
				)
				.set(
					textRef.current,
					{
						autoAlpha: 0,
					},
					0
				)
				.set(
					videoRef.current,
					{
						scale: 0.5,
					},
					0
				)
				.to(videoContainerRef.current, {
					scale: 1,
				})
				.to(textRef.current, {
					autoAlpha: 1,
					delay: 1,
				})
				.to(videoRef.current, {
					delay: 2.25,
					scale: 1,
					width: '100%',
					height: '100%',
				})
				.to(videoContainerRef.current, {
					borderRadius: '100%',
					top: 0,
					left: 0,
					transformOrigin: 'center',
				})
				.to(videoContainerRef.current, {
					backgroundColor: 'inherit',
				})
				.to(textRef.current, {
					autoAlpha: 0,
				})
				.to(videoRef.current, {
					clipPath: 'circle(5% at 50% 50%)',
				})
				.to(videoRef.current, {
					autoAlpha: 0,
				});
		});

		return () => {
			ctx.revert();
		};
	});
	return (
		<section
			ref={sectionRef}
			className='w-screen h-screen relative flex items-center justify-center'>
			<div
				ref={videoContainerRef}
				className='absolute bottom-0 left-0 scale-[0.37] origin-bottom-left'>
				<div className=' w-screen h-screen flex items-center justify-center overflow-hidden flex-col'>
					<div
						ref={videoRef}
						className='lg:h-full w-[90%] h-1/2 lg:w-full bg-white absolute circle-clip-path'>
						<video
							src='/coffee.mp4'
							autoPlay
							loop
							muted
							className='w-full h-full object-cover'></video>
					</div>
					<div
						ref={textRef}
						className='lg:w-1/2 w-full h-full flex items-end lg:items-center z-10 py-4 text-justify px-2 mix-blend-difference'>
						<p className='text-white'>
							Pondok Kopi Penglipuran is a small and medium-sized
							enterprise that specializes in processing coffee
							beans, from raw to ready-to-consume. The coffee shop
							was founded by A.A. Gde Joyti Rahadian and A.A. Gde
							Krisna Adita in June 2017. The business is located
							in Penglipuran Village, specifically behind Karang
							Memadu. The name of the coffee shop is inspired by
							the name of Penglipuran village, with the aim of
							attracting tourists who visit the village.
						</p>
					</div>
				</div>
			</div>
			<h1 className='uppercase text-2xl p-2 text-center'>
				w<span className='italic'>e</span> serve the best quality coffee
			</h1>
		</section>
	);
};

export default Video;
