import React from "react";
/** Utils */
import { cn } from "@/lib/utils";

export const HeroFooter = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...rest }, ref) => {
	return (
		<div
			{...rest}
			ref={ref}
			className={cn("content--sticky border-t bg-lush-white", className)}>
			<div
				className="h-full w-full origin-bottom bg-cover bg-center grayscale"
				style={{
					backgroundImage: `url('https://ucarecdn.com/b7335594-1bb7-49ac-9b6a-91e859a9073c/IMG-20.JPG')`,
					clipPath: "polygon(50% 0%, 100% 100%, 100% 100%, 0% 100%, 0% 100%)",
					scale: 0.5,
				}}></div>
		</div>
	);
});
