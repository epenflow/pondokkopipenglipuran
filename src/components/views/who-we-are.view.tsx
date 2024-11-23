import React from "react";
import { WHO_WE_ARE_CONTENT } from "@/constants";
import { cn } from "@/utils";
import { List } from "@/components/base";

export const WhoWeAreView = React.forwardRef<
	HTMLElement,
	React.ComponentPropsWithoutRef<"article">
>(({ className, ...rest }, ref) => {
	return (
		<article
			{...rest}
			ref={ref}
			className={cn(
				"container h-svh space-y-2 2xl:w-3/5",
				"flex flex-col justify-center",
				className,
			)}>
			<h1 className="text-lg lg:text-2xl">{WHO_WE_ARE_CONTENT.TITLE}</h1>
			<List lists={WHO_WE_ARE_CONTENT.LISTS}>
				{(text, key) => (
					<p key={key} className="text-wrap text-lg lg:text-3xl">
						{text}
					</p>
				)}
			</List>
		</article>
	);
});
WhoWeAreView.displayName = "WhoWeAreView";
