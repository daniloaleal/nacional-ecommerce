import { ShoppingBag } from "lucide-react"

export const ShoppingBagButton = () => {
	return (
		<div className="relative cursor-pointer">
			<ShoppingBag />
			<span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-[12px] !text-white">
				8
			</span>
		</div>
	)
}
