import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

import { Header } from "@/components/header/header"
import { getProducts } from "@/services/shopify"

import { Actions } from "./actions/actions"
import { BestSellers } from "./best-sellers"
import { Description } from "./description"
import { Price } from "./price"
import { ProductPreview } from "./product-preview"

interface ProductProps {
	params?: Promise<{
		slug?: string
	}>
}

export default async function Product({ params }: ProductProps) {
	const { slug } = (await params) ?? {}

	const product = (
		await getProducts({
			filters: `first: 1, query: "handle:${slug}"`,
		})
	).products[0]

	if (!product) {
		notFound()
	}

	return (
		<>
			<Header alwaysBackgroundWhite className="max-lg:hidden" />

			<header className="relative flex items-center justify-center bg-white px-4 pt-11 pb-5 lg:hidden">
				<Link href="/" className="absolute left-2">
					<ArrowLeft className="size-8" />
				</Link>
				<h1 className="text-xl font-bold">Detalhes do produto</h1>
			</header>

			<main className="mx-auto max-w-[1472px] lg:mt-48">
				<section className="xxl:flex-row flex flex-col gap-6 lg:gap-20">
					<ProductPreview images={product.images} />
					<div className="max-xxl:max-w-[700px] max-xxl:mx-auto w-full px-5">
						<h1 className="text-xl lg:text-3xl">{product.title}</h1>

						<Price
							price={product.price}
							compareAtPrice={product.compareAtPrice}
						/>
						<Actions product={product} />
					</div>
				</section>
				<Description description={product.description} />
				<BestSellers />
			</main>
		</>
	)
}
