import { Heart, ShoppingBag } from "lucide-react"

export const Actions = () => (
	<div className="mt-20 flex gap-3.5">
		<button className="flex size-14 cursor-pointer items-center justify-center rounded-full border-2 lg:size-[73px]">
			<Heart className="size-8" />
		</button>
		<button className="flex size-14 cursor-pointer items-center justify-center rounded-full border-2 lg:size-[73px]">
			<ShoppingBag className="size-8" />
		</button>
		<button className="flex-1 cursor-pointer rounded-full bg-black py-3 text-xl font-semibold text-white lg:text-2xl">
			COMPRAR
		</button>
	</div>
)
