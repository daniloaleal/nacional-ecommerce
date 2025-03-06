import Link from "next/link"
import { ReactNode } from "react"
import { ClassNameValue, twMerge } from "tailwind-merge"

interface NewsCardProps {
	title: string
	category?: string
	startingAt?: string
	className: ClassNameValue
}

interface NewsRowProps {
	children: ReactNode
}

const NewsCard = ({
	title,
	startingAt,
	category,
	className,
}: NewsCardProps) => (
	<div
		className={twMerge(
			"relative h-[312px] w-full min-w-[257px] bg-[#BDBDBD]",
			className
		)}
	>
		{/* IMAGE HERE */}

		<div className="absolute bottom-10 left-10 text-white">
			{category && (
				<span className="text-xl font-light tracking-widest uppercase">
					{category}
				</span>
			)}
			<h1 className="mb-5 text-3xl font-extrabold uppercase md:text-[52px]">
				{title}
			</h1>
			{startingAt && (
				<div className="mb-6">
					<span className="tracking-widest">A PARTIR DE</span>
					<h2 className="text-2xl font-bold">{startingAt}</h2>
				</div>
			)}
			<Link
				href="/"
				className="rounded-full border px-11 py-2 text-sm font-semibold uppercase md:text-base"
			>
				COMPRAR
			</Link>
		</div>
	</div>
)

const NewsRow = ({ children }: NewsRowProps) => (
	<div className="flex gap-2.5 md:gap-5">{children}</div>
)

export const News = () => (
	<div className="mx-auto mt-16 w-full max-w-[1289px] space-y-4 pl-5 md:px-5">
		<h1 className="text-2xl font-bold sm:text-5xl">
			Descubra as novidades
		</h1>

		<div className="flex gap-2.5 overflow-auto md:flex-col md:gap-4 md:overflow-hidden">
			<NewsRow>
				<NewsCard className="md:h-[550px] md:flex-1" title="BLUSAS" />
				<NewsCard
					className="md:h-[550px] md:max-w-[452px]"
					title="POLOS"
					startingAt="59,90"
				/>
			</NewsRow>
			<NewsRow>
				<NewsCard
					className="md:h-[440px] md:max-w-[366px]"
					category="FEMININO"
					title="SEMIJOIAS"
				/>
				<NewsCard
					className="md:h-[440px] md:flex-1"
					title="POLOS"
					startingAt="59,90"
				/>
			</NewsRow>
		</div>
	</div>
)
