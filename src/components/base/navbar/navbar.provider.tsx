"use client";
import React from "react";

interface NavbarContext {
	isTrigger: boolean;
	trigger: () => void;
	contentContainerRef: React.RefObject<HTMLElement | null>;
	listContainerRef: React.RefObject<HTMLElement | null>;
	containerRef: React.RefObject<HTMLElement | null>;
}
const CreateNavbarContext = React.createContext<NavbarContext | undefined>(
	undefined,
);

export function NavbarProvider({ children }: { children: React.ReactNode }) {
	const [isTrigger, setTrigger] = React.useState<boolean>(false);
	const contentContainerRef = React.useRef<HTMLElement | null>(null);
	const listContainerRef = React.useRef<HTMLElement | null>(null);
	const containerRef = React.useRef<HTMLElement | null>(null);

	function trigger() {
		setTrigger((prev) => !prev);
	}

	return (
		<CreateNavbarContext
			value={{
				isTrigger,
				trigger,
				contentContainerRef,
				listContainerRef,
				containerRef,
			}}>
			{children}
		</CreateNavbarContext>
	);
}

export function useNavbarContext() {
	const context = React.useContext(CreateNavbarContext);

	if (typeof context === "undefined")
		throw new Error("useNavbarContext must be used within NavbarProvider");

	return context;
}
