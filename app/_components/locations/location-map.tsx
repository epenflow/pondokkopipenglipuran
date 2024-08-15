'use client';
import { cn } from '@/lib/utils';
import React from 'react';

const _Text = {
	heading: 'Our Location',
	main: 'Pondok Kopi Penglipuran is located in Desa Penglipuran, Kubu, Kecamatan Bangli, Bali. We are open from 9:00 AM to 6:00 PM every day. We hope to see you soon at Pondok Kopi Penglipuran!',
};
interface LocationMapProps extends React.HTMLAttributes<HTMLDivElement> {}
export const LocationMap = React.forwardRef<HTMLDivElement, LocationMapProps>(
	({ className, ...rest }, ref) => {
		return (
			<div
				{...rest}
				ref={ref}
				className={cn(
					'w-full bg-lush-white relative z-20 px-2 py-5 lg:py-14 lg:px-32 space-y-10',
					className,
				)}>
				<div className="w-full flex justify-center lg:items-center flex-col lg:flex-row">
					<h1 className="basis-full lg:basis-1/2 text-4xl lg:text-8xl">
						{_Text.heading}
					</h1>
					<p className="basis-full text-justify lg:basis-1/2">
						{_Text.main}
					</p>
				</div>
				<div className="w-full h-screen overflow-hidden">
					<iframe
						title="location"
						src="https://maps.google.com/maps?q=pondok+kopi+penglipuran&t=&z=18&ie=UTF8&iwloc=&output=embed"
						className="w-full h-full"
					/>
				</div>
			</div>
		);
	},
);
