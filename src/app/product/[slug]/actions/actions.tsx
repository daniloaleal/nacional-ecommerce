"use client"

import { Heart } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

import { useFavorites } from "@/hooks/useFavorites"
import { FormattedProduct } from "@/services/shopify"

import { ColorPicker } from "./color-picker"
import { MarketplaceSelection } from "./marketplace-selection"
import { SizePicker } from "./size-picker"

// import { useShoppingCart } from "@/hooks/useShoppingCart"

interface ActionsProps {
	product: FormattedProduct
}

export const Actions = ({ product }: ActionsProps) => {
	// const { addToCart, isInShoppingCart } = useShoppingCart()
	const { toggleFavorite, isFavorite } = useFavorites()
	const [marketplaceSelected, setMarketplaceSelected] = useState<
		"mercadolivre" | "shopee"
	>(product.mercadolivreUrl ? "mercadolivre" : "shopee")
	const [selectedColorIndex, setSelectedColorIndex] = useState(0)
	const [selectedSizeIndex, setSelectedSizeIndex] = useState(0)

	// const handleAddToCart = () => {
	// 	addToCart({
	// 		id: 123123123213,
	// 		image: productPreview1,
	// 		color: "Vermelho",
	// 		size: "G",
	// 		title: "Casaco",
	// 		price: 7999,
	// 		quantity: 1,
	// 		stock: 12,
	// 	})
	// }

	const getMercadoLivreURL = () => {
		const color = product.colors[selectedColorIndex]
		const size = product.sizes[selectedSizeIndex]

		const encodedColor = btoa(color)
		const encodedSize = btoa(size)

		const attributes = `COLOR_SECONDARY_COLOR:${encodedColor},SIZE:${encodedSize}`

		const url = new URL(product.mercadolivreUrl)

		url.searchParams.delete("attributes")
		url.searchParams.set("attributes", attributes)
		url.searchParams.set("quantity", "1")

		return url.toString()
	}

	const getMarketplaceLink = () => {
		const marketplaceLink =
			marketplaceSelected === "mercadolivre"
				? getMercadoLivreURL()
				: product.shopeeUrl

		return marketplaceLink
	}

	return (
		<>
			<ColorPicker
				colors={product.colors}
				selectedColorIndex={selectedColorIndex}
				onColorSelected={index => setSelectedColorIndex(index)}
			/>
			<SizePicker
				sizes={product.sizes}
				selectedSizeIndex={selectedSizeIndex}
				onSizeSelected={index => setSelectedSizeIndex(index)}
			/>
			<MarketplaceSelection
				marketplaceSelected={marketplaceSelected}
				isMercadoLivreBlocked={!product.mercadolivreUrl}
				isShopeeBlocked={!product.shopeeUrl}
				onMarketplaceSelected={marketplace =>
					setMarketplaceSelected(marketplace)
				}
			/>

			<div className="mt-10 flex gap-3.5">
				<button
					data-isfavorited={isFavorite(product.id)}
					className="group flex size-14 cursor-pointer items-center justify-center rounded-full border-2 data-[isfavorited=true]:bg-black lg:size-[73px]"
					onClick={() => toggleFavorite(product.id)}
				>
					<Heart className="size-8 group-data-[isfavorited=true]:fill-white group-data-[isfavorited=true]:text-white" />
				</button>
				{/* <button
					data-isincart={isInShoppingCart(123123123213)}
					className="group flex size-14 cursor-pointer items-center justify-center rounded-full border-2 data-[isincart=true]:bg-black lg:size-[73px]"
					onClick={handleAddToCart}
				>
					<ShoppingBag className="size-8 group-data-[isincart=true]:fill-white" />
				</button> */}
				<Link
					href={getMarketplaceLink()}
					target="_blank"
					className="flex flex-1 cursor-pointer items-center justify-center rounded-full bg-black py-3 text-xl font-semibold text-white lg:text-2xl"
				>
					COMPRAR
				</Link>
			</div>
		</>
	)
}
