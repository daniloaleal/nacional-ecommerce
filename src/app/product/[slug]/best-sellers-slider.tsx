"use client"

import { useKeenSlider } from "keen-slider/react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { ProductCard } from "@/components/product-card"
import { FormattedProduct } from "@/services/shopify"

interface BestSellersSliderProps {
	products: FormattedProduct[]
}

export const BestSellersSlider = ({ products }: BestSellersSliderProps) => {
	const [sliderRef, instanceRef] = useKeenSlider({
		slides: {
			perView: 4,
			spacing: 23,
		},
		breakpoints: {
			"(max-width: 868px)": {
				slides: {
					perView: 2,
					spacing: 10,
				},
			},
		},
	})

	return (
		<div className="relative">
			<div className="keen-slider" ref={sliderRef}>
				{products.map((product, index) => (
					<ProductCard
						key={index}
						className="keen-slider__slide"
						product={product}
					/>
				))}
			</div>

			<button
				onClick={() => instanceRef.current?.prev()}
				className="absolute top-1/2 -left-5 -translate-y-1/2 cursor-pointer"
			>
				<ChevronLeft className="size-10 text-gray-500" />
			</button>

			<button
				onClick={() => instanceRef.current?.next()}
				className="absolute top-1/2 -right-5 -translate-y-1/2 cursor-pointer"
			>
				<ChevronRight className="size-10 text-gray-500" />
			</button>
		</div>
	)
}
