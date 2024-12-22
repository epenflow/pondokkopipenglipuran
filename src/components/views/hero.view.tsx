"use client";
import CurveCursor from "@/components/base/curve-cursor/curve-cursor";
import List from "@/components/base/list";
import HeroHOC, { type HeroViewProps } from "@/hoc/hero.hoc";
import { HERO_CONTENT, PREFIX_ROUTE } from "@/libs/constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const BaseHeroView: React.FC<HeroViewProps> = ({ containerRef }) => {
	return (
		<article ref={containerRef} className="h-svh w-full border-b">
			<CurveCursor />
			<section className="relative h-full w-full">
				<div className="absolute h-full w-full">
					<div className="h-full w-full overflow-hidden p-6">
						<div className="container h-full w-full rounded-md bg-foreground p-6">
							<Image
								src={HERO_CONTENT.IMG_ONE.HREF}
								alt={HERO_CONTENT.IMG_ONE.ALT}
								width={0}
								height={0}
								sizes="100svh"
								className="h-full w-full object-contain grayscale"
							/>
						</div>
					</div>
				</div>

				<div className="container relative z-20 grid h-full w-full grid-cols-1 py-6 text-background mix-blend-difference">
					<div className="flex flex-col justify-center space-y-2 text-[hsl(var(--button-primary-color))]">
						<h1 className="heading-text cursor-hover-item">
							{HERO_CONTENT.TITLE}
						</h1>
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
					<div className="flex items-center justify-end">
						<div className="www-text-container">
							<Link
								className="cursor-hover-item text-4xl uppercase text-[hsl(var(--button-primary-color))]"
								href={PREFIX_ROUTE.WHO_WE_ARE}>
								{HERO_CONTENT.LINK_LABEL}
							</Link>
							<span className="www-line block h-[5px] w-full bg-background" />
						</div>
					</div>
				</div>
			</section>
		</article>
	);
};
export default HeroHOC(BaseHeroView);
