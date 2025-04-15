// import { ChevronDown } from "lucide-react"

interface DescriptionProps {
	description: string
}

export const Description = ({ description }: DescriptionProps) => (
	<section className="mt-16 max-w-[852px] px-5 lg:mt-20">
		<h1 className="border-b border-[#ADADAD] pb-5 text-xl font-semibold text-[#4A4A4A] lg:text-3xl">
			Detalhes
		</h1>

		<div
			className="mt-5"
			dangerouslySetInnerHTML={{ __html: description }}
		/>

		{/* <button className="mt-3 flex cursor-pointer items-center gap-2.5 font-medium text-[#323232] max-lg:hidden lg:mt-20">
			VER MAIS DETALHES <ChevronDown className="size-7 text-[#929292]" />
		</button>

		<button className="mt-7 w-full rounded-full border border-[#929292] py-3.5 text-sm text-[#929292] lg:hidden">
			VER MAIS DETALHES
		</button> */}
	</section>
)
