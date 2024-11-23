import { VIDEO_CONTENT } from "@/constants";
import { cn } from "@/utils";
import React from "react";

export const VideoView = React.forwardRef<
	HTMLElement,
	React.ComponentPropsWithoutRef<"article">
>(({ className, ...rest }, ref) => {
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
});
VideoView.displayName = "VideoView";
