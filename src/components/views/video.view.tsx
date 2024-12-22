"use client";
import VideoHOC, { VideoViewProps } from "@/hoc/video.hoc";
import { VIDEO_CONTENT } from "@/libs/constant";
import React from "react";

const VideoView: React.FC<VideoViewProps> = ({
	containerRef,
	videoRef,
	textContainer,
}) => {
	return (
		<article
			ref={containerRef}
			className="relative h-svh w-full overflow-clip border-t">
			<div
				ref={textContainer}
				className="container absolute flex h-full w-full items-center justify-center">
				<p className="text-center text-2xl">{VIDEO_CONTENT.TEXT}</p>
			</div>
			<iframe
				ref={videoRef}
				className="bg-lush-white h-full w-full origin-bottom-left rounded-xl border object-cover"
				src={VIDEO_CONTENT.HREF}
				title="YouTube video player"
				allowFullScreen
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			/>
		</article>
	);
};
VideoView.displayName = "VideoView";
export default VideoHOC(VideoView);
