import { ChevronRight, Zap } from "lucide-react"
import Link from "next/link"

import productModelPhotoImg from "@/assets/productModelPhoto.png"
import { Counter } from "@/components/counter"
import { ProductCard } from "@/components/product-card"

export const SupperOffers = () => {
	const products = [
		{
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
		},
		{
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
		},
		{
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
		},
		{
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
		},
	]

	return (
		<section className="mx-auto mt-11 w-full max-w-[1289px] space-y-4 px-5">
			<div className="flex items-center justify-between">
				<div className="flex items-center">
					<h1 className="text-2xl font-extrabold uppercase sm:text-4xl sm:font-bold">
						Super ofertas
					</h1>
					<Zap className="ml-1 size-4 sm:size-8" />
					<Counter timeUnitClassName="ml-2.5 max-sm:size-6 max-sm:text-sm" />
				</div>
				<Link
					className="hidden items-center text-2xl font-semibold text-gray-500 sm:flex"
					href="/catalog?category=promocoes"
				>
					Ver mais <ChevronRight />
				</Link>
			</div>
			<div className="mx-auto grid grid-cols-2 gap-6 max-lg:max-w-[600px] max-sm:max-w-[400px] lg:grid-cols-4">
				{products.map((product, index) => (
					<ProductCard key={index} product={product} />
				))}
			</div>
		</section>
	)
}
