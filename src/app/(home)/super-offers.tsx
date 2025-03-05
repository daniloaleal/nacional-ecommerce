import { ChevronRight, Zap } from "lucide-react"
import Link from "next/link"

import { Counter } from "@/components/counter"

export const SupperOffers = () => (
	<section className="mx-auto mt-11 w-full max-w-[1289px] space-y-4 px-5">
		<div className="flex items-center justify-between">
			<div className="flex items-center gap-2.5">
				<div className="flex items-center">
					<h1 className="text-2xl font-extrabold sm:text-5xl sm:font-bold">
						Super ofertas
					</h1>
					<Zap className="ml-1 size-4 sm:hidden" />
				</div>
				<Counter timeUnitClassName="max-sm:size-6 max-sm:text-sm" />
			</div>
			<Link
				className="hidden items-center text-2xl font-semibold text-gray-500 sm:flex"
				href="/catalog?category=promocoes"
			>
				Ver mais <ChevronRight />
			</Link>
		</div>
		<div></div>
	</section>
)
