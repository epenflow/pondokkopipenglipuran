'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
function getYear() {
	const dates = new Date().getFullYear();
	return dates;
}
interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {}
export const Footer = React.forwardRef<HTMLDivElement, FooterProps>(
	({ className, ...rest }, ref) => {
		return (
			<div
				{...rest}
				ref={ref}
				id="footer"
				className={cn(
					'h-auto w-full lg:px-10 px-2 relative mt-[-100vh] flex justify-between flex-col items-center',
					className,
				)}>
				<Image
					src={'/logo-01.svg'}
					alt="pondok kopi logo"
					priority
					width={0}
					height={0}
					sizes="100vh"
					className="size-96 relative mt-40 object-contain object-center"
				/>
				<div className="h-auto w-full rounded-t-xl bg-lush-white flex justify-between flex-col">
					<div className="basis-full px-5 flex lg:flex-row flex-col pt-5">
						<div className="basis-1/2">
							<h1 className="text-xl font-medium">Kontak Kami</h1>
							<p>Jl. Penglipuran No. 123, Bali</p>
							<p>+62 812 3456 7890</p>
							<p>info@pondokkopipengliupuran.com</p>
						</div>

						<div className="basis-1/2">
							<h1 className="text-xl font-medium">
								Follow us on
							</h1>
							<h1>Facebook</h1>
							<h1>Instagram</h1>
							<h1>Youtube</h1>
							<h1>Twitter</h1>
						</div>
					</div>
					<div className="border-t text-center py-2">
						© {getYear()} Pondok Kopi Penglipuran. All right
						reserved
					</div>
				</div>
			</div>
		);
	},
);
