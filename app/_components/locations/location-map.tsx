"use client";
import { cn } from "@/lib/utils";
import React from "react";

const _Text = {
	heading: "Our Location",
	main: "Pondok Kopi Penglipuran is located in Desa Penglipuran, Kubu, Kecamatan Bangli, Bali. We are open from 9:00 AM to 6:00 PM every day. We hope to see you soon at Pondok Kopi Penglipuran!",
};
interface LocationMapProps extends React.HTMLAttributes<HTMLDivElement> {}
export const LocationMap = React.forwardRef<HTMLDivElement, LocationMapProps>(
	({ className, ...rest }, ref) => {
		return (
			<div
				{...rest}
				ref={ref}
				className={cn("relative z-20 border-t bg-lush-white py-20", className)}>
				<div className="mx-auto w-[90%] items-center space-y-2.5 rounded-t-xl border-x border-t px-5 py-2 lg:flex lg:w-4/5 lg:bg-foreground/95 lg:text-lush-white">
					<h1 className="text-center text-3xl lg:basis-1/2 lg:text-7xl">
						{_Text.heading}
					</h1>
					<p className="text-justify text-2xl lg:basis-1/2">{_Text.main}</p>
				</div>
				<div className="mx-auto h-screen w-[90%] overflow-hidden rounded-b-xl border-x border-b lg:w-4/5">
					<iframe
						title="location"
						src="https://maps.google.com/maps?q=pondok+kopi+penglipuran&t=&z=18&ie=UTF8&iwloc=&output=embed"
						className="h-full w-full"
					/>
				</div>
			</div>
		);
	},
);
