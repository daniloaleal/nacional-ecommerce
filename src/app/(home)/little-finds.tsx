"use client"

import Link from "next/link"
import { useState } from "react"

import productModelPhotoImg from "@/assets/productModelPhoto.png"
import productModelPhoto2Img from "@/assets/productModelPhoto2.png"
import productModelPhoto3Img from "@/assets/productModelPhoto3.png"
import { ProductCard } from "@/components/product-card"

export const LittleFinds = () => {
	const [categoryIndexSelected, setCategoryIndexSelected] = useState(0)

	const categories = [
		new Array(8).fill({
			id: "id_123123dev",
			image: productModelPhotoImg,
			name: "Nome do produto",
			comparisonPrice: 10900,
			price: 7999,
			installment: {
				price: 799,
				payments: 10,
			},
			sizes: ["PP", "P", "M", "G", "GG"],
		}),
		new Array(8).fill({
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
		}),
		new Array(8).fill({
			id: "id_123123dev",
			image: productModelPhoto3Img,
			name: "Nome do produto",
			comparisonPrice: 10900,
			price: 7999,
			installment: {
				price: 799,
				payments: 10,
			},
			sizes: ["PP", "P", "M", "G", "GG"],
		}),
	]

	return (
		<section className="mx-auto mt-20 w-full max-w-[1289px] pl-5 lg:px-5">
			<h1 className="text-2xl font-bold lg:text-4xl">
				Achadinhos da Nacional
			</h1>
			<div className="mt-5 flex gap-9 lg:gap-20">
				{categories.map((_, index) => (
					<button
						data-selected={categoryIndexSelected === index}
						className="cursor-pointer text-sm font-semibold data-[selected=true]:border-b-4 lg:text-xl"
						onClick={() => setCategoryIndexSelected(index)}
						key={index}
					>{`CATEG. ${index + 1}`}</button>
				))}
			</div>
			<div className="mt-7 flex grid-cols-4 gap-2.5 max-lg:overflow-x-auto lg:grid lg:gap-6">
				{categories[categoryIndexSelected].map((product, index) => (
					<ProductCard key={index} product={product} />
				))}
				<div className="flex min-w-[200px] items-center justify-center lg:hidden">
					<Link
						href="/catalog?category=achadinhos"
						className="rounded-full bg-black px-10 py-2.5 text-white"
					>
						VER MAIS
					</Link>
				</div>
			</div>
		</section>
	)
}
