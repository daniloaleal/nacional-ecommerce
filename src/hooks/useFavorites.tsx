"use client"

import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from "react"

interface FavoritesContextData {
	favoriteItemIds: string[]
	addFavorite: (itemId: string) => void
	removeFavorite: (itemId: string) => void
	toggleFavorite: (itemId: string) => void
	isFavorite: (itemId: string) => boolean
}

interface FavoritesProviderProps {
	children: ReactNode
}

const FavoritesContext = createContext<FavoritesContextData>(
	{} as FavoritesContextData
)

export const FavoritesProvider = ({ children }: FavoritesProviderProps) => {
	const [favoriteItemIds, setFavoriteItemIds] = useState<string[]>([])

	useEffect(() => {
		const storedFavorites = localStorage.getItem("favoriteItemIds")
		if (storedFavorites) {
			setFavoriteItemIds(JSON.parse(storedFavorites))
		}
	}, [])

	useEffect(() => {
		localStorage.setItem("favoriteItemIds", JSON.stringify(favoriteItemIds))
	}, [favoriteItemIds])

	const isFavorite = (itemId: string) => favoriteItemIds.includes(itemId)

	const addFavorite = (itemId: string) => {
		setFavoriteItemIds(prevIds => {
			if (prevIds.includes(itemId)) return prevIds
			return [...prevIds, itemId]
		})
	}

	const removeFavorite = (itemId: string) => {
		setFavoriteItemIds(prevIds => prevIds.filter(id => id !== itemId))
	}

	const toggleFavorite = (itemId: string) => {
		if (isFavorite(itemId)) {
			removeFavorite(itemId)
		} else {
			addFavorite(itemId)
		}
	}

	return (
		<FavoritesContext.Provider
			value={{
				favoriteItemIds,
				addFavorite,
				removeFavorite,
				toggleFavorite,
				isFavorite,
			}}
		>
			{children}
		</FavoritesContext.Provider>
	)
}

export const useFavorites = () => {
	const context = useContext(FavoritesContext)

	if (!context) {
		throw new Error("useFavorites must be used within a FavoritesProvider")
	}

	return context
}
