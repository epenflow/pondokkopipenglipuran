'use client';
import { Navbar } from '@/components/navbar';
import { NavbarMenu } from '@/components/navbar-menu';
import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
interface NavbarLayoutProps {
	children: React.ReactNode;
}
export const NavbarLayout: React.FC<NavbarLayoutProps> = ({ children }) => {
	const [isActive, setActive] = React.useState<boolean>(false);
	const menuRef = React.useRef<HTMLDivElement | null>(null);
	const timeline = React.useRef(gsap.timeline({ paused: true }));
	const { contextSafe } = useGSAP(() => {
		gsap.set('.menu--item', {
			autoAlpha: 0,
		});
		if (menuRef.current) {
			const links: HTMLAnchorElement[] =
				gsap.utils.toArray('.menu--link');
			// Define the animation
			timeline.current
				.to(
					menuRef.current,
					{
						height: '75svh',
						duration: 0.5,
						ease: 'power1.inOut',
					},
					0,
				)
				.to(
					'.menu--wrapper',
					{
						display: 'block',
						ease: 'power1.inOut',
					},
					0,
				)
				.to('.menu--item', {
					autoAlpha: 1,
				});
			links.forEach((link, index) => {
				timeline.current.fromTo(
					link,
					{
						yPercent: 100,
					},
					{
						yPercent: 0,
						ease: 'sine.inOut',
					},
				);
			});
		}
	});

	const handleToggle = contextSafe(() => {
		{
			setActive((prev) => !prev);

			if (isActive) {
				timeline.current.reverse();
			} else {
				timeline.current.play();
			}
		}
	});
	return (
		<React.Fragment>
			<Navbar isActive={isActive} handleToggle={handleToggle} />
			<NavbarMenu handleToggle={handleToggle} ref={menuRef} />
			{children}
		</React.Fragment>
	);
};
