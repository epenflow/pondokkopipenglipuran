'use client';
import React from 'react';
import { cn } from '@/lib/utils';

interface PopupTextProps extends React.HTMLAttributes<HTMLSpanElement> {}
export const PopupText: React.FC<PopupTextProps> = ({
	children,
	className,
	...rest
}) => {
	return (
		<span
			{...rest}
			className={cn(
				'absolute left-1/2 -translate-x-1/2 font-bold bottom-2.5',
				className,
			)}>
			{children}
		</span>
	);
};
