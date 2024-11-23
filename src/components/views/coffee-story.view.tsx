import React from "react";

export const CoffeeStoryView = React.forwardRef<
	HTMLElement,
	React.ComponentPropsWithoutRef<"article">
>(({ className, ...rest }, ref) => {
	return (
		<article {...rest} ref={ref} className={className}>
			<p>Coffee Story</p>
		</article>
	);
});
CoffeeStoryView.displayName = "CoffeeStoryView";
