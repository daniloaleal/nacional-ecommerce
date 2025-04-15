import { Localization } from "@/components/localization"

import { FilterButton } from "./filter"

interface TopSectionProps {
	search?: string
	totalResults: number
}

export const TopSection = ({ search, totalResults }: TopSectionProps) => (
	<>
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
				<h1 className="mt-8 text-2xl font-medium md:text-4xl">
					Mostrando <strong>{totalResults}</strong> resultados{" "}
					{search && (
						<>
							para <strong>{`"${search}"`}</strong>
						</>
					)}
				</h1>

				<FilterButton />
			</div>
		</div>

		<div className="mt-4 flex justify-between text-xs sm:hidden">
			<h1 className="font-semibold">{totalResults} resultados</h1>
			<FilterButton />
		</div>
	</>
)
