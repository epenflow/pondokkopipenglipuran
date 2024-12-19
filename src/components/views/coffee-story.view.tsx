import React from "react";

export const CoffeeStoryView: React.FC<React.ComponentProps<"article">> = ({
	className,
	ref,
	...rest
}) => {
	return (
		<article {...rest} ref={ref} className={className}>
			<p>Coffee Story</p>
		</article>
	);
};
CoffeeStoryView.displayName = "CoffeeStoryView";
