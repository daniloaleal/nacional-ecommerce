import Image from "next/image"
import Link from "next/link"
import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

import { FormattedProduct } from "@/services/shopify"
import { calculateDiscount, formatPrice } from "@/utils/number"

import { FavoriteProductButton } from "./favorites"

interface ProductCardProps extends ComponentProps<"a"> {
	product: FormattedProduct
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
		href={product.url}
		{...props}
	>
		<div className="relative">
			<Image
				className="w-full object-cover group-hover:brightness-95"
				src={product.image}
				width={290}
				height={391}
				quality={100}
				alt="product image"
			/>

			{product.compareAtPrice && (
				<span className="absolute top-0 right-0 bg-red-600 px-2.5 text-xs font-bold text-white max-sm:py-0.5 sm:text-base">
					{calculateDiscount(
						+product.price * 100,
						+product.compareAtPrice * 100
					)}
				</span>
			)}

			<FavoriteProductButton productId={product.id} />
		</div>
		<div className="mt-2.5">
			<h1 className="text-xs sm:text-base">{product.title}</h1>
			<div className="mt-1 flex items-center gap-5">
				{product.compareAtPrice && (
					<span className="text-xs text-gray-800 sm:text-base">
						<del>{formatPrice(+product.compareAtPrice * 100)}</del>
					</span>
				)}

				<h2 className="text-xs font-bold sm:text-xl">
					{formatPrice(+product.price * 100)}
				</h2>
			</div>
			{/* <span className="text-xs text-gray-500 sm:text-base">
				ou {product.installment.payments}x de{" "}
				{formatPrice(product.installment.price)}*
			</span> */}
		</div>
	</Link>
)
