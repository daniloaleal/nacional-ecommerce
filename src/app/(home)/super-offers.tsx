import { ChevronRight, Zap } from "lucide-react"
import Link from "next/link"

import productModelPhotoImg from "@/assets/productModelPhoto.png"
import { Counter } from "@/components/counter"
import { ProductCard } from "@/components/product-card"

export const SupperOffers = () => (
	<section className="mx-auto mt-11 w-full max-w-[1289px] space-y-4 px-5">
		<div className="flex items-center justify-between">
			<div className="flex items-center">
				<h1 className="text-2xl font-extrabold sm:text-5xl sm:font-bold">
					Super ofertas
				</h1>
				<Zap className="ml-1 size-4 sm:hidden" />
				<Counter timeUnitClassName="ml-2.5 max-sm:size-6 max-sm:text-sm" />
			</div>
			<Link
				className="hidden items-center text-2xl font-semibold text-gray-500 sm:flex"
				href="/catalog?category=promocoes"
			>
				Ver mais <ChevronRight />
			</Link>
		</div>
		<div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
			<ProductCard
				product={{
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
				}}
			/>

			<ProductCard
				product={{
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
				}}
			/>

			<ProductCard
				product={{
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
				}}
			/>

			<ProductCard
				product={{
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
				}}
			/>
		</div>
	</section>
)
