import React from "react";

const LocationView: React.FC<React.ComponentProps<"article">> = ({
	ref,
	className,
	...rest
}) => {
	return (
		<article {...rest} ref={ref} className={className}>
			<p>Location</p>
		</article>
	);
};
LocationView.displayName = "LocationView";
export default LocationView;
