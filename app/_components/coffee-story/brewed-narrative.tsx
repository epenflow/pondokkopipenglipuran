"use client";
import React from "react";
import { cn } from "@/lib/utils";
/**
 * GSAP
 */
/**
 * GSAP Register Plugin
 */
const _Text = {
	main: "Shaping the Coffee Culture",
	footer: "(Coffee Journey)",
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
				"relative flex h-screen w-full items-center justify-center",
				className,
			)}>
			<h1 className="text--mix-difference mx-auto w-4/5 text-justify text-2xl lg:text-9xl">
				{_Text.main}
			</h1>
		</div>
	);
});
