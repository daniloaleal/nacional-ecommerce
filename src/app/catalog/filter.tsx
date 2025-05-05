"use client"

import { ChevronRight, SlidersHorizontal, X } from "lucide-react"
import { useRouter } from "next/navigation"
import { ComponentProps, ReactNode, useState } from "react"
import { twMerge } from "tailwind-merge"

import { SideBar } from "@/components/side-bar"
import { useFilters } from "@/hooks/useFilters"

interface FilterSectionProps extends ComponentProps<"div"> {
	title: string
	children: ReactNode
}

const FilterSection = ({ title, children, className }: FilterSectionProps) => (
	<details className="group mb-6 border-b border-[#ADADAD] pb-6">
		<summary className="flex cursor-pointer list-none items-center justify-between">
			<h1 className="text-xl">{title}</h1>
			<span className="transition-transform group-open:rotate-90">
				<ChevronRight />
			</span>
		</summary>
		<div className={twMerge("mt-6", className)}>{children}</div>
	</details>
)

interface TagSelectorProps {
	item: { title: string; id: string }
	isSelected: boolean
	onSelect: (tag: string) => void
	onDeselect: (tag: string) => void
}

const TagSelector = ({
	item,
	isSelected,
	onSelect,
	onDeselect,
}: TagSelectorProps) => (
	<div
		data-selected={isSelected}
		className="group flex items-center justify-center gap-1 rounded-3xl border-[#797979] px-3.5 py-2 font-medium text-[#797979] data-[selected=false]:cursor-pointer data-[selected=false]:border data-[selected=true]:bg-black data-[selected=true]:text-white"
		onClick={() => {
			if (!isSelected) onSelect(item.id)
		}}
	>
		<span className="text-sm">{item.title}</span>
		<X
			className="cursor-pointer group-data-[selected=false]:hidden"
			onClick={e => {
				e.stopPropagation()
				onDeselect(item.id)
			}}
		/>
	</div>
)

interface FilterSideBarProps {
	isOpen: boolean
	onRequestClose: () => void
}

const FilterSideBar = ({ isOpen, onRequestClose }: FilterSideBarProps) => {
	const router = useRouter()

	const {
		selectedCategories,
		setSelectedCategories,
		selectedSizes,
		setSelectedSizes,
		minPrice,
		setMinPrice,
		maxPrice,
		setMaxPrice,
	} = useFilters()

	const categories = [
		{ title: "Super Ofertas", id: "496502866240" },
		{ title: "Novidades", id: "496502899008" },
		{ title: "Achadinhos", id: "496502931776" },
		{ title: "Plus Size", id: "496502964544" },
	]
	const sizes = ["PP", "P", "M", "G", "GG"]

	const handleToggleItem = (
		list: string[],
		setList: (val: string[]) => void,
		item: string,
		add: boolean
	) => {
		setList(add ? [item, ...list] : list.filter(i => i !== item))
	}

	const formatPriceInput = (value: string) => value.replace(/[^0-9.,]/g, "")

	return (
		<SideBar
			title="Filtrar"
			className="overflow-y-auto"
			isOpen={isOpen}
			onRequestClose={onRequestClose}
		>
			<div className="px-9">
				<FilterSection
					className="grid grid-cols-[repeat(auto-fit,_minmax(100px,180px))] gap-3"
					title="Categoria"
				>
					{categories.map(category => (
						<TagSelector
							key={category.id}
							item={category}
							isSelected={selectedCategories.includes(
								category.id
							)}
							onSelect={item =>
								handleToggleItem(
									selectedCategories,
									setSelectedCategories,
									item,
									true
								)
							}
							onDeselect={item =>
								handleToggleItem(
									selectedCategories,
									setSelectedCategories,
									item,
									false
								)
							}
						/>
					))}
				</FilterSection>

				<FilterSection
					className="grid grid-cols-3 gap-3"
					title="Tamanho"
				>
					{sizes.map(size => (
						<TagSelector
							key={size}
							item={{ title: size, id: size }}
							isSelected={selectedSizes.includes(size)}
							onSelect={item =>
								handleToggleItem(
									selectedSizes,
									setSelectedSizes,
									item,
									true
								)
							}
							onDeselect={item =>
								handleToggleItem(
									selectedSizes,
									setSelectedSizes,
									item,
									false
								)
							}
						/>
					))}
				</FilterSection>

				<FilterSection
					className="flex items-center gap-2"
					title="Preço"
				>
					<input
						className="w-24 rounded border border-[#6b6969] px-2 py-1"
						value={minPrice}
						onChange={e =>
							setMinPrice(formatPriceInput(e.target.value))
						}
						type="text"
						placeholder="Mínimo"
					/>
					<span>-</span>
					<input
						className="w-24 rounded border border-[#6b6969] px-2 py-1"
						value={maxPrice}
						onChange={e =>
							setMaxPrice(formatPriceInput(e.target.value))
						}
						type="text"
						placeholder="Máximo"
					/>
				</FilterSection>

				<button
					className="mb-3 cursor-pointer rounded-full bg-black px-7 py-3 text-white"
					onClick={() => {
						const searchParams = new URLSearchParams(
							window.location.search
						)

						searchParams.delete("category")
						searchParams.delete("sizes")
						searchParams.delete("minPrice")
						searchParams.delete("maxPrice")

						if (selectedCategories.length > 0)
							searchParams.set(
								"category",
								selectedCategories.join(",")
							)

						if (selectedSizes.length > 0)
							searchParams.set("sizes", selectedSizes.join(","))

						if (minPrice) searchParams.set("minPrice", minPrice)
						if (maxPrice) searchParams.set("maxPrice", maxPrice)

						router.replace(`?${searchParams.toString()}`)
					}}
				>
					Aplicar
				</button>
			</div>
		</SideBar>
	)
}

export const FilterButton = () => {
	const [isFilterSideBarOpen, setIsFilterSideBarOpen] = useState(false)

	return (
		<>
			<button
				className="flex cursor-pointer items-center gap-1.5 rounded-full max-sm:font-medium max-sm:uppercase sm:gap-2.5 sm:border-3 sm:px-11 sm:py-3 sm:text-xl"
				onClick={() => setIsFilterSideBarOpen(true)}
			>
				<SlidersHorizontal className="max-sm:size-4" />
				Filtrar
			</button>

			<FilterSideBar
				isOpen={isFilterSideBarOpen}
				onRequestClose={() => setIsFilterSideBarOpen(false)}
			/>
		</>
	)
}
