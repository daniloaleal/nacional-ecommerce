"use client"

import { StaticImageData } from "next/image"
import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from "react"

interface CartItem {
	id: number
	title: string
	price: number
	quantity: number
	image: string | StaticImageData
	color: string
	size: string
	stock: number
}

interface ShoppingCartContextType {
	cart: CartItem[]
	addToCart: (item: CartItem) => void
	removeFromCart: (id: number) => void
	increaseQuantity: (id: number) => void
	decreaseQuantity: (id: number) => void
	getTotalItems: () => number
	getTotalItemsPrice: () => number
	isInShoppingCart: (id: number) => boolean
}

interface ShoppingCartProviderProps {
	children: ReactNode
}

const ShoppingCartContext = createContext<ShoppingCartContextType>(
	{} as ShoppingCartContextType
)

export const ShoppingCartProvider = ({
	children,
}: ShoppingCartProviderProps) => {
	const [cart, setCart] = useState<CartItem[]>(() => [])

	useEffect(() => {
		const cart = localStorage.getItem("cart")

		setCart(cart ? JSON.parse(cart) : [])
	}, [])

	useEffect(() => {
		localStorage.setItem("cart", JSON.stringify(cart))
	}, [cart])

	const addToCart = (item: CartItem) =>
		setCart(prevCart => {
			item.quantity = 1

			const isExistingItem = prevCart.find(
				cartItem => cartItem.id === item.id
			)

			if (isExistingItem) {
				return prevCart.map(cartItem =>
					cartItem.id === item.id
						? {
								...cartItem,
								quantity: cartItem.quantity + item.quantity,
							}
						: cartItem
				)
			}

			return [...prevCart, item]
		})

	const removeFromCart = (id: number) =>
		setCart(prevCart => prevCart.filter(item => item.id !== id))

	const increaseQuantity = (id: number) =>
		setCart(prevCart => {
			return prevCart.map(cartItem =>
				cartItem.id === id && cartItem.quantity < cartItem.stock
					? {
							...cartItem,
							quantity: cartItem.quantity + 1,
						}
					: cartItem
			)
		})

	const decreaseQuantity = (id: number) =>
		setCart(prevCart => {
			return prevCart.map(cartItem =>
				cartItem.id === id && cartItem.quantity > 1
					? { ...cartItem, quantity: cartItem.quantity - 1 }
					: cartItem
			)
		})

	const getTotalItems = () =>
		cart.reduce((acc, item) => item.quantity + acc, 0)

	const getTotalItemsPrice = () =>
		cart.reduce((acc, item) => item.price * item.quantity + acc, 0)

	const isInShoppingCart = (id: number) =>
		!!cart.find(cartItem => cartItem.id === id)

	return (
		<ShoppingCartContext.Provider
			value={{
				cart,
				addToCart,
				removeFromCart,
				increaseQuantity,
				decreaseQuantity,
				getTotalItems,
				getTotalItemsPrice,
				isInShoppingCart,
			}}
		>
			{children}
		</ShoppingCartContext.Provider>
	)
}

export const useShoppingCart = () => {
	const context = useContext(ShoppingCartContext)

	if (!context)
		throw new Error("useCart deve estar dentro de um ShoppingCartProvider")

	return context
}
