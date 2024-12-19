"use client";
import { List } from "@/components/base/list";
import { ONE_SECOND_IN_MS } from "@/constants";
import { cn } from "@/libs/utils";
import React from "react";

interface ClockProps {
	clockSize?: string;
	clockPointSize?: string;
	clockHandWidth?: string;
	secondHandHeight?: string;
	minuteHandHeight?: string;
	hourHandHeight?: string;
	secondHandBackground?: string;
	minuteHandBackground?: string;
	hourHandBackground?: string;
	numberRadius?: string;
	variant?: "number" | "point";
	classNameVariant?: string;
	classNamePoint?: string;
	classNameSecond?: string;
	classNameMinute?: string;
	classNameHour?: string;
	className?: string;
}

export const Clock: React.FC<ClockProps> = ({
	clockSize = "15rem",
	clockPointSize = "0.25rem",
	clockHandWidth = "1px",
	secondHandHeight = "2.5",
	minuteHandHeight = "3",
	hourHandHeight = "3.5",
	secondHandBackground = "red",
	minuteHandBackground = "yellow",
	hourHandBackground = "green",
	numberRadius = "2.5",
	variant = "number",
	classNameVariant,
	classNamePoint,
	classNameSecond,
	classNameMinute,
	classNameHour,
	className,
}) => {
	const [date, setDate] = React.useState<Date>(new Date());

	React.useEffect(() => {
		const interval = setInterval(() => {
			setDate((prev) => {
				const date = new Date();
				prev = date;
				return date;
			});
		}, ONE_SECOND_IN_MS);

		return () => {
			clearInterval(interval);
		};
	}, [setDate]);

	const CSSVariables = {
		"--clock-size": clockSize ?? "15rem",
		"--clock-point-size": clockPointSize ?? "0.25rem",
		"--clock-hand-width": clockHandWidth ?? "1px",
		"--second-hand-height": `calc(var(--clock-size) / ${secondHandHeight ?? 2.5})`,
		"--minute-hand-height": `calc(var(--clock-size) / ${minuteHandHeight ?? 3})`,
		"--hour-hand-height": `calc(var(--clock-size) / ${hourHandHeight ?? 3.5})`,
		"--second-hand-background": secondHandBackground ?? "red",
		"--minute-hand-background": minuteHandBackground ?? "yellow",
		"--hour-hand-background": hourHandBackground ?? "green",
		"--number-radius": `calc(var(--clock-size) / ${numberRadius ?? 2.25})`,
	} as React.CSSProperties;

	return (
		<div
			style={CSSVariables}
			className={cn(
				"relative size-[var(--clock-size)] rounded-full border border-foreground bg-card",
				className,
			)}>
			<div
				id="second"
				suppressHydrationWarning
				className={cn(
					"absolute left-1/2 origin-bottom -translate-x-1/2",
					classNameSecond,
				)}
				style={{
					backgroundColor: "var(--second-hand-background)",
					height: "var(--second-hand-height)",
					width: "var(--clock-hand-width)",
					top: "calc(50% - var(--second-hand-height))",
					transform: `rotateZ(${date.getSeconds() * 6}deg)`,
				}}
			/>

			<div
				id="minute"
				suppressHydrationWarning
				className={cn(
					"absolute left-1/2 origin-bottom -translate-x-1/2",
					classNameMinute,
				)}
				style={{
					backgroundColor: "var(--minute-hand-background)",
					height: "var(--minute-hand-height)",
					width: "var(--clock-hand-width)",
					top: "calc(50% - var(--minute-hand-height))",
					transform: `rotateZ(${date.getMinutes() * 6}deg)`,
				}}
			/>
			<div
				id="hour"
				suppressHydrationWarning
				className={cn(
					"absolute left-1/2 origin-bottom -translate-x-1/2",
					classNameHour,
				)}
				style={{
					backgroundColor: "var(--hour-hand-background)",
					height: "var(--hour-hand-height)",
					width: "var(--clock-hand-width)",
					top: "calc(50% - var(--hour-hand-height))",
					transform: `rotateZ(${date.getHours() * 30}deg)`,
				}}
			/>
			<div
				id="point"
				className={cn(
					"absolute left-1/2 top-1/2 size-[var(--clock-point-size)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground",
					classNamePoint,
				)}
			/>
			<List lists={Array.from({ length: 12 })}>
				{(_, key) => {
					const angle = (key + 1) * 30 - 90;
					const left = `calc(50% + (var(--number-radius) * cos(${angle}deg)))`;
					const top = `calc(50% + (var(--number-radius) * sin(${angle}deg)))`;

					return (
						<div
							key={key}
							style={{
								top,
								left,
								transform: "translate(-50%,-50%)",
								position: "absolute",
							}}>
							{variant === "number" ? (
								<span
									className={cn("text-xs", classNameVariant)}>
									{key + 1}
								</span>
							) : (
								<span
									className={cn(
										"block size-[1px] bg-black",
										classNameVariant,
									)}
								/>
							)}
						</div>
					);
				}}
			</List>
		</div>
	);
};
