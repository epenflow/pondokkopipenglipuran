'use client';
import React from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
/**
 * GSAP
 */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
/**
 * GSAP Register Plugin
 */
gsap.registerPlugin(ScrollTrigger);
const _Text = {
	main: 'A cup of coffee, rich and bold, A Story, beautifully told.',
};
interface EndJourneyProps extends React.HTMLAttributes<HTMLDivElement> {}
export const EndJourney = React.forwardRef<HTMLDivElement, EndJourneyProps>(
	({ className, ...rest }, ref) => {
		const imgRef = React.useRef<HTMLDivElement | null>(null);
		useGSAP(() => {
			gsap.to(imgRef.current, {
				rotate: 180,
				scrollTrigger: {
					trigger: imgRef.current!.parentElement,
					start: 'top-=20% top',
					end: 'bottom',
					scrub: 1,
				},
			});
		});
		return (
			<div
				{...rest}
				ref={ref}
				className={cn(
					'h-screen w-full bg-lush-white relative overflow-hidden',
					className,
				)}>
				<h1 className="text-4xl lg:text-9xl text--mix-difference font-bold text-justify lg:px-0 px-2 py-10">
					{_Text.main}
				</h1>
				<div
					ref={imgRef}
					className="size-96 lg:size-[30rem] absolute bottom-0 origin-center">
					<Image
						src={'/latte-cup-2.png'}
						alt="latte-cup"
						width={0}
						height={0}
						sizes="100vh"
						className="h-full w-full"
					/>
				</div>
			</div>
		);
	},
);
