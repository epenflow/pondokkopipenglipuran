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
					yPercent: 100,
					autoAlpha: 0,
				})
				.to(imgRef.current, {
					yPercent: 0,
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
				)
				.to(sectionRef.current, {
					clipPath: 'inset(0 0 0 100%)',
					duration: 1.5,
					ease: 'expo',
				});

			ScrollTrigger.create({
				trigger: sectionRef.current,
				pin: true,
				scrub: 1,
				start: 'top top',
				end: '+=400%',
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
			className='h-screen w-screen flex flex-col items-center justify-center bg-black text-default-200 relative gap-2'>
			<p className='lg:text-4xl text-justify w-4/5 font-[500]'>
				{CONSTANT_TEXT.pone}
			</p>
			{/* <Image
				src={'/coffee.png'}
				alt='coffe beans'
				width={50}
				height={50}
				className='absolute z-10 grayscale'
			/> */}
			<div className='flex flex-col lg:flex-row items-center justify-center capitalize px-2'>
				<Image
					ref={imgRef}
					{...CONSTANT_TEXT.images}
					objectFit='contain'
					className='p-2 grayscale border-[1px] border-solid border-default-200'
					width={420}
					height={420}
				/>
				<h1 className='lg:text-8xl font-[500]'>pondok kopi</h1>
			</div>
			<p className='lg:text-4xl w-4/5 font-[500] text-center pb-10'>
				{CONSTANT_TEXT.ptwo}
			</p>
		</section>
	);
};

export default HeroSections;
