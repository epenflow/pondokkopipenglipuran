'use client';
import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
const Hero = () => {
	const sectionRef = React.useRef<HTMLElement>(null);
	const textRef = React.useRef<(HTMLElement | null)[]>([]);
	const imgContainerRef = React.useRef<HTMLDivElement>(null);
	const bonjourRef = React.useRef<HTMLSpanElement>(null);
	React.useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			const animations = gsap
				.timeline()
				.set(
					imgContainerRef.current,
					{
						clipPath: 'inset(100% 0% 0% 0%)',
						xPercent: -100,
						scale: 2,
					},
					0
				)
				.to(
					bonjourRef.current,
					{
						yPercent: -125,
						ease: 'power4.out',
					},
					1
				)
				.to(
					bonjourRef.current,
					{
						autoAlpha: 0,
					},
					1.5
				)
				.to(
					imgContainerRef.current,
					{
						clipPath: 'inset(0% 0% 0% 0%)',
						ease: 'power1.in',
					},
					3
				)
				.to(
					imgContainerRef.current,
					{
						xPercent: 0,
						ease: 'power1.in',
					},
					4
				);
			textRef.current.forEach((el, index) => {
				animations
					.set(
						el,
						{
							yPercent: (index + 1) * 25,
							autoAlpha: 0,
							xPercent: index % 2 === 0 ? -25 : 25,
						},
						0
					)
					.to(
						el,
						{
							yPercent: 0,
							xPercent: 0,
							autoAlpha: 1,
						},
						4
					);
			});
			animations
				.to(
					imgContainerRef.current,
					{
						scale: 1,
					},
					5
				)
				.to(
					imgContainerRef.current,
					{
						yPercent: 100,
						ease: 'power1.out',
					},
					6
				);
			textRef.current.forEach((el, index) => {
				animations.to(
					el,
					{
						yPercent: (index + 1) * -100,
						autoAlpha: 0,
						scale: 0.5,
					},
					6
				);
			});
			animations.to(
				imgContainerRef.current,
				{
					yPercent: 0,
					scale: 5,
				},
				7
			);
			ScrollTrigger.create({
				trigger: sectionRef.current,
				start: 'top-=10% top',
				end: '+1000%',
				scrub: true,
				pin: true,
				animation: animations,
				invalidateOnRefresh: false,
			});
		});
		return () => {
			ctx.revert();
		};
	}, []);
	return (
		<section
			ref={sectionRef}
			className='h-screen w-screen flex justify-center bg-default-200 relative'>
			<h1 className='absolute text-2xl lg:text-9xl capitalize top-1/2 h-fit overflow-hidden p-2'>
				<span
					ref={bonjourRef}
					className='inline-block'>
					bonjour<sup>🇫🇷</sup>/hello<sup>🇺🇸</sup>/swastiastu kopi 3
				</span>
			</h1>
			<div className='flex flex-col w-[460px] gap-2 p-4 relative'>
				<div
					ref={imgContainerRef}
					className='h-[340px] w-full bg-orange-600 border-primary'>
					<Image
						src={'/pondokkopi.jpg'}
						fill
						alt='pondok cover'
						objectFit='cover'
						className='p-2'
					/>
				</div>
				<h1
					ref={(elRef) => (textRef.current[1] = elRef)}
					className='capitalize text-justify text-5xl mix-blend-difference text-default-200'>
					Pondok Kopi Penglipuran
				</h1>
				<p
					ref={(elRef) => (textRef.current[2] = elRef)}
					className='py-4 text-justify mix-blend-difference text-default-200'>
					Pondok Kopi Penglipuran is a cozy coffee shop located in the
					heart of Desa Penglipuran, Bali. Our coffee shop is the
					perfect place to relax and unwind while enjoying a cup of
					freshly brewed coffee.
				</p>
				<p
					ref={(elRef) => (textRef.current[3] = elRef)}
					className='text-center py-10 mix-blend-difference text-default-200'>
					We brew fresh, delicious coffee in-house every day.☕
				</p>
			</div>
		</section>
	);
};

export default Hero;
