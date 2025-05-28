import { ChevronRight, Zap } from "lucide-react"
import Link from "next/link"

import { Counter } from "@/components/counter"
import { ProductCard } from "@/components/product-card"
import { getProductsFromCollections } from "@/services/shopify"

export const SupperOffers = async () => {
	const products = (
		await getProductsFromCollections(["496502866240"], "first: 4")
	).products

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
					href="/catalog?category=496502866240"
				>
					Ver mais <ChevronRight />
				</Link>
			</div>
			<div className="mx-auto grid grid-cols-2 gap-6 max-lg:max-w-[600px] max-sm:max-w-[400px] lg:grid-cols-4">
				{products.length > 0 ? (
					products.map((product, index) => (
						<ProductCard key={index} product={product} />
					))
				) : (
					<p>Não há produtos em oferta.</p>
				)}
			</div>
		</section>
	)
}
