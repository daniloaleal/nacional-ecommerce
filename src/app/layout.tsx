import "./globals.css"
import "keen-slider/keen-slider.min.css"

import type { Metadata } from "next"
import { Inter } from "next/font/google"

import { FavoritesProvider } from "@/hooks/useFavorites"
import { ShoppingCartProvider } from "@/hooks/useShoppingCart"

import { Footer } from "./footer"

const inter = Inter({
	weight: ["400", "500", "600", "700", "800", "900"],
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
			<body className="bg-background box-border overflow-x-hidden antialiased">
				<ShoppingCartProvider>
					<FavoritesProvider>
						{children} <Footer />
					</FavoritesProvider>
				</ShoppingCartProvider>
			</body>
		</html>
	)
}
