'use client';
import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
const CONTENT_TEXT = {
	headingone: 'we serve the best quality coffe',
	pone: `Pondok Kopi Penglipuran is a small and
    medium-sized enterprise that specializes in
    processing coffee beans, from raw to
    ready-to-consume. The coffee shop was founded by
    A.A. Gde Joyti Rahadian and A.A. Gde Krisna
    Adita in June 2017. The business is located in
    Penglipuran Village, specifically behind Karang
    Memadu. The name of the coffee shop is inspired
    by the name of Penglipuran village, with the aim
    of attracting tourists who visit the village.`,
	headingtwo: 'shaping the coffee culture',
};
const VideoSections = () => {
	const sectionRef = React.useRef<HTMLElement>(null);
	const videoContainerRef = React.useRef<HTMLDivElement>(null);
	const headingoneRef = React.useRef<HTMLHeadingElement>(null);
	const headingtwoRef = React.useRef<HTMLHeadingElement>(null);
	const contentContainerOne = React.useRef<HTMLDivElement>(null);
	const contentContainerTwo = React.useRef<HTMLDivElement>(null);
	const pentagonRef = React.useRef<HTMLDivElement>(null);
	const itemTwoRef = React.useRef<HTMLDivElement>(null);
	React.useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			const animations = gsap
				.timeline()
				.to(
					headingoneRef.current,
					{
						autoAlpha: 0,
						duration: 1.5,
					},
					0
				)
				.to(
					videoContainerRef.current,
					{
						transformOrigin: 'center',
						width: '100%',
						height: '100%',
						top: 0,
						ease: 'sine.out',
						duration: 1.5,
					},
					1
				)
				.to(
					headingoneRef.current,
					{
						autoAlpha: 1,
						ease: 'power1.in',
						duration: 0.5,
						delay: 2.5,
					},
					2
				)
				.to(
					videoContainerRef.current,
					{
						clipPath: 'inset(0 0 70% 0)',
						ease: 'sine.out',
						duration: 2.5,
						delay: 0.5,
					},
					3
				)
				.to(
					headingoneRef.current,
					{
						fontWeight: '900',
						duration: 1.5,
						delay: 3,
					},
					3
				)
				.to(
					contentContainerTwo.current,
					{
						yPercent: -100,
						duration: 3,
						delay: 3.5,
					},
					5
				)
				.to(
					itemTwoRef.current,
					{
						borderRadius: 0,
						duration: 3.5,
						delay: 3.5,
					},
					5
				)
				.to(
					headingtwoRef.current,
					{
						fontWeight: 900,
						delay: 4.5,
						duration: 1.5,
					},
					6
				)
				.to(
					pentagonRef.current,
					{
						clipPath:
							'polygon(50% 0%, 100% 50%, 50% 100%, 50% 100%, 0 50%)',
						rotate: 360 * 3,
						yPercent: 100,
						xPercent: 100,
						delay: 4.5,
						duration: 5,
					},
					6
				);
			ScrollTrigger.create({
				trigger: sectionRef.current,
				start: 'top top',
				end: '+=1000%',
				markers: true,
				scrub: 1,
				pin: true,
				animation: animations,
			});
		});
		return () => {
			ctx.revert();
		};
	}, []);
	return (
		<section ref={sectionRef}>
			<div
				ref={contentContainerOne}
				className='h-screen w-screen bg-default-200 flex flex-col items-center justify-center relative'>
				<h1
					ref={headingoneRef}
					className='lg:text-8xl text-4xl uppercase text-center z-10 mix-blend-difference text-default-200'>
					{CONTENT_TEXT.headingone}
				</h1>
				<div
					ref={videoContainerRef}
					className='w-1/2 h-1/2 absolute bg-black origin-bottom-left bottom-0 left-0'>
					<video
						src='/coffee.mp4'
						autoPlay
						loop
						muted
						className='w-full h-full object-cover'
					/>
				</div>
			</div>
			<div
				ref={contentContainerTwo}
				className='h-screen z-20 relative'>
				<div
					ref={itemTwoRef}
					className='flex items-center justify-center bg-black w-full h-full rounded-t-[25%] relative flex-col gap-5'>
					<h1
						ref={headingtwoRef}
						className='text-default-200 text-4xl lg:text-8xl capitalize z-10 mix-blend-difference'>
						<span className='pr-20'>shaping the</span>
						<br />
						<span className='pl-20'>coffee culture</span>
					</h1>
					<p className='text-default-200 lg:w-1/2 text-justify w-4/5 z-10 mix-blend-difference'>
						{CONTENT_TEXT.pone}
					</p>

					<div
						ref={pentagonRef}
						className='h-80 w-80 absolute bg-default-200 pentagon-clip-path'></div>
				</div>
			</div>
		</section>
	);
};

export default VideoSections;
