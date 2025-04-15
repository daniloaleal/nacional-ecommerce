"use client"

import { useKeenSlider } from "keen-slider/react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import plusSizeBannerImg from "@/assets/plus-size-banner.png"
// import { ProductCard } from "@/components/product-card"

export const PlusSize = () => {
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

	return (
		<section className="mx-auto mt-20 w-full max-w-[1289px] px-5">
			<div className="sm-plus:h-[426px] relative h-[206px] w-full">
				<Image
					className="h-full w-full object-cover"
					src={plusSizeBannerImg}
					alt="plus size banner"
				/>

				<div className="sm-plus:top-24 sm-plus:left-10 absolute top-12 left-5 text-white">
					<h1 className="sm-plus:text-[80px] text-3xl font-black">
						PLUS SIZE
					</h1>
					<p className="sm-plus:text-3xl text-sm tracking-widest">
						Estilo que abraça
						<br />
						todas as curvas
					</p>
					<Link
						href="/catalog?category=plussize"
						className="sm-plus:text-base sm-plus:mt-9 sm-plus:px-14 sm-plus:bg-transparent sm-plus:text-white sm-plus:border mt-4 inline-block rounded-full bg-white px-5 py-3 text-sm font-bold text-black"
					>
						VER CATÁLOGO
					</Link>
				</div>
			</div>
			<div className="sm-plus:block relative hidden px-3">
				<div className="keen-slider mt-6" ref={sliderRef}>
					{/* products */}
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
		</section>
	)
}
