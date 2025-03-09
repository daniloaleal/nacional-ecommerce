import { Heart } from "lucide-react"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

import { calculateDiscount, formatPrice } from "@/utils/number"

interface ProductCardProps extends ComponentProps<"a"> {
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

export const ProductCard = ({
	product,
	className,
	...props
}: ProductCardProps) => (
	<Link
		className={twMerge(
			"group block max-w-[194px] sm:max-w-[290px]",
			className
		)}
		href={`/product/${product.id}`}
		{...props}
	>
		<div className="relative">
			<Image
				className="w-full object-cover group-hover:brightness-95"
				src={product.image}
				alt="product image"
			/>

			{product.comparisonPrice && (
				<span className="absolute top-0 right-0 bg-red-600 px-2.5 text-xs font-bold text-white max-sm:py-0.5 sm:text-base">
					{calculateDiscount(product.price, product.comparisonPrice)}
				</span>
			)}

			<button className="absolute top-2.5 left-2.5 cursor-pointer rounded-full bg-black p-2.5 opacity-70">
				<Heart className="text-white" />
			</button>
		</div>
		<div className="mt-2.5">
			<h1 className="text-xs sm:text-base">{product.name}</h1>
			<div className="mt-1 flex items-center gap-5">
				{product.comparisonPrice && (
					<span className="text-xs text-gray-800 sm:text-base">
						<del>{formatPrice(product.comparisonPrice)}</del>
					</span>
				)}

				<h2 className="text-xs font-bold sm:text-xl">
					{formatPrice(product.price)}
				</h2>
			</div>
			<span className="text-xs text-gray-500 sm:text-base">
				ou {product.installment.payments}x de{" "}
				{formatPrice(product.installment.price)}*
			</span>
		</div>
	</Link>
)
