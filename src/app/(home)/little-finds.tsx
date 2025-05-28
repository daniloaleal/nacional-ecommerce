"use client"

import axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react"

import { ProductCard } from "@/components/product-card"
import { FormattedProduct } from "@/services/shopify"

export const LittleFinds = () => {
	const [categoryIndexSelected, setCategoryIndexSelected] = useState(0)
	const [categories, setCategories] = useState<
		{ title: string; products: FormattedProduct[] }[]
	>([])

	useEffect(() => {
		Promise.all([
			axios.get("/api/products?collectionId=497058644288&filter=first:8"),
			axios.get("/api/products?collectionId=497058677056&filter=first:8"),
			axios.get("/api/products?collectionId=496846995776&filter=first:8"),
		]).then(products => {
			const dresses = {
				title: "VESTIDOS",
				products: products[0].data.products,
			}

			const blouses = {
				title: "BLUSAS",
				products: products[1].data.products,
			}

			const shoes = {
				title: "CALÇADOS",
				products: products[2].data.products,
			}

			setCategories([dresses, blouses, shoes])
		})
	}, [])

	return (
		<section className="sm-plus:px-5 mx-auto mt-20 w-full max-w-[1289px] pl-5">
			<h1 className="sm-plus:text-4xl text-2xl font-bold">
				Achadinhos da Nacional
			</h1>
			<div className="sm-plus:gap-20 mt-5 flex gap-9">
				{categories.map((category, index) => (
					<button
						data-selected={categoryIndexSelected === index}
						className="sm-plus:text-xl cursor-pointer text-sm font-semibold data-[selected=true]:border-b-4"
						onClick={() => setCategoryIndexSelected(index)}
						key={index}
					>
						{category.title}
					</button>
				))}
			</div>
			<div className="max-sm-plus:overflow-x-auto sm-plus:grid sm-plus:gap-6 mt-7 flex grid-cols-4 gap-2.5">
				{categories[categoryIndexSelected] ? (
					categories[categoryIndexSelected].products.map(
						(product, index) => (
							<ProductCard key={index} product={product} />
						)
					)
				) : (
					<p className="text-center">Não há achadinhos</p>
				)}
				<div className="sm-plus:hidden flex min-w-[200px] items-center justify-center">
					<Link
						href="/catalog?category=496502931776"
						className="rounded-full bg-black px-10 py-2.5 text-white"
					>
						VER MAIS
					</Link>
				</div>
			</div>
		</section>
	)
}
