import { Search } from "lucide-react"
import { ComponentProps } from "react"
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
	...props
}: SearchInputFieldProps) => (
	<input
		className={twMerge(
			"w-full placeholder-inherit outline-none placeholder:font-medium",
			className
		)}
		type="text"
		placeholder="Pesquisar"
		{...props}
	/>
)
