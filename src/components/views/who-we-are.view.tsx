import { List } from "@/components/base";
import { WHO_WE_ARE_CONTENT } from "@/libs/constant";
import { cn } from "@/libs/utils";
import React from "react";

const WhoWeAreView: React.FC<React.ComponentProps<"article">> = ({
	ref,
	className,
	...rest
}) => {
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
};
WhoWeAreView.displayName = "WhoWeAreView";
export default WhoWeAreView;
