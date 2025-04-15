"use client"

import axios from "axios"
import { ShoppingBag, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import useSWR from "swr"

import { useFavorites } from "@/hooks/useFavorites"
import type { FormattedProduct } from "@/services/shopify"
import { formatPrice } from "@/utils/number"

const fetcher = (url: string) => axios.get(url).then(res => res.data)

export const FavoritesList = () => {
	const { favoriteItemIds, removeFavorite } = useFavorites()

	const shouldFetch = favoriteItemIds.length > 0

	const { data }: { data: { products: FormattedProduct[] } } = useSWR(
		shouldFetch
			? `/api/products?${favoriteItemIds.map(id => `id=${id}`).join("&")}`
			: null,
		fetcher,
		{ suspense: true }
	)

	if (!shouldFetch || !data) {
		return (
			<p className="text-center font-medium text-[#ADADAD]">
				Não há produtos favoritados
			</p>
		)
	}

	const products = data.products

	return (
		<>
			{products.map((product, index) => (
				<div
					key={index}
					className="max-w-[172px] space-y-2 sm:max-w-[183px]"
				>
					<div className="group relative h-[206px] sm:h-[224px]">
						<Image
							className="h-full w-full"
							width={225}
							height={225}
							src={product.image}
							alt="product image"
						/>

						<button
							className="absolute right-5 bottom-3.5 left-5 hidden cursor-pointer rounded-full bg-[rgba(0,0,0,0.5)] py-1.5 font-semibold text-white opacity-0 group-hover:opacity-100 sm:block"
							onClick={() => {
								removeFavorite(product.id)
							}}
						>
							Excluir
						</button>

						<button
							className="absolute top-1 right-1 cursor-pointer rounded-full border-2 border-white p-1.5 sm:hidden"
							onClick={() => {
								removeFavorite(product.id)
							}}
							style={{
								backgroundColor: "rgba(62, 62, 62, 0.5)",
							}}
						>
							<X className="size-4 text-white" />
						</button>
					</div>
					<div className="flex items-center justify-between">
						<div>
							<h1 className="text-xs font-medium sm:text-base">
								{product.title}
							</h1>
							<h2 className="text-xs font-bold sm:text-base">
								{formatPrice(+product.price * 100)}
							</h2>
						</div>

						<Link
							href={product.url}
							className="flex items-center justify-center rounded-full border-2 p-2"
						>
							<ShoppingBag className="size-4 sm:size-5" />
						</Link>
					</div>
				</div>
			))}
		</>
	)
}
