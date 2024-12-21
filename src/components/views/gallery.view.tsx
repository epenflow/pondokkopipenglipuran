import React from "react";

const GalleryView: React.FC<React.ComponentProps<"article">> = ({
	className,
	ref,
	...rest
}) => {
	return (
		<article {...rest} ref={ref} className="h-svh">
			<p className="text-background mix-blend-difference">Gallery</p>
		</article>
	);
};
GalleryView.displayName = "GalleryView";
export default GalleryView;
