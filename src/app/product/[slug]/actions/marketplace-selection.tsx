import { Check } from "lucide-react"
import Image from "next/image"

import mercadolivreImg from "@/assets/mercado-livre.png"
import shopeeImg from "@/assets/shopee.png"

interface MarketplaceSelectionProps {
	marketplaceSelected: string
	onMarketplaceSelected: (marketplace: "mercadolivre" | "shopee") => void
	isMercadoLivreBlocked?: boolean
	isShopeeBlocked?: boolean
}

export const MarketplaceSelection = ({
	marketplaceSelected,
	onMarketplaceSelected,
	isMercadoLivreBlocked,
	isShopeeBlocked,
}: MarketplaceSelectionProps) => (
	<div className="mt-10 space-y-3.5">
		<h3 className="text-[#4A4A4A]">Finalizar compra em:</h3>

		<div className="flex items-center gap-1 sm:gap-3.5">
			<label
				data-isblocked={isMercadoLivreBlocked}
				className="flex items-center gap-3.5 data-[isblocked=true]:pointer-events-none data-[isblocked=true]:opacity-50"
			>
				<div
					data-isselected={marketplaceSelected === "mercadolivre"}
					className="group flex size-5 cursor-pointer items-center justify-center rounded-full border-[#929292] text-white data-[isselected=false]:border data-[isselected=true]:bg-black lg:size-8"
					onClick={() => onMarketplaceSelected("mercadolivre")}
				>
					<Check className="group-data-[isselected=false]:hidden" />
				</div>
				<div className="flex h-[40px] w-[55px] items-center justify-center rounded-xs bg-[#F7D032]">
					<Image src={mercadolivreImg} alt="Mercado Livre" />
				</div>
				<span className="text-xs lg:text-base">Mercado Livre</span>
			</label>
			<label
				data-isblocked={isShopeeBlocked}
				className="flex items-center gap-3.5 data-[isblocked=true]:pointer-events-none data-[isblocked=true]:opacity-50"
			>
				<div
					data-isselected={marketplaceSelected === "shopee"}
					className="group flex size-5 cursor-pointer items-center justify-center rounded-full border-[#929292] text-white data-[isselected=false]:border data-[isselected=true]:bg-black lg:size-8"
					onClick={() => onMarketplaceSelected("shopee")}
				>
					<Check className="group-data-[isselected=false]:hidden" />
				</div>
				<div className="flex h-[40px] w-[55px] items-center justify-center rounded-xs border-3 border-[#EE4D2D]">
					<Image src={shopeeImg} alt="Shopee" />
				</div>
				<span className="text-xs lg:text-base">Shopee</span>
			</label>
		</div>
	</div>
)
