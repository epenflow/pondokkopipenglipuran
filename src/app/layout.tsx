import { Navbar } from "@/components/base";
import { METADATA } from "@/libs/constant";
import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const BricolageGrotesque = Bricolage_Grotesque({
	style: ["normal"],
	subsets: ["latin"],
});
export const metadata: Metadata = {
	title: METADATA.LABEL,
	description: METADATA.DESCRIPTION,
};

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
				<Navbar />
				{children}
			</body>
		</html>
	);
}
