import { ArrowLeft, SlidersHorizontal } from "lucide-react"

import productModelPhoto2Img from "@/assets/productModelPhoto2.png"
import { Header } from "@/components/header"
import { Localization } from "@/components/localization"
import { ProductCard } from "@/components/product-card"
import { SearchInputField, SearchInputRoot } from "@/components/search-input"

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
			<Header alwaysBackgroundWhite className="max-sm:hidden" />

			<header className="mt-9 flex items-center gap-5 px-4 text-[#4A4A4A] sm:hidden">
				<ArrowLeft className="size-8" />
				<SearchInputRoot className="flex-1 rounded-full border-2 border-[#4A4A4A] px-4 py-2">
					<SearchInputField placeholder='Resultados para "blusa"' />
				</SearchInputRoot>
			</header>

			<main className="mx-auto max-w-[1476px] px-4 sm:mt-40 sm:px-10">
				<div className="max-sm:hidden">
					<Localization
						paths={[
							{
								name: "Catálogo",
								link: "/catalog",
							},
						]}
					/>
					<div className="flex items-center justify-between gap-5">
						<h1 className="mt-8 text-2xl font-medium md:text-4xl lg:text-[40px]">
							Mostrando <strong>30</strong> resultados para{" "}
							<strong>{'"Casacos femininos"'}</strong>
						</h1>
						<button className="flex cursor-pointer items-center gap-2.5 rounded-full border-3 px-11 py-3 text-xl md:text-2xl">
							<SlidersHorizontal />
							Filtrar
						</button>
					</div>
				</div>

				<div className="mt-4 flex justify-between text-xs sm:hidden">
					<h1 className="font-semibold">30 resultados</h1>
					<button className="flex cursor-pointer items-center gap-1.5 font-medium">
						<SlidersHorizontal className="size-4" />
						FILTRAR
					</button>
				</div>

				<div className="mt-3 grid grid-cols-2 gap-6 sm:mt-20 md:grid-cols-3 lg:mt-30 lg:grid-cols-4">
					{products.map((product, index) => (
						<ProductCard key={index} product={product} />
					))}
				</div>
			</main>
		</>
	)
}
