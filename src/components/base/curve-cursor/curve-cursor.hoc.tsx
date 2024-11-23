"use client";
import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export interface BaseCursorCurveProps
	extends React.ComponentPropsWithoutRef<"div"> {
	ref: React.RefObject<HTMLDivElement>;
}

export function CurveCursorHOC<
	T extends object & React.ComponentPropsWithoutRef<"div">,
>(BaseComponent: React.ComponentType<T & BaseCursorCurveProps>) {
	const CurveCursor = (props: T) => {
		const ref = React.useRef<HTMLDivElement | null>(null);
		const animationFrameId = React.useRef<number | null>(null);

		const mouseMove = React.useCallback((event: MouseEvent) => {
			if (animationFrameId.current) {
				cancelAnimationFrame(animationFrameId.current);
			}
			animationFrameId.current = requestAnimationFrame(() => {
				const bounding = ref.current!.getBoundingClientRect();
				const parent =
					ref.current!.parentElement!.getBoundingClientRect();

				const width = bounding.width / 2;
				const height = bounding.height / 2;

				const x = event.clientX - parent.left - width;
				const y = event.clientY - parent.top - height;

				gsap.to(ref.current, {
					x,
					y,
					autoAlpha: 1,
				});
			});
		}, []);

		useGSAP(() => {
			const FOREGROUND_COLOR = getComputedStyle(
				document.documentElement,
			).getPropertyValue("--button-primary-color");
			const PRIMARY_COLOR = getComputedStyle(
				document.documentElement,
			).getPropertyValue("--primary-foreground");

			const parent = ref.current!.parentElement;
			const cursorHoverItem: Array<HTMLElement> =
				gsap.utils.toArray(".cursor-hover-item");

			const timeline = gsap.timeline();
			timeline.to(ref.current, {
				scale: 5,
			});

			gsap.set(ref.current, {
				autoAlpha: 0,
				immediateRender: true,
			});

			function mouseEnter(element: HTMLElement) {
				gsap.to(element, {
					color: `hsl(${FOREGROUND_COLOR})`,
				});
				timeline.play();
			}
			function mouseLeave(element: HTMLElement) {
				gsap.to(element, {
					color: `hsl(${PRIMARY_COLOR})`,
				});
				timeline.reverse();
			}

			parent?.addEventListener("mousemove", mouseMove);

			cursorHoverItem.forEach((hover) => {
				hover.addEventListener("mouseover", () => {
					mouseEnter(hover);
				});
				hover.addEventListener("mouseout", () => {
					mouseLeave(hover);
				});
			});
		});

		return <BaseComponent {...{ ...props, ref }} />;
	};

	return CurveCursor;
}
