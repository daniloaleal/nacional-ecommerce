import { ProductCard } from "@/components/product-card"
import {
	FormattedProduct,
	getProducts,
	getProductsFromCollections,
} from "@/services/shopify"

import { CatalogHeader } from "./catalog-header"
import { TopSection } from "./top-section"

// export async function generateMetadata({
// 	searchParams,
// }: {
// 	searchParams?: { [key: string]: string | string[] | undefined }
// }) {
// 	const search = searchParams?.search as string
// 	return {
// 		title: `${search || ""} | Nacional Online`,
// 	}
// }

export default async function Catalog({
	searchParams,
}: {
	searchParams?: Promise<{
		search?: string
		sizes?: string
		minPrice?: string
		maxPrice?: string
		category?: string
	}>
}) {
	const {
		search,
		sizes,
		minPrice,
		maxPrice,
		category: categories,
	} = (await searchParams) ?? {}

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
			const productsFromCollection = (
				await getProductsFromCollections(categoryList, `first: 100`)
			).products

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
			products = (
				await getProducts({
					filters: `first: 100, query: "${filters}"`,
				})
			).products

			// console.log((
			// 	await getProducts({
			// 		filters: `first: 1, query: "${filters}"`,
			// 	})
			// ).pageInfo)
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

// "use client"

// import { useSearchParams } from "next/navigation"
// import { useEffect, useState } from "react"

// import { ProductCard } from "@/components/product-card"
// import {
// 	FormattedProduct,
// 	getProducts,
// 	getProductsFromCollections,
// } from "@/services/shopify"

// import { CatalogHeader } from "./catalog-header"
// import { TopSection } from "./top-section"

// export default function Catalog() {
// 	const searchParams = useSearchParams()

// 	const search = searchParams.get("search") || ""
// 	const sizes = searchParams.get("sizes") || ""
// 	const minPrice = searchParams.get("minPrice") || ""
// 	const maxPrice = searchParams.get("maxPrice") || ""
// 	const categories = searchParams.get("category") || ""

// 	const [products, setProducts] = useState<FormattedProduct[]>([])
// 	const [endCursor, setEndCursor] = useState<string | null>(null)
// 	const [hasNextPage, setHasNextPage] = useState<boolean>(true)
// 	const [isLoading, setIsLoading] = useState(false)

// 	const filters = [
// 		search ? `title:*${search}*` : "",
// 		sizes ? `option:${sizes}` : "",
// 		minPrice ? `price:>=${minPrice}` : "",
// 		maxPrice ? `price:<=${maxPrice}` : "",
// 	]
// 		.filter(Boolean)
// 		.join(" AND ")

// 	useEffect(() => {
// 		loadProducts()
// 		// eslint-disable-next-line react-hooks/exhaustive-deps
// 	}, [])

// 	const loadProducts = async (afterCursor?: string) => {
// 		setIsLoading(true)
// 		try {
// 			let response

// 			if (categories) {
// 				const categoryList = categories.split(",")
// 				response = await getProductsFromCollections(
// 					categoryList,
// 					`first: 8${afterCursor ? `, after: "${afterCursor}"` : ""}`
// 				)
// 			} else {
// 				response = await getProducts({
// 					filters: `first: 8, query: "${filters}"${
// 						afterCursor ? `, after: "${afterCursor}"` : ""
// 					}`,
// 				})
// 			}

// 			console.log(response)

// 			const newProducts = response.products ?? []
// 			setProducts(prev => [...prev, ...newProducts])

// 			const pageInfo = response.pageInfo
// 			setEndCursor(pageInfo?.endCursor || null)
// 			setHasNextPage(pageInfo?.hasNextPage || false)
// 		} catch (e) {
// 			console.log("Erro ao carregar produtos", e)
// 		}
// 		setIsLoading(false)
// 	}

// 	return (
// 		<>
// 			<CatalogHeader search={search} />

// 			<main className="mx-auto max-w-[1476px] px-4 sm:mt-40 sm:px-10">
// 				<TopSection search={search} totalResults={products.length} />

// 				{products.length > 0 ? (
// 					<>
// 						<div className="mt-3 grid grid-cols-2 gap-6 sm:mt-20 md:grid-cols-3 lg:grid-cols-4">
// 							{products.map((product, index) => (
// 								<ProductCard key={index} product={product} />
// 							))}
// 						</div>

// 						<div className="mt-10 flex justify-center">
// 							<button
// 								className={`rounded bg-black px-6 py-2 text-white disabled:cursor-not-allowed disabled:opacity-50`}
// 								onClick={() =>
// 									loadProducts(endCursor || undefined)
// 								}
// 								disabled={!hasNextPage || isLoading}
// 							>
// 								{isLoading
// 									? "Carregando..."
// 									: hasNextPage
// 										? "Carregar mais produtos"
// 										: "Nenhum produto a mais"}
// 							</button>
// 						</div>
// 					</>
// 				) : (
// 					<h1 className="mt-20 text-center font-medium text-[#ADADAD]">
// 						Não há produtos com esta pesquisa ou filtro
// 					</h1>
// 				)}
// 			</main>
// 		</>
// 	)
// }
