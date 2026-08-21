import { TooltipProvider } from "@/src/common/components/shadcn/tooltip";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/src/app/globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "romandmitri.com",
};

export default function RootLayout(p: LayoutProps<"/">) {
	return (
		<html lang="en" className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}>
			<body className="flex min-h-full flex-col">
				<TooltipProvider>{p.children}</TooltipProvider>
			</body>
		</html>
	);
}
