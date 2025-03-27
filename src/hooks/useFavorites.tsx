"use client"

import { StaticImageData } from "next/image"
import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from "react"

export interface FavoriteItem {
	id: string
	name: string
	price: number
	image: string | StaticImageData
}

interface FavoritesContextType {
	favorites: FavoriteItem[]
	addToFavorites: (item: FavoriteItem) => void
	removeFromFavorites: (id: string) => void
	toggleFavoriteItem: (item: FavoriteItem) => void
	isItemFavorited: (id: string) => boolean
}

interface FavoritesProviderProps {
	children: ReactNode
}

const FavoritesContext = createContext<FavoritesContextType>(
	{} as FavoritesContextType
)

export const FavoritesProvider = ({ children }: FavoritesProviderProps) => {
	const [favorites, setFavorites] = useState<FavoriteItem[]>(() => [])

	useEffect(() => {
		const favorites = localStorage.getItem("favorites")

		setFavorites(favorites ? JSON.parse(favorites) : [])
	}, [])

	useEffect(() => {
		localStorage.setItem("favorites", JSON.stringify(favorites))
	}, [favorites])

	const isItemFavorited = (id: string) =>
		!!favorites.find(favoriteItem => favoriteItem.id === id)

	const addToFavorites = (item: FavoriteItem) =>
		setFavorites(prevFavorites => {
			const isExistingItem = prevFavorites.find(
				favoriteItem => favoriteItem.id === item.id
			)

			return !isExistingItem ? [...prevFavorites, item] : prevFavorites
		})

	const removeFromFavorites = (id: string) =>
		setFavorites(prevFavorites =>
			prevFavorites.filter(item => item.id !== id)
		)

	const toggleFavoriteItem = (item: FavoriteItem) => {
		if (isItemFavorited(item.id)) {
			removeFromFavorites(item.id)
		} else {
			addToFavorites(item)
		}
	}

	return (
		<FavoritesContext.Provider
			value={{
				favorites,
				addToFavorites,
				removeFromFavorites,
				toggleFavoriteItem,
				isItemFavorited,
			}}
		>
			{children}
		</FavoritesContext.Provider>
	)
}

export const useFavorites = () => {
	const context = useContext(FavoritesContext)

	if (!context)
		throw new Error(
			"useFavorites deve estar dentro de um FavoritesProvider"
		)

	return context
}
