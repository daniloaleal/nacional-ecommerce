"use client"

import { useKeenSlider } from "keen-slider/react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import plusSizeBannerImg from "@/assets/plus-size-banner.png"
import productModelPhoto2Img from "@/assets/productModelPhoto2.png"
import { ProductCard } from "@/components/product-card"

export const PlusSize = () => {
	const [sliderRef, instanceRef] = useKeenSlider({
		slides: {
			perView: 4,
			spacing: 26,
		},
	})

	return (
		<section className="mx-auto mt-20 w-full max-w-[1289px] px-5">
			<div className="relative h-[426px] w-full">
				<Image
					className="h-full w-full"
					src={plusSizeBannerImg}
					alt="plus size banner"
				/>

				<div className="absolute top-24 left-10 text-white">
					<h1 className="text-[80px] font-black">PLUS SIZE</h1>
					<p className="text-3xl tracking-widest">
						Estilo que abraça
						<br />
						todas as curvas
					</p>
					<Link
						href="/catalog?category=plussize"
						className="mt-9 inline-block rounded-full border px-14 py-3 font-bold"
					>
						VER TUDO
					</Link>
				</div>
			</div>
			<div className="relative">
				<div className="keen-slider mt-6" ref={sliderRef}>
					<ProductCard
						className="keen-slider__slide"
						product={{
							id: "id_123123dev",
							image: productModelPhoto2Img,
							name: "Nome do produto",
							comparisonPrice: 10900,
							price: 7999,
							installment: {
								price: 799,
								payments: 10,
							},
							sizes: ["PP", "P", "M", "G", "GG"],
						}}
					/>
					<ProductCard
						className="keen-slider__slide"
						product={{
							id: "id_123123dev",
							image: productModelPhoto2Img,
							name: "Nome do produto",
							comparisonPrice: 10900,
							price: 7999,
							installment: {
								price: 799,
								payments: 10,
							},
							sizes: ["PP", "P", "M", "G", "GG"],
						}}
					/>
					<ProductCard
						className="keen-slider__slide"
						product={{
							id: "id_123123dev",
							image: productModelPhoto2Img,
							name: "Nome do produto",
							comparisonPrice: 10900,
							price: 7999,
							installment: {
								price: 799,
								payments: 10,
							},
							sizes: ["PP", "P", "M", "G", "GG"],
						}}
					/>
					<ProductCard
						className="keen-slider__slide"
						product={{
							id: "id_123123dev",
							image: productModelPhoto2Img,
							name: "Nome do produto",
							comparisonPrice: 10900,
							price: 7999,
							installment: {
								price: 799,
								payments: 10,
							},
							sizes: ["PP", "P", "M", "G", "GG"],
						}}
					/>
					<ProductCard
						className="keen-slider__slide"
						product={{
							id: "id_123123dev",
							image: productModelPhoto2Img,
							name: "Nome do produto",
							comparisonPrice: 10900,
							price: 7999,
							installment: {
								price: 799,
								payments: 10,
							},
							sizes: ["PP", "P", "M", "G", "GG"],
						}}
					/>
					<ProductCard
						className="keen-slider__slide"
						product={{
							id: "id_123123dev",
							image: productModelPhoto2Img,
							name: "Nome do produto",
							comparisonPrice: 10900,
							price: 7999,
							installment: {
								price: 799,
								payments: 10,
							},
							sizes: ["PP", "P", "M", "G", "GG"],
						}}
					/>
				</div>

				<button
					onClick={() => instanceRef.current?.prev()}
					className="absolute top-1/2 -left-15 -translate-y-1/2 cursor-pointer"
				>
					<ChevronLeft className="size-15 text-gray-500" />
				</button>

				<button
					onClick={() => instanceRef.current?.next()}
					className="absolute top-1/2 -right-15 -translate-y-1/2 cursor-pointer"
				>
					<ChevronRight className="size-15 text-gray-500" />
				</button>
			</div>
		</section>
	)
}
