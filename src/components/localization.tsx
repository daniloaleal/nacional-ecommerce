import { ChevronRight, House } from "lucide-react"
import Link from "next/link"

interface LocalizationProps {
	paths: {
		name: string
		link: string
	}[]
}

export const Localization = ({ paths }: LocalizationProps) => (
	<div className="flex items-center text-xl">
		<Link
			className="flex items-center gap-1.5 font-medium text-[#B3B3B3]"
			href="/"
		>
			<House className="size-7" />
			<span>Início</span>
		</Link>
		{paths.map((path, index) => (
			<Link
				key={index}
				className="ml-5 flex items-center gap-5 text-[#B3B3B3]"
				href={path.link}
			>
				<ChevronRight className="size-7" />
				<span className="text-gray-700">{path.name}</span>
			</Link>
		))}
	</div>
)
