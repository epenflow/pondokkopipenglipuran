import Navbar from "@/components/base/navbar";
import Lenis from "@/context/lenis";
import { METADATA } from "@/libs/constant";
import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const BricolageGrotesque = Bricolage_Grotesque({
	style: ["normal"],
	subsets: ["latin"],
});
export const metadata: Metadata = METADATA;

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				suppressHydrationWarning
				className={`${BricolageGrotesque.className} bg-background antialiased`}>
				<Lenis>
					<Navbar />
					{children}
				</Lenis>
			</body>
		</html>
	);
}
