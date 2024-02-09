'use client';
import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
const Hero = () => {
	const sectionRef = React.useRef<HTMLElement>(null);
	const textRef = React.useRef<(HTMLElement | null)[]>([]);
	const imgContainerRef = React.useRef<HTMLDivElement>(null);
	React.useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			const animations = gsap
				.timeline()
				.set(
					imgContainerRef.current,
					{
						clipPath: 'inset(100% 0% 0% 0%)',
						xPercent: -100,
					},
					0
				)
				.to(imgContainerRef.current, {
					clipPath: 'inset(0% 0% 0% 0%)',
				})
				.to(imgContainerRef.current, {
					xPercent: 0,
				});
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
					.to(el, {
						yPercent: 0,
						xPercent: 0,
						autoAlpha: 1,
					});
			});
			animations.to(imgContainerRef.current, {
				scale: 5,
			});

			ScrollTrigger.create({
				trigger: sectionRef.current,
				start: 'top-=25px top',
				end: '+1000%',
				scrub: 1,
				markers: true,
				pin: true,
				animation: animations,
			});
		});
		return () => {
			ctx.revert();
		};
	}, []);
	return (
		<section
			ref={sectionRef}
			className='h-screen w-screen flex justify-center'>
			<div className='flex flex-col w-[460px] gap-2 relative p-4 mix-blend-difference'>
				<div
					ref={imgContainerRef}
					className='h-[340px] w-full bg-orange-600 border-primary '></div>
				<h1
					ref={(elRef) => (textRef.current[1] = elRef)}
					className='capitalize text-justify text-5xl'>
					Pondok Kopi Penglipuran
				</h1>
				<p
					ref={(elRef) => (textRef.current[2] = elRef)}
					className='py-4 text-justify'>
					Pondok Kopi Penglipuran is a cozy coffee shop located in the
					heart of Desa Penglipuran, Bali. Our coffee shop is the
					perfect place to relax and unwind while enjoying a cup of
					freshly brewed coffee.
				</p>
				<p
					ref={(elRef) => (textRef.current[3] = elRef)}
					className='text-center py-10'>
					We brew fresh, delicious coffee in-house every day.☕
				</p>
			</div>
		</section>
	);
};

export default Hero;
