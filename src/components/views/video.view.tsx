import { VIDEO_CONTENT } from "@/libs/constant";
import { cn } from "@/libs/utils";
import React from "react";
import type heroView from "./hero.view";

const VideoView: React.FC<React.ComponentProps<"article">> = ({
	ref,
	className,
	...rest
}) => {
	return (
		<article
			{...rest}
			ref={ref}
			className={cn(
				"container h-svh",
				"flex flex-col justify-center",
				className,
			)}>
			<p>VideoView</p>
			<p>{VIDEO_CONTENT.TEXT}</p>
		</article>
	);
};
VideoView.displayName = "VideoView";
export default heroView;
