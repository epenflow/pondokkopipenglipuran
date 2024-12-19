import React from "react";

export const GalleryView: React.FC<React.ComponentProps<"article">> = ({
	className,
	ref,
	...rest
}) => {
	return (
		<article {...rest} ref={ref} className={className}>
			<p>Gallery</p>
		</article>
	);
};
GalleryView.displayName = "GalleryView";
