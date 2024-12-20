"use client";
import CoffeeStoryHOC, { CoffeeStoryProps } from "@/hoc/coffee-story.hoc";
import { COFFEE_STORY_CONTENT } from "@/libs/constant";
import Image from "next/image";
import React from "react";

const CoffeeStoryView: React.FC<CoffeeStoryProps> = ({
	coffeeJourneyRef,
	spoonRef,
	grinderRef,
	storyRef,
}) => {
	const BEANS = Array.from({ length: 10 }).map((_, index) => ({
		id: index,
		top: Math.max(index * Math.floor(Math.random() * 100)),
		left: Math.max(index * Math.floor(Math.random() * 100)),
	}));
	return (
		<article className="relative">
			<section
				ref={storyRef}
				className="relative z-20 grid h-svh w-full grid-cols-1 overflow-clip md:grid-cols-2">
				<div className="container relative z-10 flex items-center justify-center">
					<h1 className="text-center text-4xl lg:text-justify lg:text-7xl">
						{COFFEE_STORY_CONTENT.CULTURE}
					</h1>
				</div>
				<div className="relative h-full w-full">
					<Image
						ref={grinderRef}
						src={COFFEE_STORY_CONTENT.GRINDER.HREF}
						alt={COFFEE_STORY_CONTENT.GRINDER.ALT}
						width={0}
						height={0}
						sizes="100svh"
						className="h-full w-full object-contain"
					/>
				</div>
			</section>
			<section
				ref={coffeeJourneyRef}
				className="absolute top-0 h-[200svh] w-full">
				<div className="relative h-full w-full">
					{BEANS.map(({ id, left, top }) => (
						<Image
							key={id}
							src={COFFEE_STORY_CONTENT.COFFEE_BEAN.HREF}
							alt={COFFEE_STORY_CONTENT.COFFEE_BEAN.ALT}
							width={0}
							height={0}
							sizes="100svh"
							suppressHydrationWarning
							className="bean absolute size-24 object-contain"
							style={{
								transform: `translate(${left}px,${top}px)`,
							}}
						/>
					))}
					<Image
						ref={spoonRef}
						src={COFFEE_STORY_CONTENT.SPOON.HREF}
						alt={COFFEE_STORY_CONTENT.SPOON.ALT}
						width={0}
						height={0}
						sizes="100svh"
						className="absolute z-10 size-96 object-contain"
					/>
					<div className="absolute -bottom-20 size-96 bg-background" />
					<Image
						src={COFFEE_STORY_CONTENT.COFFEE_CUP.HREF}
						alt={COFFEE_STORY_CONTENT.COFFEE_CUP.ALT}
						width={0}
						height={0}
						sizes="100svh"
						className="absolute -bottom-20 z-20 size-96 object-contain"
					/>
				</div>
			</section>
			<section className="relative z-20 flex h-svh w-full items-center justify-center">
				<h1 className="container text-center text-4xl lg:text-7xl">
					{COFFEE_STORY_CONTENT.JOURNEY}
				</h1>
			</section>
			<section className="relative h-svh w-full">
				<div className="container relative z-10 flex h-full w-full items-center justify-center">
					<h1 className="text-center text-4xl lg:text-7xl">
						{COFFEE_STORY_CONTENT.STORY}
					</h1>
				</div>
				<Image
					src={COFFEE_STORY_CONTENT.LATTE_ART.HREF}
					alt={COFFEE_STORY_CONTENT.LATTE_ART.ALT}
					width={0}
					height={0}
					sizes="100svh"
					className="absolute bottom-0 size-96 object-contain"
				/>
			</section>
		</article>
	);
};
CoffeeStoryView.displayName = "CoffeeStoryView";
export default CoffeeStoryHOC(CoffeeStoryView);
