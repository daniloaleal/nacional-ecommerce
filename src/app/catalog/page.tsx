import { ProductCard } from "@/components/product-card"
import { getProducts } from "@/services/shopify"

import { CatalogHeader } from "./catalog-header"
import { TopSection } from "./top-section"

interface SearchParams {
	search?: string
	sizes?: string
	minPrice?: string
	maxPrice?: string
	categories?: string
}

interface CatalogProps {
	searchParams?: Promise<SearchParams>
}

export async function generateMetadata({
	searchParams,
}: {
	searchParams: SearchParams
}) {
	const title = `${(await searchParams).search || ""} | Nacional Online`

	return {
		title,
	}
}

export default async function Catalog({ searchParams }: CatalogProps) {
	const search = (await searchParams)?.search || ""
	const sizes = (await searchParams)?.sizes || ""
	const minPrice = (await searchParams)?.minPrice || ""
	const maxPrice = (await searchParams)?.maxPrice || ""
	const categories = (await searchParams)?.categories || ""

	const filters = [
		search ? `title:*${search}*` : "",
		sizes.length > 0 ? `option:${sizes}` : "",
		minPrice ? `price:>=${minPrice}` : "",
		maxPrice ? `price:<=${maxPrice}` : "",
		categories.length > 0 ? `collectionId:${categories}` : "",
	]
		.filter(Boolean)
		.join(" AND ")

	const products = await getProducts({
		filters: `first: 10, query: "${filters}"`,
	})

	return (
		<>
			<CatalogHeader search={search} />

			<main className="mx-auto max-w-[1476px] px-4 sm:mt-40 sm:px-10">
				<TopSection search={search} totalResults={products.length} />

				{products.length > 0 ? (
					<div className="mt-3 grid grid-cols-2 gap-6 sm:mt-20 md:grid-cols-3 lg:grid-cols-4">
						{products.map((product, index) => (
							<ProductCard key={index} product={product} />
						))}
					</div>
				) : (
					<h1 className="mt-20 text-center font-medium text-[#ADADAD]">
						Não há produtos com está pesquisa ou filtro
					</h1>
				)}
			</main>
		</>
	)
}
