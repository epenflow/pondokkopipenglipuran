'use client';
import React from 'react';
import { cn } from '@/lib/utils';
/**
 * GSAP
 */
/**
 * GSAP Register Plugin
 */
const _Text = {
	main: 'Shaping the Coffee Culture',
	footer: '(Coffee Journey)',
};
interface BrewedNarrativeProps extends React.HTMLAttributes<HTMLDivElement> {}
export const BrewedNarrative = React.forwardRef<
	HTMLDivElement,
	BrewedNarrativeProps
>(({ className, ...rest }, ref) => {
	return (
		<div
			{...rest}
			ref={ref}
			className={cn(
				'h-screen w-full relative flex items-center justify-center',
				className,
			)}>
			<h1 className="font-bold text-4xl text-end text--mix-difference lg:text-9xl px-2 lg:px-0">
				{_Text.main}
			</h1>
		</div>
	);
});
