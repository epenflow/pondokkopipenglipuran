import { cn } from "@/utils";
import React from "react";

export const NavbarNotification = React.forwardRef<
	HTMLElement,
	React.ComponentPropsWithoutRef<"section">
>(({ className, ...rest }, ref) => {
	return (
		<section {...rest} ref={ref} className={cn("hidden", className)}>
			<p>notification</p>
		</section>
	);
});
NavbarNotification.displayName = "NavbarNotification";
