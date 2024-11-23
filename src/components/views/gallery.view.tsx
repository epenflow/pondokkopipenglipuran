import React from "react";

export const GalleryView = React.forwardRef<
	HTMLElement,
	React.ComponentPropsWithoutRef<"article">
>(({ className, ...rest }, ref) => {
	return (
		<article {...rest} ref={ref} className={className}>
			<p>Gallery</p>
		</article>
	);
});
