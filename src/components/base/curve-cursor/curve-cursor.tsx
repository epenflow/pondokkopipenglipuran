"use client";
import React from "react";
import { cn } from "@/utils";
import {
	BaseCursorCurveProps,
	CurveCursorHOC,
} from "@/components/base/curve-cursor/curve-cursor.hoc";

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

export const CurveCursor = CurveCursorHOC(BaseCurveCursor);
