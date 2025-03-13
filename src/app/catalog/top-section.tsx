import { SlidersHorizontal } from "lucide-react"

import { Localization } from "@/components/localization"

export const TopSection = () => (
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
					Mostrando <strong>30</strong> resultados para{" "}
					<strong>{'"Casacos femininos"'}</strong>
				</h1>
				<button className="flex cursor-pointer items-center gap-2.5 rounded-full border-3 px-11 py-3 text-xl">
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
	</>
)
