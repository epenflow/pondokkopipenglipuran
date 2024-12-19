"use client";
import { List } from "@/components/base/list";
import { useNavbarContext } from "@/components/base/navbar/navbar.provider";
import { NAVBAR_CONTENT } from "@/libs/constant";
import { cn } from "@/libs/utils";
import Link from "next/link";
import React, { type ComponentProps } from "react";

export const NavbarList: React.FC<ComponentProps<"section">> = ({
	ref,
	className,
	...rest
}) => {
	const { trigger } = useNavbarContext();

	return (
		<section
			{...rest}
			ref={ref}
			className={cn(
				"absolute mt-2 w-full overflow-hidden [background-color:hsl(var(--button-primary-color))]",
				"hidden flex-col justify-between space-y-8",
				className,
			)}>
			<div className="heading-item container z-10 hidden pt-8 text-primary-foreground">
				<h1
					data-strength="20"
					data-interval="0.5"
					className="magnetic relative">
					{NAVBAR_CONTENT.LABEL}
				</h1>
			</div>
			<div className="wrapper-animate absolute -top-8 hidden h-full w-full [background-color:hsl(var(--button-primary-color))]"></div>
			<ul className="container space-y-4">
				<List lists={NAVBAR_CONTENT.NAVIGATION}>
					{({ LABEL, HREF }, key) => (
						<li
							key={key}
							onClick={trigger}
							data-strength="20"
							data-interval="0.5"
							className="list-menu-item magnetic hidden text-4xl">
							<Link href={HREF}>{LABEL}</Link>
						</li>
					)}
				</List>
			</ul>
			<ul className="container pb-8">
				<List lists={NAVBAR_CONTENT.SOCIALS}>
					{({ LABEL, HREF }, key) => (
						<li
							key={key}
							data-strength="20"
							data-interval="0.5"
							className="list-social-item magnetic hidden text-primary-foreground">
							<Link href={HREF}>{LABEL}</Link>
						</li>
					)}
				</List>
			</ul>
		</section>
	);
};
NavbarList.displayName = "NavbarList";
