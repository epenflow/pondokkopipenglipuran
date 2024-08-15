'use client';
import React from 'react';
import { cn } from '@/lib/utils';
import { MappingWrapper } from '@/lib/mapping-wrapper';
import Image from 'next/image';
/**
 * GSAP
 */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
/**
 * Register GSAP Plugin
 */
gsap.registerPlugin(ScrollTrigger);
const _Text = {
	main: 'A Journey of a Thousand Miles Begins with a Single Cup of Coffee.',
};
const beans = Array.from({ length: 10 }).map((_, index) => {
	return {
		id: index,
		top: Math.floor(Math.random() * 100),
		left: Math.floor(Math.random() * 100),
	};
});
interface BeansJourneyProps extends React.HTMLAttributes<HTMLDivElement> {}
export const BeansJourney = React.forwardRef<HTMLDivElement, BeansJourneyProps>(
	({ className, ...rest }, ref) => {
		const grinderRef = React.useRef<HTMLDivElement | null>(null);
		useGSAP(() => {
			gsap.to(grinderRef.current, {
				rotate: 360,
				scale: 1,
				scrollTrigger: {
					trigger: grinderRef.current!.parentElement,
					start: 'top-=25% top',
					end: 'bottom',
					scrub: 1,
				},
			});
		});
		return (
			<div
				{...rest}
				ref={ref}
				className={cn('h-[200vh] w-full relative', className)}>
				<h1 className="font-bold text-4xl text-justify px-2 py-10 text--mix-difference lg:text-9xl">
					{_Text.main}
				</h1>
				<MappingWrapper
					array={beans}
					render={({ left, top, id }) => (
						<Image
							key={id}
							src={'/coffee-bean.png'}
							alt="coffee bean"
							width={0}
							height={0}
							sizes="100vh"
							className="bean--pin lg:left-32"
							style={{
								transform: `translate(${Math.max(
									left * id,
								)}px,${Math.max(top * id)}px)`,
							}}
						/>
					)}
				/>
				<Image
					src={'/spoon.png'}
					alt="coffee spoon"
					width={0}
					height={0}
					sizes="100vh"
					className="spoon"
				/>
				<div
					ref={grinderRef}
					className="h-screen w-full bg-contain bg-no-repeat bg-center absolute top-1/4 scale-50"
					style={{
						backgroundImage: `url("/grinder.webp")`,
					}}></div>
				<div className="absolute bg-lush-white h-[17.7rem] lg:h-[22rem] w-full bottom-0"></div>
				<Image
					src={'/latte-cup.png'}
					alt="latte cup"
					width={0}
					height={0}
					sizes="100vh"
					className="absolute size-96 lg:size-[30rem] bottom-0 object-contain z-30"
				/>
			</div>
		);
	},
);
