'use client';
import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Each from '@/app/utils/components/Each';
const Gallery = () => {
	const sectionRef = React.useRef<HTMLElement>(null);
	const itemsRef = React.useRef<(HTMLDivElement | null)[]>([]);
	React.useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			const animations = gsap.timeline();

			itemsRef.current.forEach((el, index) => {
				animations.to(
					el,
					{
						yPercent: index % 2 === 0 ? 25 : -25,
						stagger: 0.5,
					},
					0
				);
			});
			ScrollTrigger.create({
				trigger: sectionRef.current,
				start: 'top top',
				end: '+=500%',
				pin: true,
				scrub: 1,
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
			className='h-screen w-screen z-50 bg-default-200 flex items-center overflow-hidden gap-14 justify-center relative'
			id='section-two'>
			<Each
				of={Array.from({ length: 3 })}
				render={(_, indexs) => (
					<div
						key={indexs}
						ref={(elRef) => (itemsRef.current[indexs] = elRef)}
						className='flex flex-col gap-5'>
						<Each
							of={Array.from({ length: 10 })}
							render={(_, index) => (
								<div
									className='h-80 w-80'
									style={{
										backgroundColor:
											index % 2 === 0 ? 'orange' : 'blue',
									}}
									key={index}></div>
							)}
						/>
					</div>
				)}
			/>
			<h1 className='absolute z-20 uppercase text-8xl left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-bold mix-blend-difference text-default-200'>
				life isn't always fair, but your coffee can be!
			</h1>
		</section>
	);
};

export default Gallery;
