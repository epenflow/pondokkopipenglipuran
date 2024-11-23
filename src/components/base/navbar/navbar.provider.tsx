"use client";
import React from "react";

interface NavbarContext {
	isTrigger: boolean;
	trigger: () => void;
	contentContainerRef: React.RefObject<HTMLElement>;
	listContainerRef: React.RefObject<HTMLElement>;
	notificationContainerRef: React.RefObject<HTMLElement>;
	containerRef: React.RefObject<HTMLElement>;
}
const CreateNavbarContext = React.createContext<NavbarContext | undefined>(
	undefined,
);

export function NavbarProvider({ children }: { children: React.ReactNode }) {
	const [isTrigger, setTrigger] = React.useState<boolean>(false);
	const contentContainerRef = React.useRef<HTMLElement | null>(null);
	const listContainerRef = React.useRef<HTMLElement | null>(null);
	const notificationContainerRef = React.useRef<HTMLElement | null>(null);
	const containerRef = React.useRef<HTMLElement | null>(null);

	function trigger() {
		setTrigger((prev) => !prev);
	}

	return (
		<CreateNavbarContext.Provider
			value={{
				isTrigger,
				trigger,
				contentContainerRef,
				listContainerRef,
				notificationContainerRef,
				containerRef,
			}}>
			{children}
		</CreateNavbarContext.Provider>
	);
}

export function useNavbarContext() {
	const context = React.useContext(CreateNavbarContext);

	if (typeof context === "undefined")
		throw new Error("useNavbarContext must be used within NavbarProvider");

	return context;
}
