import productModelPhoto2Img from "@/assets/productModelPhoto2.png"
import { ProductCard } from "@/components/product-card"

import { CatalogHeader } from "./catalog-header"
import { TopSection } from "./top-section"

export default function Catalog() {
	const products = new Array(40).fill({
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
	})

	return (
		<>
			<CatalogHeader />

			<main className="mx-auto max-w-[1476px] px-4 sm:mt-40 sm:px-10">
				<TopSection />

				<div className="mt-3 grid grid-cols-2 gap-6 sm:mt-20 md:grid-cols-3 lg:grid-cols-4">
					{products.map((product, index) => (
						<ProductCard key={index} product={product} />
					))}
				</div>
			</main>
		</>
	)
}
