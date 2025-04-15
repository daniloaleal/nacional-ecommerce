"use client"

import { Heart } from "lucide-react"
import { useState } from "react"

import { useFavorites } from "@/hooks/useFavorites"

import { FavoritesSideBar } from "./favorites-side-bar"

export const FavoritesButton = () => {
	const [isFavoritesOpen, setIsFavoritesOpen] = useState(false)

	return (
		<>
			<Heart
				onClick={() => setIsFavoritesOpen(true)}
				className="hidden cursor-pointer lg:block"
			/>

			<FavoritesSideBar
				isOpen={isFavoritesOpen}
				onRequestClose={() => setIsFavoritesOpen(false)}
			/>
		</>
	)
}

interface FavoriteProductButtonProps {
	productId: string
}

export const FavoriteProductButton = ({
	productId,
}: FavoriteProductButtonProps) => {
	const { isFavorite, toggleFavorite } = useFavorites()

	return (
		<button
			data-isfavorited={isFavorite(productId)}
			className="group absolute top-2.5 left-2.5 cursor-pointer rounded-full bg-black p-2.5 opacity-70"
			onClick={e => {
				e.stopPropagation()
				e.preventDefault()
				toggleFavorite(productId)
			}}
		>
			<Heart className="text-white group-data-[isfavorited=true]:fill-white" />
		</button>
	)
}
