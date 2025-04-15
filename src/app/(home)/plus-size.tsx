import Image from "next/image"
import Link from "next/link"

import plusSizeBannerImg from "@/assets/plus-size-banner.png"
import { getProductsFromCollection } from "@/services/shopify"

import { PlusSizeSlider } from "./plus-size-slider"

export const PlusSize = async () => {
	const products = await getProductsFromCollection(
		"496502964544",
		"first: 10"
	)

	return (
		<section className="mx-auto mt-20 w-full max-w-[1289px] px-5">
			<div className="sm-plus:h-[426px] relative h-[206px] w-full">
				<Image
					className="h-full w-full object-cover"
					src={plusSizeBannerImg}
					alt="plus size banner"
				/>

				<div className="sm-plus:top-24 sm-plus:left-10 absolute top-12 left-5 text-white">
					<h1 className="sm-plus:text-[80px] text-3xl font-black">
						PLUS SIZE
					</h1>
					<p className="sm-plus:text-3xl text-sm tracking-widest">
						Estilo que abraça
						<br />
						todas as curvas
					</p>
					<Link
						href="/catalog?category=plussize"
						className="sm-plus:text-base sm-plus:mt-9 sm-plus:px-14 sm-plus:bg-transparent sm-plus:text-white sm-plus:border mt-4 inline-block rounded-full bg-white px-5 py-3 text-sm font-bold text-black"
					>
						VER CATÁLOGO
					</Link>
				</div>
			</div>
			<PlusSizeSlider products={products} />
		</section>
	)
}
