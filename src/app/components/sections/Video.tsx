'use client';
import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Each from '@/app/utils/components/Each';

const Video = () => {
	const sectionRef = React.useRef<HTMLElement>(null);
	const videoContainerRef = React.useRef<HTMLDivElement>(null);
	const videoRef = React.useRef<HTMLDivElement>(null);
	const textRef = React.useRef<HTMLDivElement>(null);
	const galleryRef = React.useRef<HTMLDivElement>(null);
	const pentagonRef = React.useRef<HTMLDivElement>(null);
	const headingRef = React.useRef<HTMLHeadingElement>(null);
	const headingTwoRef = React.useRef<HTMLHeadingElement>(null);
	React.useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			const animations = gsap
				.timeline({
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
						yPercent: -25,
					},
					0
				)
				.set(galleryRef.current, {
					position: 'fixed',
					top: '200%',
				})
				.to(videoContainerRef.current, {
					scale: 1,
				})
				.to(textRef.current, {
					autoAlpha: 1,
					yPercent: 0,
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
					yPercent: 25,
					autoAlpha: 0,
				})
				.to(videoRef.current, {
					clipPath: 'inset(0 0 60% 0)',
				})
				.to(headingRef.current, {
					zIndex: 20,
					webkitTextStroke: '2px black',
					webkitTextFillColor: '#f2f2f2',
					mixBlendMode: 'difference',
				})
				.to(headingRef.current, {
					webkitTextFillColor: 'black',
					webkitTextStroke: '1px black',
					fontWeight: '900',
				})
				.to(galleryRef.current, {
					zIndex: 30,
					top: 0,
				})
				.to(headingTwoRef.current, {
					fontWeight: '900',
				})
				.to(pentagonRef.current, {
					clipPath:
						'polygon(50% 0, 100% 45%, 100% 100%, 0 100%, 0 45%)',
				})
				.to(pentagonRef.current, {
					clipPath:
						'polygon(50% 0%, 100% 50%, 50% 100%, 50% 100%, 0 50%)',
				})
				.to(pentagonRef.current, {
					rotate: 360,
					xPercent: 100,
					yPercent: 100,
				});

			ScrollTrigger.create({
				trigger: sectionRef.current,
				start: 'top top',
				end: '+=2000%',
				animation: animations,
				scrub: true,
				invalidateOnRefresh: true,
				pin: true,
				anticipatePin: 1,
			});
		});

		return () => {
			ctx.revert();
		};
	});
	return (
		<section
			ref={sectionRef}
			className='w-screen relative flex flex-col items-center justify-center'>
			<div className='h-screen flex items-center justify-center w-full relative'>
				<div
					ref={videoContainerRef}
					className='absolute bottom-0 left-0 scale-[0.37] origin-bottom-left'>
					<div className=' w-screen h-screen flex items-center justify-center overflow-hidden flex-col'>
						<div
							ref={videoRef}
							className='w-screen h-screen bg-white absolute inset-clip-path'>
							<video
								src='/coffee.mp4'
								autoPlay
								loop
								muted
								className='w-full h-full object-cover'></video>
						</div>
						<div
							ref={textRef}
							className='lg:w-1/2 w-full h-full flex items-center z-10 py-4 text-justify px-4 mix-blend-difference'>
							<p className='text-white'>
								Pondok Kopi Penglipuran is a small and
								medium-sized enterprise that specializes in
								processing coffee beans, from raw to
								ready-to-consume. The coffee shop was founded by
								A.A. Gde Joyti Rahadian and A.A. Gde Krisna
								Adita in June 2017. The business is located in
								Penglipuran Village, specifically behind Karang
								Memadu. The name of the coffee shop is inspired
								by the name of Penglipuran village, with the aim
								of attracting tourists who visit the village.
							</p>
						</div>
					</div>
				</div>
				<h1
					ref={headingRef}
					className='uppercase text-4xl lg:text-6xl p-2 text-center'>
					w<span className='italic'>e</span> serve the best quality
					coffee
				</h1>
			</div>
			<div
				ref={galleryRef}
				className='bg-default-200 h-screen w-screen flex flex-row items-center overflow-hidden justify-center gap-4 p-4'>
				<h1
					ref={headingTwoRef}
					className='text-4xl lg:text-9xl capitalize z-10 mix-blend-difference text-white'>
					<span className='pr-10'>shaping the</span> <br />
					<span className='pl-10'>
						coffee culture<sup>®️</sup>
					</span>
				</h1>
				<div
					ref={pentagonRef}
					className='absolute bg-green-700 w-80 h-80 pentagon-clip-path'></div>
			</div>
		</section>
	);
};

export default Video;
