"use client";
import {
	NavbarProvider,
	useNavbarContext,
} from "@/components/base/navbar/navbar.provider";
import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export function NavbarHOC<T extends object>(
	BaseComponent: React.ComponentType<T>,
) {
	BaseComponent.displayName = "BaseComponent";

	const Navbar = (props: T) => {
		const {
			containerRef,
			notificationContainerRef,
			contentContainerRef,
			listContainerRef,
			isTrigger,
		} = useNavbarContext();
		const timeline = React.useRef<GSAPTimeline | null>();

		useGSAP(
			() => {
				const FOREGROUND_COLORS = getComputedStyle(
					document.documentElement,
				).getPropertyValue("--foreground");
				const PRIMARY_FOREGROUND_COLORS = getComputedStyle(
					document.documentElement,
				).getPropertyValue("--primary-foreground");
				const NAVBAR_HEIGHT =
					containerRef.current!.getBoundingClientRect().height;

				gsap.set(listContainerRef.current, {
					display: "flex",
					height: 0,
					borderBottomLeftRadius: "100%",
					borderBottomRightRadius: "100%",
					immediateRender: true,
				});
				gsap.set(".list-menu-item", {
					yPercent: 50,
					xPercent: 25,
					rotateX: -90,
				});
				gsap.set(".list-social-item", {
					xPercent: -100,
					autoAlpha: 0,
				});
				gsap.set(".heading-item", {
					yPercent: 100,
				});
				gsap.set(".wrapper-animate", {
					clipPath: "inset(0% 0% 100% 0%)",
				});

				timeline.current = gsap
					.timeline({ paused: true })
					.to(listContainerRef.current, {
						height: `calc(100svh - ${NAVBAR_HEIGHT}px)`,
						backgroundColor: `hsl(${FOREGROUND_COLORS})`,
						borderRadius: "0%",
						duration: 1.2,
						ease: "power4.inOut",
					})
					.to(".wrapper-animate", {
						display: "block",
						clipPath: "inset(0% 0% 0% 0%)",
						ease: "power4.out",
						delay: 0.5,
					})
					.to(".wrapper-animate", {
						display: "none",
						clipPath: "inset(100% 0% 0% 0%)",
						ease: "power4.in",
						delay: 0.5,
					})
					.to(".heading-item", {
						display: "block",
						yPercent: 0,
						ease: "power4.out",
						duration: 0.5,
					})
					.to(".list-social-item", {
						display: "block",
						xPercent: 0,
						autoAlpha: 1,
						stagger: { each: 0.25, amount: 0.5 },
					})
					.to(".list-menu-item", {
						display: "block",
						yPercent: 0,
						xPercent: 0,
						rotateX: 0,
						color: `hsl(${PRIMARY_FOREGROUND_COLORS})`,
						ease: "power4.out",
						stagger: { each: 0.5, amount: 1 },
					});
			},
			{ scope: listContainerRef },
		);

		function magnet(event: MouseEvent) {
			const element = event.currentTarget as HTMLElement;
			const bounding = element.getBoundingClientRect();
			const STRENGTH = Number(element.getAttribute("data-strength"));
			const INTERVAL = Number(element.getAttribute("data-interval"));

			if (!STRENGTH && !INTERVAL)
				throw new Error(
					"Please provide data-strength dan data-interval",
				);

			const x =
				((event.clientX - bounding.left) / element.offsetWidth -
					INTERVAL) *
				STRENGTH;
			const y =
				((event.clientY - bounding.top) / element.offsetHeight -
					INTERVAL) *
				STRENGTH;

			gsap.to(element, {
				x,
				y,
				ease: "power4.out",
			});
		}

		useGSAP(
			() => {
				const magnetic: Array<HTMLElement> =
					gsap.utils.toArray(".magnetic");

				const BUTTON_PRIMARY_COLORS = getComputedStyle(
					document.documentElement,
				).getPropertyValue("--button-primary-color");

				magnetic.forEach((element) => {
					element.style.setProperty(
						"--dynamic-magnet-color",
						BUTTON_PRIMARY_COLORS,
					);
					element.addEventListener("mousemove", magnet);
					element.addEventListener("mouseleave", () => {
						gsap.to(element, {
							x: 0,
							y: 0,
							ease: "elastic.out",
						});
					});
				});
			},
			{ scope: containerRef },
		);

		React.useEffect(() => {
			const body = document.body;

			if (isTrigger) {
				timeline.current?.play();
				body.style.overflow = "hidden";
			} else {
				timeline.current?.reverse();
				body.style.overflow = "unset";
			}
		}, [isTrigger]);
		return <BaseComponent {...props} />;
	};

	return (props: T) => {
		return (
			<NavbarProvider>
				<Navbar {...props} />
			</NavbarProvider>
		);
	};
}
