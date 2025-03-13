import { ArrowLeft } from "lucide-react"

import { Header } from "@/components/header"
import { ShoppingBagButton } from "@/components/shopping-bag-button"

import { Actions } from "./actions"
import { BestSellers } from "./best-sellers"
import { ColorPicker } from "./color-picker"
import { Description } from "./description"
import { Price } from "./price"
import { ProductPreview } from "./product-preview"
import { SizePicker } from "./size-picker"

export default function Product() {
	return (
		<>
			<Header alwaysBackgroundWhite className="max-lg:hidden" />

			<header className="flex items-center justify-between bg-white px-4 pt-11 pb-5 lg:hidden">
				<ArrowLeft className="size-8" />
				<h1 className="text-xl font-bold">Detalhes do produto</h1>
				<ShoppingBagButton />
			</header>

			<main className="mx-auto max-w-[1472px] lg:mt-48">
				<section className="xxl:flex-row flex flex-col gap-6 lg:gap-20">
					<ProductPreview />
					<div className="max-xxl:max-w-[700px] max-xxl:mx-auto w-full px-5">
						<h1 className="text-xl lg:text-3xl">Nome do produto</h1>

						<Price />
						<ColorPicker
							colors={[
								{
									name: "Vermelho",
									color: "red",
								},
								{
									name: "Rosa",
									color: "pink",
								},
								{
									name: "Preto",
									color: "black",
								},
								{
									name: "Branco",
									color: "white",
								},
							]}
						/>
						<SizePicker sizes={["PP", "P", "M", "G", "GG"]} />
						<Actions />
					</div>
				</section>
				<Description />
				<BestSellers />
			</main>
		</>
	)
}
