// "use client"

// import axios from "axios"
// import { Heart, ShoppingBag, X } from "lucide-react"
// import Image from "next/image"
// import Link from "next/link"
// import { useEffect, useState } from "react"
// import useSWR from "swr"

// import { useFavorites } from "@/hooks/useFavorites"
// import type { FormattedProduct } from "@/services/shopify"
// import { formatPrice } from "@/utils/number"

// import { SideBar } from "../side-bar"

// interface FavoritesSideBarProps {
// 	isOpen: boolean
// 	onRequestClose: () => unknown
// }

// const fetcher = (url: string) => axios.get(url).then(res => res.data)

// const FavoritesSideBar = ({
// 	onRequestClose,
// 	isOpen,
// }: FavoritesSideBarProps) => {
// 	const { favoriteItemIds, removeFavorite } = useFavorites()
// 	const { data: products }: { data: FormattedProduct[] } = useSWR(
// 		"/api/products",
// 		fetcher,
// 		{ suspense: true }
// 	)

// 	return (
// 		<SideBar
// 			className="flex flex-col"
// 			title="Favoritos"
// 			onRequestClose={onRequestClose}
// 			isOpen={isOpen}
// 		>
// 			<div
// 				data-hasitems={favoriteItemIds.length > 0}
// 				className="flex-1 grid-cols-2 gap-4 overflow-auto px-9 pb-20 data-[data-hasitems=true]:grid sm:gap-8"
// 			>
// 				{favoriteItemIds.length > 0 ? (
// 					products.map((product, index) => (
// 						<div
// 							key={index}
// 							className="max-w-[172px] space-y-2 sm:max-w-[183px]"
// 						>
// 							<div className="group relative h-[206px] sm:h-[224px]">
// 								<Image
// 									className="h-full w-full"
// 									src={product.image}
// 									alt="product image"
// 								/>

// 								<button
// 									className="absolute right-5 bottom-3.5 left-5 hidden cursor-pointer rounded-full bg-[rgba(0,0,0,0.5)] py-1.5 font-semibold text-white opacity-0 group-hover:opacity-100 sm:block"
// 									onClick={() => {
// 										removeFavorite(product.id)
// 									}}
// 								>
// 									Excluir
// 								</button>

// 								<button
// 									className="absolute top-1 right-1 cursor-pointer rounded-full border-2 border-white p-1.5 sm:hidden"
// 									onClick={() => {
// 										removeFavorite(product.id)
// 									}}
// 									style={{
// 										backgroundColor:
// 											"rgba(62, 62, 62, 0.5)",
// 									}}
// 								>
// 									<X className="size-4 text-white" />
// 								</button>
// 							</div>
// 							<div className="flex items-center justify-between">
// 								<div>
// 									<h1 className="text-xs font-medium sm:text-base">
// 										{product.title}
// 									</h1>
// 									<h2 className="text-xs font-bold sm:text-base">
// 										{formatPrice(+product.price * 100)}
// 									</h2>
// 								</div>

// 								<Link
// 									href={product.url}
// 									className="flex items-center justify-center rounded-full border-2 p-2"
// 								>
// 									<ShoppingBag className="size-4 sm:size-5" />
// 								</Link>
// 							</div>
// 						</div>
// 					))
// 				) : (
// 					<p className="text-center font-medium text-[#ADADAD]">
// 						Não há produtos favoritados
// 					</p>
// 				)}
// 			</div>
// 		</SideBar>
// 	)
// }

// export const FavoritesButton = () => {
// 	const [isFavoritesOpen, setIsFavoritesOpen] = useState(false)
// 	return (
// 		<>
// 			<Heart
// 				onClick={() => setIsFavoritesOpen(true)}
// 				className="hidden cursor-pointer lg:block"
// 			/>

// 			<FavoritesSideBar
// 				isOpen={isFavoritesOpen}
// 				onRequestClose={() => setIsFavoritesOpen(false)}
// 			/>
// 		</>
// 	)
// }

// interface FavoriteProductButtonProps {
// 	productId: string
// }

// export const FavoriteProductButton = ({
// 	productId,
// }: FavoriteProductButtonProps) => {
// 	const { isFavorite, toggleFavorite } = useFavorites()

// 	return (
// 		<button
// 			data-isfavorited={isFavorite(productId)}
// 			className="group absolute top-2.5 left-2.5 cursor-pointer rounded-full bg-black p-2.5 opacity-70"
// 			onClick={e => {
// 				e.stopPropagation()
// 				e.preventDefault()

// 				toggleFavorite(productId)
// 			}}
// 		>
// 			<Heart className="text-white group-data-[isfavorited=true]:fill-white" />
// 		</button>
// 	)
// }
