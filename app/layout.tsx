import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navbar/navigation";

const bricolage = Bricolage_Grotesque({ subsets: ["latin"] });
export const metadata: Metadata = {
	title: "Pondok Kopi Penglipuran",
	description:
		"Pondok Kopi Penglipuran is a charming café nestled in the heart of the serene Penglipuran Village in Bali. This café offers more than just a cup of coffee – it provides an immersive experience into the rich cultural heritage of Bali. At Pondok Kopi, coffee is crafted with passion, using traditional methods passed down through generations, ensuring every sip is a journey through time.",
	icons: {
		icon: {
			url: "/logo-01.svg",
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body suppressHydrationWarning className={`${bricolage.className}`}>
				<Navigation />
				{children}
			</body>
		</html>
	);
}
