import { NextRequest } from "next/server"

import {
	getProducts,
	getProductsByIds,
	getProductsFromCollections,
} from "@/services/shopify"

export async function GET(req: NextRequest) {
	const searchParams = req.nextUrl.searchParams

	const collectionId = searchParams.get("collectionId")
	const ids = searchParams.getAll("id")
	const filter = searchParams.get("filter") || ""

	if (collectionId) {
		const products = (
			await getProductsFromCollections([collectionId], filter)
		).products

		return Response.json({
			products: products.products,
			pageInfo: products.pageInfos,
		})
	}

	if (ids) {
		return Response.json({
			products: await getProductsByIds(ids),
		})
	}

	const products = await getProducts({
		filters: filter,
	})

	return Response.json({
		products: products.products,
		pageInfo: products.pageInfo,
	})
}
