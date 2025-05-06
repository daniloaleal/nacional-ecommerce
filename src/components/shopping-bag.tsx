"use client"

import { ShoppingBag, X } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

import { useShoppingCart } from "@/hooks/useShoppingCart"
import { formatPrice } from "@/utils/number"

import { SideBar } from "./side-bar"

interface ShoppingBagSideBarProps {
	isOpen: boolean
	onRequestClose: () => unknown
}

const ShoppingBagSideBar = ({
	onRequestClose,
	isOpen,
}: ShoppingBagSideBarProps) => {
	const {
		cart,
		removeFromCart,
		increaseQuantity,
		decreaseQuantity,
		getTotalItemsPrice,
	} = useShoppingCart()

	return (
		<SideBar
			className="flex flex-col text-black"
			title="Minha sacola"
			onRequestClose={onRequestClose}
			isOpen={isOpen}
		>
			<div className="flex-1 overflow-auto px-9">
				{cart.length > 0 ? (
					cart.map((item, index) => (
						<div
							key={index}
							className="relative mb-5 flex gap-4 border-b border-[#ADADAD] pb-5"
						>
							<button
								className="absolute top-0 right-0 cursor-pointer"
								onClick={() => removeFromCart(item.id)}
							>
								<X className="text-[#ADADAD]" />
							</button>

							<Image
								className="h-[134px] w-[113px]"
								src={item.image}
								alt="item image"
							/>
							<div className="flex-1">
								<h1 className="text-xs font-medium sm:text-sm">
									{item.title}
								</h1>
								<div className="mt-2.5 text-xs text-[#ADADAD]">
									<p>Cor: {item.color}</p>
									<p>Tamanho: {item.size}</p>
								</div>
								<div className="mt-1.5 flex items-center justify-between">
									<p className="font-bold">
										{formatPrice(item.price)}
									</p>

									<div className="space-x-1 rounded-sm border-2 p-1.5 font-black">
										<button
											data-limit={item.quantity <= 1}
											className="cursor-pointer data-[limit=true]:cursor-not-allowed data-[limit=true]:opacity-50"
											onClick={() =>
												decreaseQuantity(item.id)
											}
										>
											-
										</button>
										<span>{item.quantity}</span>
										<button
											data-limit={
												item.quantity >= item.stock
											}
											className="cursor-pointer data-[limit=true]:cursor-not-allowed data-[limit=true]:opacity-50"
											onClick={() =>
												increaseQuantity(item.id)
											}
										>
											+
										</button>
									</div>
								</div>
							</div>
						</div>
					))
				) : (
					<p className="text-center font-medium text-[#ADADAD]">
						Adicione produtos no carrinho
					</p>
				)}
			</div>
			<div className="min-h-[273px] bg-white px-10 py-10 shadow-2xl">
				<div>
					<h3
						className="cursor-pointer border-b border-[#ADADAD] pb-3 text-sm font-semibold text-[#0084FF]"
						onClick={() =>
							alert("Ainda estamos trabalhando nisso!")
						}
					>
						Aplicar cupom de desconto
					</h3>
					<div className="mt-3 flex justify-between text-xl">
						<h2 className="font-medium">Subtotal</h2>
						<h1 className="font-bold">
							{formatPrice(getTotalItemsPrice())}
						</h1>
					</div>
				</div>
				<p className="mt-7 mb-3.5 font-medium text-[#ADADAD] sm:max-w-[340px] sm:text-xs">
					Você poderá calcular o frete e visualizar mais benefícios ao
					Finalizar a compra.
				</p>
				<button className="block w-full cursor-pointer rounded-full bg-black py-3.5 text-lg font-bold text-white sm:text-xl">
					FINALIZAR COMPRA
				</button>
			</div>
		</SideBar>
	)
}

export const ShoppingBagButton = () => {
	const { getTotalItems } = useShoppingCart()
	const [isShoppingBagOpen, setIsShoppingBagOpen] = useState(false)

	return (
		<>
			<div
				className="relative cursor-pointer"
				onClick={() => setIsShoppingBagOpen(true)}
			>
				<ShoppingBag />
				<span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-[12px] !text-white">
					{getTotalItems()}
				</span>
			</div>

			<ShoppingBagSideBar
				onRequestClose={() => setIsShoppingBagOpen(false)}
				isOpen={isShoppingBagOpen}
			/>
		</>
	)
}
