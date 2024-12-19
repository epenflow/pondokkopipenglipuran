"use client";
import { List } from "@/components/base/list";
import { useNavbarContext } from "@/components/base/navbar/navbar.provider";

import { useTime } from "@/hooks";
import {
	NAVBAR_CONTENT,
	ONE_SECOND_IN_MS,
	TIME_FH_MM_SS_12H,
} from "@/libs/constant";
import { cn } from "@/libs/utils";
import React from "react";

const PerspectiveText: React.FC<{ label: string }> = ({ label }) => {
	return (
		<div className="perspective-text">
			<List lists={[1, 2]}>{(_, key) => <p key={key}>{label}</p>}</List>
		</div>
	);
};

export const NavbarContent: React.FC<React.ComponentProps<"section">> = ({
	ref,
	className,
	...rest
}) => {
	const { trigger, isTrigger } = useNavbarContext();
	const time = useTime(ONE_SECOND_IN_MS, TIME_FH_MM_SS_12H);

	return (
		<section
			{...rest}
			ref={ref}
			className={cn(
				"container flex items-center justify-between",
				className,
			)}>
			<button onClick={trigger} className="button">
				<div
					className={cn(
						"relative h-full w-full",
						isTrigger ? "-translate-y-full" : "translate-y-0",
						"transition-all duration-500 ease-in-out",
					)}>
					<List lists={NAVBAR_CONTENT.MENU}>
						{(text, key) => (
							<div key={key} className="perspective-container">
								<PerspectiveText label={text} />
							</div>
						)}
					</List>
				</div>
			</button>
			<h1 suppressHydrationWarning className="hidden xl:block">
				{time}
			</h1>
			<h1 data-strength="20" data-interval="0.5" className="magnetic">
				{NAVBAR_CONTENT.LABEL}
			</h1>
		</section>
	);
};
NavbarContent.displayName = "NavbarContent";
