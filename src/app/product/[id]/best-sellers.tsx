"use client"

import { useKeenSlider } from "keen-slider/react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import productModelPhoto2Img from "@/assets/productModelPhoto2.png"
import { ProductCard } from "@/components/product-card"

export const BestSellers = () => {
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
		<section className="mt-16 space-y-10 px-5 lg:mt-36">
			<h1 className="text-xl font-semibold lg:text-4xl">
				Mais vendidos dessa categoria
			</h1>

			<div className="relative">
				<div className="keen-slider" ref={sliderRef}>
					{new Array(6)
						.fill({
							id: "123dev",
							image: productModelPhoto2Img,
							name: "Nome do produto",
							comparisonPrice: 10900,
							price: 7999,
							installment: {
								price: 799,
								payments: 10,
							},
							sizes: ["PP", "P", "M", "G", "GG"],
						})
						.map((product, index) => (
							<ProductCard
								key={index}
								className="keen-slider__slide"
								product={product}
							/>
						))}
				</div>

				<button
					onClick={() => instanceRef.current?.prev()}
					className="absolute top-1/2 -left-7 -translate-y-1/2 cursor-pointer"
				>
					<ChevronLeft className="size-10 text-gray-500" />
				</button>

				<button
					onClick={() => instanceRef.current?.next()}
					className="absolute top-1/2 -right-7 -translate-y-1/2 cursor-pointer"
				>
					<ChevronRight className="size-10 text-gray-500" />
				</button>
			</div>
		</section>
	)
}
