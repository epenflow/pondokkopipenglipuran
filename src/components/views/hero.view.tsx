"use client";
import { CurveCursor, List } from "@/components/base";
import HeroHOC, { type HeroViewProps } from "@/hoc/hero.hoc";
import { HERO_CONTENT, PREFIX_ROUTE } from "@/libs/constant";
import { cn } from "@/libs/utils";
import Link from "next/link";
import React from "react";

export const BaseHeroView: React.FC<HeroViewProps> = ({
	className,
	containerRef,
	...rest
}) => {
	const CSSVariables = {
		"--line-height": "5px",
	} as React.CSSProperties;

	return (
		<article
			{...{
				...rest,
				ref: containerRef,
				style: CSSVariables,
			}}
			className={cn(
				"relative box-border h-svh w-full overflow-hidden bg-foreground py-5 text-primary-foreground",
				className,
			)}>
			<CurveCursor />
			<section className="container relative z-20 box-border grid h-full grid-cols-1 mix-blend-difference md:grid-cols-2">
				<div className="flex h-full flex-col justify-center space-y-2">
					<h2 className="heading-text cursor-hover-item">
						{HERO_CONTENT.TITLE}
					</h2>
					<List lists={HERO_CONTENT.DESCRIPTIONS_TEXT_LIST}>
						{(text, key) => (
							<div
								key={key}
								className="h-fit w-fit overflow-hidden text-5xl md:text-7xl">
								<span className="story-text cursor-hover-item inline-block">
									{text}
								</span>
							</div>
						)}
					</List>
				</div>
				<div className="image-item bg-white"></div>
				<div className="image-item col-span-1 bg-white"></div>
				<div className="col-span-1 flex items-center justify-end">
					<div className="www-text-container">
						<Link
							href={PREFIX_ROUTE.WHO_WE_ARE}
							className="cursor-hover-item text-4xl uppercase">
							{HERO_CONTENT.LINK_LABEL}
						</Link>
						<span className="www-line block h-[var(--line-height)] w-full bg-background"></span>
					</div>
				</div>
			</section>
		</article>
	);
};
export default HeroHOC(BaseHeroView);
