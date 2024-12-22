"use client";
import CurveCursorHOC, { BaseCursorCurveProps } from "@/hoc/curve-cursor.hoc";
import { cn } from "@/libs/utils";
import React from "react";

export const BaseCurveCursor: React.FC<BaseCursorCurveProps> = ({
	ref,
	className,
	...rest
}) => {
	return (
		<div
			{...{ ...rest, ref }}
			className={cn(
				"absolute z-10 size-5 rounded-full bg-background mix-blend-difference",
				className,
			)}
		/>
	);
};

export default CurveCursorHOC(BaseCurveCursor);
