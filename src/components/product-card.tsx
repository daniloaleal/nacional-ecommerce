import { Heart, ShoppingBag } from "lucide-react"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"

import { calculateDiscount, formatPrice } from "@/utils/number"

interface ProductCardProps {
	product: {
		id: string
		image: StaticImageData
		name: string
		price: number
		comparisonPrice?: number
		installment: { price: number; payments: number }
		sizes: string[]
	}
}

export const ProductCard = ({ product }: ProductCardProps) => (
	<Link
		className="group block max-w-[194px] sm:max-w-[290px]"
		href={`/product/${product.id}`}
	>
		<div className="relative">
			<Image
				className="w-full object-cover group-hover:brightness-95"
				src={product.image}
				alt="product image"
			/>

			{product.comparisonPrice && (
				<span className="absolute top-0 right-0 bg-red-600 px-2.5 font-bold text-white">
					{calculateDiscount(product.price, product.comparisonPrice)}
				</span>
			)}

			<button className="absolute right-2.5 bottom-2.5 cursor-pointer rounded-full bg-black p-2.5 opacity-70 sm:hidden">
				<ShoppingBag className="text-white" />
			</button>

			<button className="absolute top-2.5 left-2.5 cursor-pointer rounded-full bg-black p-2.5 opacity-70">
				<Heart className="text-white" />
			</button>
		</div>
		<div className="mt-2.5">
			<h1 className="text-sm sm:text-2xl">{product.name}</h1>
			<div className="mt-1 flex items-center gap-5">
				{product.comparisonPrice && (
					<span className="text-xs text-gray-800 sm:text-base">
						<del>{formatPrice(product.comparisonPrice)}</del>
					</span>
				)}

				<h2 className="font-bold sm:text-2xl">
					{formatPrice(product.price)}
				</h2>
			</div>
			<span className="text-xs text-gray-500 sm:text-sm">
				ou {product.installment.payments}x de{" "}
				{formatPrice(product.installment.price)}*
			</span>
		</div>
	</Link>
)
