"use client"

import { Heart, Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

import nacionalImg from "@/assets/nacional.svg"
import nacionalBlackImg from "@/assets/nacionalBlack.png"

import { SearchInputField, SearchInputRoot } from "./search-input"
import { ShoppingBagButton } from "./shopping-bag-button"

interface HeaderProps {
	searchText?: string
	alwaysBackgroundWhite?: boolean
}

export const Header = ({
	searchText = "",
	alwaysBackgroundWhite = false,
}: HeaderProps) => {
	const [isWhiteBackground, setIsWhiteBackground] = useState(
		alwaysBackgroundWhite
	)

	useEffect(() => {
		const handleScroll = () => {
			if (!alwaysBackgroundWhite) {
				setIsWhiteBackground(window.scrollY > 50)
			}
		}

		window.addEventListener("scroll", handleScroll)

		return () => window.removeEventListener("scroll", handleScroll)
	}, [alwaysBackgroundWhite])

	return (
		<header
			data-iswhitebackground={isWhiteBackground}
			className="fixed top-0 z-10 flex w-full items-center justify-between px-6 py-7 text-gray-100 data-[iswhitebackground=true]:bg-white data-[iswhitebackground=true]:text-black lg:px-12"
		>
			<div className="flex items-center gap-9">
				<Link href="/">
					<Image
						src={isWhiteBackground ? nacionalBlackImg : nacionalImg}
						alt="nacional logo"
						className="h-[45px] w-[36px]"
					/>
				</Link>

				<nav className="hidden gap-8 lg:flex">
					<Link href="/catalog?category=category=promocoes">
						Novidades e Promoções
					</Link>
					<Link href="/catalog?category=category=feminino">
						Feminino
					</Link>
					<Link href="/catalog?category=category=masculino">
						Masculino
					</Link>
					<Link href="/catalog?category=category=criancas">
						Crianças
					</Link>
				</nav>
			</div>

			<div className="flex items-center gap-4">
				<SearchInputRoot className="max-w-44 rounded-full border-2 border-inherit px-4 py-2.5 md:border-none md:p-0">
					<SearchInputField defaultValue={searchText} />
				</SearchInputRoot>

				<div className="flex gap-4">
					<Heart className="hidden cursor-pointer lg:block" />
					<ShoppingBagButton />
					<Menu className="size-7 lg:hidden" />
				</div>
			</div>
		</header>
	)
}
