"use client";
import { NavbarContent } from "@/components/base/navbar/navbar.content";
import { NavbarHOC } from "@/components/base/navbar/navbar.hoc";
import { NavbarList } from "@/components/base/navbar/navbar.list";
import { useNavbarContext } from "@/components/base/navbar/navbar.provider";
import React from "react";
import "./style.css";

export const BaseNavbar: React.FC = () => {
	const { containerRef, contentContainerRef, listContainerRef } =
		useNavbarContext();

	return (
		<header
			ref={containerRef}
			aria-label="navbar"
			className="fixed left-0 top-0 z-50 w-full border-b bg-card py-2">
			<NavbarContent aria-label="content" ref={contentContainerRef} />
			<NavbarList aria-label="list" ref={listContainerRef} />
		</header>
	);
};

export const Navbar = NavbarHOC(BaseNavbar);
