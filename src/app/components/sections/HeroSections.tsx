'use client';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import React from 'react';
const CONSTANT_TEXT = {
	pone: `	Pondok Kopi Penglipuran is a cozy coffee shop located in the
	heart of Desa Penglipuran, Bali. Our coffee shop is the
	perfect place to relax and unwind while enjoying a cup of
	freshly brewed coffee.`,
	ptwo: `We brew fresh, delicious coffee in-house every day.☕`,
	images: {
		alt: 'pondok kopi',
		src: '/pondokkopi.jpg',
	},
};
const HeroSections = () => {
	const sectionRef = React.useRef<HTMLElement>(null);
	const imgRef = React.useRef<HTMLImageElement>(null);
	React.useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			const animations = gsap
				.timeline()
				.set(imgRef.current, {
					xPercent: -100,
					autoAlpha: 0,
				})
				.to(imgRef.current, {
					xPercent: 0,
					autoAlpha: 1,
					duration: 1.5,
					ease: 'power3.in',
				})
				.to(
					imgRef.current,
					{
						borderTopLeftRadius: '99999px',
						borderTopRightRadius: '99999px',
						duration: 2.5,
						ease: 'power4.in',
					},
					'+=.5'
				);

			ScrollTrigger.create({
				trigger: sectionRef.current,
				pin: true,
				scrub: 1,
				start: 'top top',
				end: '+=500%',
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
			className='h-screen w-screen flex flex-col items-center justify-center bg-black text-default-200'>
			<p className='lg:text-4xl text-justify w-4/5 font-[500]'>
				{CONSTANT_TEXT.pone}
			</p>
			<div className='flex flex-col lg:flex-row items-center justify-center capitalize'>
				<Image
					ref={imgRef}
					{...CONSTANT_TEXT.images}
					objectFit='contain'
					className='p-2 grayscale'
					width={420}
					height={420}
				/>
				<h1 className='lg:text-8xl font-[500]'>pondok kopi</h1>
			</div>
			<p className='lg:text-4xl w-4/5 font-[500] text-center'>
				{CONSTANT_TEXT.ptwo}
			</p>
			<h1 className='py-5 capitalize'>(scroll down)</h1>
		</section>
	);
};

export default HeroSections;
