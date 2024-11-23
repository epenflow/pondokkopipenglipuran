import React from "react";

export const LocationView = React.forwardRef<
	HTMLElement,
	React.ComponentPropsWithoutRef<"article">
>(({ className, ...rest }, ref) => {
	return (
		<article {...rest} ref={ref} className={className}>
			<p>Location</p>
		</article>
	);
});
LocationView.displayName = "LocationView";
