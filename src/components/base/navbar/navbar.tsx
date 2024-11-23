"use client";
import React from "react";
import "./style.css";
import { NavbarContent } from "@/components/base/navbar/navbar.content";
import { NavbarList } from "@/components/base/navbar/navbar.list";
import { NavbarHOC } from "@/components/base/navbar/navbar.hoc";
import { NavbarNotification } from "@/components/base/navbar/navbar.notification";
import { useNavbarContext } from "@/components/base/navbar/navbar.provider";

export const BaseNavbar: React.FC = () => {
	const {
		containerRef,
		notificationContainerRef,
		contentContainerRef,
		listContainerRef,
	} = useNavbarContext();

	return (
		<header
			ref={containerRef}
			aria-label="navbar"
			className="fixed left-0 top-0 z-50 w-full border-b bg-card py-2">
			<NavbarNotification
				aria-label="notification"
				ref={notificationContainerRef}
			/>
			<NavbarContent aria-label="content" ref={contentContainerRef} />
			<NavbarList aria-label="list" ref={listContainerRef} />
		</header>
	);
};

export const Navbar = NavbarHOC(BaseNavbar);
