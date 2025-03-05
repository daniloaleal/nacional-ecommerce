import Image from "next/image"
import Link from "next/link"

import bannerImg from "@/assets/banner.png"

export const Banner = () => (
	<section className="relative h-[70vh] w-full text-white">
		<Image
			className="h-full w-full object-cover"
			src={bannerImg}
			alt="banner"
			unoptimized
			priority
		/>

		<div className="absolute inset-0 flex flex-col items-center justify-center sm:gap-9">
			<div className="space-y-9 text-center text-4xl lg:text-6xl">
				<h1>
					<span className="font-extrabold">PROMOÇÃO</span> NA PRIMEIRA
					COMPRA
				</h1>
				<h2 className="font-extrabold">
					<span className="text-yellow-400">*</span> 50% OFF
				</h2>
			</div>

			<div className="absolute bottom-0 w-full space-y-1 text-center sm:static">
				<p className="text-sm font-bold sm:hidden">
					* APLICÁVEL À PRODUTOS SEM DESCONTO!
				</p>
				<div className="flex bg-yellow-200 font-bold text-black sm:mx-auto sm:max-w-[375px] sm:gap-6 sm:bg-transparent sm:text-white">
					<Link
						className="w-full border-r py-4 transition-colors hover:bg-white hover:text-black sm:rounded-full sm:border-2 sm:border-white sm:py-2.5"
						href="/catalog"
					>
						Nosso catálogo
					</Link>
					<a
						className="w-full border-l py-4 transition-colors hover:bg-white hover:text-black sm:rounded-full sm:border-2 sm:border-white sm:py-2.5"
						target="_blank"
						href="https://chat.whatsapp.com/Bq8YDO1GjD1Gt182HIl5G4"
					>
						Grupo de promoções
					</a>
				</div>
			</div>
		</div>
	</section>
)
