"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
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
					"relative mt-[-100vh] flex h-auto w-full flex-col items-center justify-between px-2 lg:px-10",
					className,
				)}>
				<Image
					src={"/logo-01.svg"}
					alt="pondok kopi logo"
					priority
					width={0}
					height={0}
					sizes="100vh"
					className="relative mt-40 size-96 object-contain object-center"
				/>
				<div className="flex h-auto w-full flex-col justify-between rounded-t-xl bg-lush-white">
					<div className="mb-10 flex basis-full flex-col space-y-4 px-5 pt-5 lg:flex-row">
						<div className="basis-1/2">
							<h1 className="text-xl font-medium">Kontak Kami</h1>
							<p>Area penglipuran ➡️ Karang Memadu</p>
							<p>+62 812 460 364 95</p>
						</div>

						<div className="flex basis-1/2 flex-col">
							<h1 className="text-xl font-medium">Follow us on</h1>
							<Link
								href={
									"https://web.facebook.com/p/Pondok-Kopi-Penglipuran-100033954373349/?_rdc=1&_rdr&checkpoint_src=any"
								}>
								Facebook
							</Link>
							<Link href={"https://www.instagram.com/pondokkopipenglipuran/"}>
								Instagram
							</Link>
						</div>
					</div>
					<div className="border-t py-2 text-center">
						© {getYear()} Pondok Kopi Penglipuran. All right reserved
					</div>
				</div>
			</div>
		);
	},
);
