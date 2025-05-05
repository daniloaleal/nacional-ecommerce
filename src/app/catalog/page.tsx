import { ProductCard } from "@/components/product-card"
import {
	FormattedProduct,
	getProducts,
	getProductsFromCollections,
} from "@/services/shopify"

import { CatalogHeader } from "./catalog-header"
import { TopSection } from "./top-section"

interface SearchParams {
	search?: string
	sizes?: string
	minPrice?: string
	maxPrice?: string
	category?: string
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
	const categories = (await searchParams)?.category || ""

	const filters = [
		search ? `title:*${search}*` : "",
		sizes ? `option:${sizes}` : "",
		minPrice ? `price:>=${minPrice}` : "",
		maxPrice ? `price:<=${maxPrice}` : "",
	]
		.filter(Boolean)
		.join(" AND ")

	let products: FormattedProduct[]

	try {
		if (categories) {
			const categoryList = categories.split(",")
			const productsFromCollection = await getProductsFromCollections(
				categoryList,
				`first: 10`
			)

			const minP = minPrice ? parseFloat(minPrice) : undefined
			const maxP = maxPrice ? parseFloat(maxPrice) : undefined

			const matchText = (value: string, term: string) =>
				value.toLowerCase().includes(term.toLowerCase())

			products = productsFromCollection.filter(product => {
				// search em título OU descrição
				if (search) {
					const inTitle = matchText(product.title, search)
					const inDesc = matchText(product.description, search)
					if (!inTitle && !inDesc) return false
				}

				// sizes
				if (sizes && !product.sizes.includes(sizes)) {
					return false
				}

				// price range
				const priceNum = parseFloat(product.price)
				if (minP !== undefined && priceNum < minP) return false
				if (maxP !== undefined && priceNum > maxP) return false

				return true
			})
		} else {
			products = await getProducts({
				filters: `first: 10, query: "${filters}"`,
			})
		}
	} catch (e) {
		console.log("Produto não encontrado", e)
		products = []
	}

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
