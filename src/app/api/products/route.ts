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
		return Response.json({
			products: await getProductsFromCollections([collectionId], filter),
		})
	}

	if (ids) {
		return Response.json({
			products: await getProductsByIds(ids),
		})
	}

	return Response.json({
		products: await getProducts({
			filters: filter,
		}),
	})
}
