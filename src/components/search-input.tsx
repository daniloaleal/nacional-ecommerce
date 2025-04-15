"use client"

import { Search } from "lucide-react"
import { useRouter } from "next/navigation"
import { ComponentProps, useState } from "react"
import { twMerge } from "tailwind-merge"

type SearchInputRootProps = ComponentProps<"div">

export const SearchInputRoot = ({
	children,
	className,
	...props
}: SearchInputRootProps) => (
	<div className={twMerge("flex gap-2.5", className)} {...props}>
		<Search />
		{children}
	</div>
)
type SearchInputFieldProps = ComponentProps<"input">

export const SearchInputField = ({
	className,
	value,
	...props
}: SearchInputFieldProps) => {
	const [search, setSearch] = useState((value as string) || "")
	const router = useRouter()

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter" && search.trim() !== "") {
			router.push(`/catalog/?search=${encodeURIComponent(search)}`)
		}
	}

	return (
		<input
			className={twMerge(
				"w-full placeholder-inherit outline-none placeholder:font-medium",
				className
			)}
			onChange={e => setSearch(e.target.value)}
			onKeyDown={handleKeyDown}
			value={search}
			type="text"
			placeholder="Pesquisar"
			{...props}
		/>
	)
}
