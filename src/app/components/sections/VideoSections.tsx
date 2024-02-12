'use client';
import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
const CONTENT_TEXT = {
	headingone: 'we serve the best quality coffee',
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
				.to(videoContainerRef.current, {
					transformOrigin: 'center',
					top: 0,
					left: 0,
					duration: 2.5,
					ease: 'power3.in',
					width: '100%',
					height: '100%',
				})
				.to(
					headingoneRef.current,
					{
						autoAlpha: 0,
						ease: 'power2.in',
					},
					'-=0.5'
				)
				.to(videoContainerRef.current, {
					clipPath: 'inset(80% 0 0 0)',
					duration: 2.5,
					delay: 2.5,
				})
				.to(
					headingoneRef.current,
					{
						autoAlpha: 1,
						fontWeight: 900,
						duration: 1.5,
					},
					'-=2'
				)
				.to(
					contentContainerTwo.current,
					{
						yPercent: -100,
						duration: 2.5,
						ease: 'power3.in',
					},
					'-=2.25'
				)
				.to(
					itemTwoRef.current,
					{
						borderRadius: 0,
						duration: 2.5,
						ease: 'power3.in',
					},
					'-=2.5'
				)
				.to(headingtwoRef.current, {
					fontWeight: 900,
				})
				.to(
					pentagonRef.current,
					{
						clipPath:
							'polygon(50% 0%, 100% 50%, 50% 100%, 50% 100%, 0 50%)',
						duration: 1.5,
						ease: 'power2.in',
					},
					'-=0.5'
				);
			ScrollTrigger.create({
				trigger: sectionRef.current,
				start: 'top top',
				end: 'bottom+=1000%',
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
					className='lg:text-8xl text-4xl uppercase text-center z-10 mix-blend-difference text-default-200 p-1'>
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
						className='w-full h-full object-cover grayscale'
					/>
				</div>
			</div>
			<div
				ref={contentContainerTwo}
				className='z-20 fixed top-0 left-0 translate-y-[100%] h-screen'>
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
