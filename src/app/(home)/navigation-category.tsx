import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import { ReactNode } from "react"

import acessoriosImg from "@/assets/categories/acessorios.png"
import acessoriosBannerImg from "@/assets/categories/banners/acessorios.png"
import calcadosBannerImg from "@/assets/categories/banners/calcados.png"
import femininoBannerImg from "@/assets/categories/banners/feminina.png"
import infantilBannerImg from "@/assets/categories/banners/infantil.png"
import masculinoBannerImg from "@/assets/categories/banners/masculina.png"
import perfumesBannerImg from "@/assets/categories/banners/perfumes.png"
import plusSizeBannerImg from "@/assets/categories/banners/plusSize.png"
import semijoiasBannerImg from "@/assets/categories/banners/semiJoias.png"
import calcadosImg from "@/assets/categories/calcados.png"
import femininoImg from "@/assets/categories/feminino.png"
import infantilImg from "@/assets/categories/infantil.png"
import masculinoImg from "@/assets/categories/masculino.png"
import perfumesImg from "@/assets/categories/perfumes.png"
import plusSizeImg from "@/assets/categories/plusSize.png"
import semijoiasImg from "@/assets/categories/semiJoias.png"

interface CategoryProps {
	name: string
	icon: StaticImageData
	banner: StaticImageData
	link: string
}

interface CategoryRow {
	children: ReactNode
}

const Category = ({ name, icon, banner, link }: CategoryProps) => (
	<Link
		className="cursor-pointer hover:brightness-90 max-sm:h-36 max-sm:w-52 max-sm:flex-shrink-0"
		href={link}
	>
		{/* Banner (Mobile) */}
		<Image
			className="h-full w-full bg-gray-500 sm:hidden"
			src={banner}
			alt="category banner"
		/>
		{/* Icon (Desktop) */}
		<Image
			className="mx-auto hidden max-w-[90px] rounded-full object-cover sm:block"
			src={icon}
			alt="category icon"
		/>
		<span className="hidden sm:inline">{name}</span>
	</Link>
)

const CategoryRow = ({ children }: CategoryRow) => (
	<div className="flex gap-3 sm:gap-10 md:gap-20">{children}</div>
)

export const NavigationCategory = () => {
	return (
		<section className="mt-8 w-full space-y-2 pl-5 text-center sm:space-y-5 sm:pl-0">
			<h1 className="text-xl font-semibold max-sm:text-start sm:text-4xl">
				Navegue por categoria
			</h1>
			<div className="flex w-full gap-3 overflow-x-auto sm:flex-col sm:items-center sm:justify-center sm:gap-5 sm:overflow-hidden">
				<CategoryRow>
					<Category
						name="Feminino"
						icon={femininoImg}
						banner={femininoBannerImg}
						link="/catalog?category=498671419712"
					/>
					<Category
						name="Masculino"
						icon={masculinoImg}
						banner={masculinoBannerImg}
						link="/catalog?category=498671452480"
					/>
					<Category
						name="Infantil"
						icon={infantilImg}
						banner={infantilBannerImg}
						link="/catalog?category=498671485248"
					/>
					<Category
						name="Bebês"
						icon={infantilImg}
						banner={infantilBannerImg}
						link="/catalog?category=498671518016"
					/>
					<Category
						name="Plus Size"
						icon={plusSizeImg}
						banner={plusSizeBannerImg}
						link="/catalog?category=496502964544"
					/>
				</CategoryRow>
				<CategoryRow>
					<Category
						name="Calçados"
						icon={calcadosImg}
						banner={calcadosBannerImg}
						link="/catalog?category=496846995776"
					/>
					<Category
						name="Acessórios"
						icon={acessoriosImg}
						banner={acessoriosBannerImg}
						link="/catalog?category=496847061312"
					/>
					<Category
						name="Semijoias"
						icon={semijoiasImg}
						banner={semijoiasBannerImg}
						link="/catalog?category=496847028544"
					/>
					<Category
						name="Perfumes"
						icon={perfumesImg}
						banner={perfumesBannerImg}
						link="/catalog?category=496846897472"
					/>
				</CategoryRow>
			</div>
		</section>
	)
}
