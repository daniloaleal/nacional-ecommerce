"use client"

import { useKeenSlider } from "keen-slider/react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { ProductCard } from "@/components/product-card"
import { FormattedProduct } from "@/services/shopify"

interface PlusSizeSliderProps {
	products: FormattedProduct[]
}

export const PlusSizeSlider = ({ products }: PlusSizeSliderProps) => {
	const [sliderRef, instanceRef] = useKeenSlider({
		slides: {
			perView: 4,
			spacing: 26,
		},
		breakpoints: {
			"(max-width: 1024px)": {
				slides: {
					perView: 4,
					spacing: 15,
				},
			},
		},
	})

	if (products?.length === 0) {
		return <p className="text-center">Não há produtos Plus Size</p>
	}

	return (
		<div className="sm-plus:block relative hidden px-3">
			<div className="keen-slider mt-6" ref={sliderRef}>
				{products.map(product => (
					<ProductCard key={product.id} product={product} />
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
