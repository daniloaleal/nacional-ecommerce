import { ArrowLeft } from "lucide-react"
import Link from "next/link"

import { Header } from "@/components/header/header"
import { SearchInputField, SearchInputRoot } from "@/components/search-input"

interface CatalogHeaderProps {
	search?: string
}

export const CatalogHeader = ({ search }: CatalogHeaderProps) => (
	<>
		<Header
			alwaysBackgroundWhite
			search={search}
			className="max-sm:hidden"
		/>

		<header className="mt-9 flex items-center gap-5 px-4 text-[#4A4A4A] sm:hidden">
			<Link href="/">
				<ArrowLeft className="size-8" />
			</Link>
			<SearchInputRoot className="flex-1 rounded-full border-2 border-[#4A4A4A] px-4 py-2">
				<SearchInputField placeholder={`Resultados para "${search}"`} />
			</SearchInputRoot>
		</header>
	</>
)
