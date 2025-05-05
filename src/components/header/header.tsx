"use client"

import { Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ComponentProps, useEffect, useState } from "react"
import { twMerge } from "tailwind-merge"

import nacionalImg from "@/assets/nacional.svg"
import nacionalBlackImg from "@/assets/nacionalBlack.png"
import { useFavorites } from "@/hooks/useFavorites"

import { SearchInputField, SearchInputRoot } from "../search-input"
// import { ShoppingBagButton } from "../shopping-bag"
import { HeaderSideBarButton } from "./header-side-bar-button"

interface HeaderProps extends ComponentProps<"header"> {
	search?: string
	alwaysBackgroundWhite?: boolean
}

export const Header = ({
	search = "",
	alwaysBackgroundWhite = false,
	className,
	...props
}: HeaderProps) => {
	const { toggleFavoritesSidebar } = useFavorites()

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
		<>
			<header
				data-iswhitebackground={isWhiteBackground}
				className={twMerge(
					"fixed top-0 z-10 flex w-full items-center justify-between px-6 py-7 text-gray-100 data-[iswhitebackground=true]:bg-white data-[iswhitebackground=true]:text-black lg:px-12",
					className
				)}
				{...props}
			>
				<div className="flex items-center gap-9">
					<Link href="/">
						<Image
							src={
								isWhiteBackground
									? nacionalBlackImg
									: nacionalImg
							}
							alt="nacional logo"
							className="h-[45px] w-[36px]"
						/>
					</Link>

					<nav className="hidden gap-8 lg:flex">
						<Link href="/catalog?category=promocoes">
							Novidades e Promoções
						</Link>
						<Link href="/catalog?category=feminino">Feminino</Link>
						<Link href="/catalog?category=masculino">
							Masculino
						</Link>
						<Link href="/catalog?category=criancas">Crianças</Link>
					</nav>
				</div>

				<div className="flex items-center gap-4">
					<SearchInputRoot className="max-w-44 rounded-full border-2 border-inherit px-4 py-1.5 md:border-none md:p-0">
						<SearchInputField value={search} />
					</SearchInputRoot>

					<div className="flex items-center gap-4">
						<Heart
							onClick={toggleFavoritesSidebar}
							className="hidden cursor-pointer lg:block"
						/>
						{/* <ShoppingBagButton /> */}
						<HeaderSideBarButton />
					</div>
				</div>
			</header>
		</>
	)
}
