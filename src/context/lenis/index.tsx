"use client";
import { gsap } from "gsap";
import { LenisRef, ReactLenis } from "lenis/react";
import React from "react";

export default function ({ children }: React.PropsWithChildren) {
	const lenis = React.useRef<LenisRef | null>(null);

	React.useEffect(() => {
		function update(time: number) {
			lenis.current?.lenis?.raf(time * 100);
		}
		gsap.ticker.add(update);

		return () => gsap.ticker.remove(update);
	}, []);
	return (
		<ReactLenis root options={{ autoRaf: false }} ref={lenis}>
			{children}
		</ReactLenis>
	);
}
