'use client';
import React from 'react';
import { cn } from '@/lib/utils';
import { PopupText } from '@/components/popup-text';
import Image from 'next/image';

const _Text = {
	heading: '(Pondok Kopi Penglipuran)',
	main: 'Pondok Kopi Penglipuran is a cozy coffee shop located in the heart of Desa Penglipuran, Bali. Our coffee shop is the perfect place to relax and unwind while enjoying a cup of freshly brewed coffee.',
	footer: 'we make fresh, delicious food in house everyday',
};
interface HeroFooterProps extends React.HTMLAttributes<HTMLDivElement> {}
export const HeroFooter = React.forwardRef<HTMLDivElement, HeroFooterProps>(
	({ className, ...rest }, ref) => {
		return (
			<div
				{...rest}
				ref={ref}
				className={cn(
					'content--sticky bg-lush-white border flex items-center justify-center flex-col gap-1 overflow-hidden',
					className,
				)}>
				<Image
					src={
						'https://ucarecdn.com/31228eb2-3ada-4e92-a387-9325d82551ed/IMG-14.JPG'
					}
					alt="pondok coffee"
					width={0}
					height={0}
					sizes="100vh"
					className="lg:w-1/2 w-full px-2 lg:px-0 h-auto object-cover object-center"
				/>
				<div className="lg:w-1/2 w-full px-2 lg:px-0 space-y-1">
					<h1 className="text-center font-bold">{_Text.heading}</h1>
					<p className="text-justify">{_Text.main}</p>
				</div>
				<PopupText>{_Text.footer}</PopupText>
			</div>
		);
	},
);
