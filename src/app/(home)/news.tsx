import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import { ReactNode } from "react"
import { ClassNameValue, twMerge } from "tailwind-merge"

import acessoriosBannerNewsImg from "@/assets/acessorios-banner-news.png"
import calcadosBannerNewsImg from "@/assets/calcados-banner-news.png"
import perfumesBannerNewsImg from "@/assets/perfumes-banner-news.png"
import semijoiasBannerNewsImg from "@/assets/semijoias-banner-news.png"

interface NewsCardProps {
	title: string
	category?: string
	startingAt?: string
	className: ClassNameValue
	banner: StaticImageData
	link: string
}

interface NewsRowProps {
	children: ReactNode
}

const NewsCard = ({
	title,
	startingAt,
	category,
	className,
	banner,
	link,
}: NewsCardProps) => (
	<div
		className={twMerge(
			"relative h-[312px] w-full min-w-[257px] bg-[#BDBDBD]",
			className
		)}
	>
		<Image
			className="h-full w-full object-cover"
			src={banner}
			alt="banner"
		/>

		<div className="absolute bottom-10 left-10 text-white">
			{category && (
				<span className="text-xl font-light tracking-widest uppercase">
					{category}
				</span>
			)}
			<h1 className="mb-5 text-3xl font-extrabold uppercase lg:text-[52px]">
				{title}
			</h1>
			{startingAt && (
				<div className="mb-6">
					<span className="tracking-widest">A PARTIR DE</span>
					<h2 className="text-2xl font-bold">{startingAt}</h2>
				</div>
			)}
			<Link
				href={link}
				className="rounded-full border-3 px-11 py-2 text-sm font-medium uppercase lg:text-base"
			>
				COMPRAR
			</Link>
		</div>
	</div>
)

const NewsRow = ({ children }: NewsRowProps) => (
	<div className="flex gap-2.5 lg:gap-5">{children}</div>
)

export const News = () => (
	<div className="mx-auto mt-16 w-full max-w-[1289px] space-y-4 pl-5 lg:px-5">
		<h1 className="text-2xl font-bold sm:text-4xl">
			Descubra as novidades
		</h1>

		<div className="flex gap-2.5 overflow-auto lg:flex-col lg:gap-4 lg:overflow-hidden">
			<NewsRow>
				<NewsCard
					className="lg:h-[550px] lg:flex-1"
					title="PERFUMES"
					banner={perfumesBannerNewsImg}
					link="/catalog?category=496846897472"
				/>
				<NewsCard
					className="lg:h-[550px] lg:max-w-[452px]"
					title="CALÇADOS"
					banner={calcadosBannerNewsImg}
					link="/catalog?category=496846995776"
				/>
			</NewsRow>
			<NewsRow>
				<NewsCard
					className="lg:h-[440px] lg:max-w-[366px]"
					category="FEMININO"
					title="SEMIJOIAS"
					banner={semijoiasBannerNewsImg}
					link="/catalog?category=496847028544"
				/>
				<NewsCard
					className="lg:h-[440px] lg:flex-1"
					title="ACESSÓRIOS"
					banner={acessoriosBannerNewsImg}
					link="/catalog?category=496847061312"
				/>
			</NewsRow>
		</div>

		<div className="flex justify-center">
			<Link
				href="/catalog?category=496502899008"
				className="rounded-full bg-black px-11 py-4 font-semibold text-white uppercase max-lg:hidden"
			>
				VER TUDO EM NOVIDADES
			</Link>
		</div>
	</div>
)
