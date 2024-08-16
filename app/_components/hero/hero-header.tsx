import React from "react";
import Link from "next/link";
/** Utils */
import { cn } from "@/lib/utils";
/** Components */
import { HeroVideo } from "@/app/_components/hero/hero-video";

export const HeroHeader = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...rest }, ref) => {
	return (
		<div
			{...rest}
			ref={ref}
			className={cn("content--sticky border bg-lush-white", className)}>
			<HeroVideo />
			<div className="mx-auto flex h-1/2 w-1/2 flex-col items-center justify-center space-y-2.5 lg:space-y-5">
				<h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl">
					Pondok Kopi
				</h1>
				<Link
					href={"#about-us"}
					className="rounded-xl border bg-lush-white px-5 py-2 text-secondary-foreground/75">
					Read More
				</Link>
			</div>
		</div>
	);
});
