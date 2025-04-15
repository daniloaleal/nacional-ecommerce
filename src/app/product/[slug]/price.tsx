import { calculateDiscount, formatPrice } from "@/utils/number"

interface PriceProps {
	price: string
	compareAtPrice: string | null
}

export const Price = ({ price, compareAtPrice }: PriceProps) => (
	<div className="mt-6 lg:mt-9">
		<div className="flex items-center justify-between">
			<div className="flex items-end gap-3 lg:gap-9">
				{compareAtPrice && (
					<h2 className="text-xl font-medium text-[#9A9A9A] lg:text-2xl">
						<del>{formatPrice(+compareAtPrice * 100)}</del>
					</h2>
				)}
				<h1 className="text-2xl font-semibold lg:text-5xl">
					{formatPrice(+price * 100)}
				</h1>
			</div>
			{compareAtPrice && (
				<span className="bg-red-600 px-1.5 py-2 text-sm font-bold text-white lg:text-base">
					{calculateDiscount(+price * 100, +compareAtPrice * 100)}
				</span>
			)}
		</div>
		{/* <span className="text-xs text-[#4A4A4A] lg:text-xl">
			ou 10x de R$ 7,99 *
		</span> */}
	</div>
)
