"use client";
import { NavbarContent } from "@/components/base/navbar/navbar.content";
import { NavbarList } from "@/components/base/navbar/navbar.list";
import { useNavbarContext } from "@/components/base/navbar/navbar.provider";
import NavbarHOC from "@/hoc/navbar.hoc";
import React from "react";
import "./style.css";

export const BaseNavbar: React.FC = () => {
	const { containerRef, contentContainerRef, listContainerRef } =
		useNavbarContext();

	return (
		<header
			ref={containerRef}
			aria-label="navbar"
			className="sticky left-0 top-0 z-50 w-full border-b bg-card py-2">
			<NavbarContent aria-label="content" ref={contentContainerRef} />
			<NavbarList aria-label="list" ref={listContainerRef} />
		</header>
	);
};

export default NavbarHOC(BaseNavbar);
