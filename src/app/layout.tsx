import "./globals.css"

import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({
	weight: ["400"],
	subsets: ["latin"],
	variable: "--font-inter",
})

export const metadata: Metadata = {
	title: "Nacional Online",
	description: "Descrição da nacional online",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="pt-BR" className={`${inter.variable}`}>
			<body>{children}</body>
		</html>
	)
}
