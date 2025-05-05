import { getProductsFromCollections } from "@/services/shopify"

import { BestSellersSlider } from "./best-sellers-slider"

export const BestSellers = async () => {
	const products = await getProductsFromCollections(
		["496639967552"],
		"first: 10"
	)

	return (
		<section className="mt-16 space-y-10 px-5 lg:mt-36">
			<h1 className="text-xl font-semibold lg:text-4xl">
				Mais vendidos dessa categoria
			</h1>

			<div className="relative">
				{products.length > 0 ? (
					<BestSellersSlider products={products} />
				) : (
					<p className="text-center">
						Não há produtos mais vendidos.
					</p>
				)}
			</div>
		</section>
	)
}
