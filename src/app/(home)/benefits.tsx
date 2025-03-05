"use client"

import { useKeenSlider } from "keen-slider/react"
import {
	ChevronLeft,
	ChevronRight,
	CreditCard,
	ShoppingCart,
	Store,
} from "lucide-react"

export const Benefits = () => {
	const [sliderRef, instanceRef] = useKeenSlider({
		slides: {
			perView: 1,
		},
		breakpoints: {
			"(min-width: 768px)": {
				disabled: true,
			},
		},
	})

	return (
		<section className="relative mt-5">
			<div
				ref={sliderRef}
				className="keen-slider text-center md:flex md:items-center md:justify-center"
			>
				<div className="keen-slider__slide flex items-center justify-center gap-2.5 border-gray-500 text-xs underline md:border-r md:px-2 lg:px-10">
					<CreditCard className="size-4" />
					<span>PARCELAMENTO EM ATÉ 7X SEM JUROS</span>
				</div>
				<div className="keen-slider__slide flex items-center justify-center gap-2.5 border-gray-500 text-xs underline md:border-r md:border-l md:px-2 lg:px-10">
					<ShoppingCart className="size-4" />
					<span>FRETE GRÁTIS* ACIMA DE R$ 299,00</span>
				</div>
				<div className="keen-slider__slide flex items-center justify-center gap-2.5 border-gray-500 text-xs underline md:border-l md:px-2 lg:px-10">
					<Store className="size-4" />
					<span>RETIRADA NA LOJA EM ATÉ 5 DIAS ÚTEIS</span>
				</div>
			</div>

			<button
				onClick={() => instanceRef.current?.prev()}
				className="absolute top-0 left-1 cursor-pointer md:hidden"
			>
				<ChevronLeft className="size-4 text-gray-500" />
			</button>

			<button
				onClick={() => instanceRef.current?.next()}
				className="absolute top-0 right-1 cursor-pointer md:hidden"
			>
				<ChevronRight className="size-4 text-gray-500" />
			</button>
		</section>
	)
}
