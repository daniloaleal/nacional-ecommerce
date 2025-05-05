"use client"

import { useSearchParams } from "next/navigation"
import { useState } from "react"

export const useFilters = () => {
	const searchParams = useSearchParams()

	const [selectedCategories, setSelectedCategories] = useState<string[]>(
		searchParams.get("category")?.split(",") || []
	)
	const [selectedSizes, setSelectedSizes] = useState<string[]>(
		searchParams.get("sizes")?.split(",") || []
	)
	const [minPrice, setMinPrice] = useState(
		searchParams.get("minPrice") || "0"
	)
	const [maxPrice, setMaxPrice] = useState(searchParams.get("maxPrice") || "")

	return {
		selectedCategories,
		setSelectedCategories,
		selectedSizes,
		setSelectedSizes,
		minPrice,
		setMinPrice,
		maxPrice,
		setMaxPrice,
	}
}
