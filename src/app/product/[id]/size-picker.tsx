"use client"

import { useState } from "react"

interface SizePickerProps {
	sizes: string[]
}

export const SizePicker = ({ sizes }: SizePickerProps) => {
	const [selectedSizeIndex, setSelectedSizeIndex] = useState(0)

	return (
		<div className="mt-6 lg:mt-10">
			<span className="text-sm text-[#4A4A4A] lg:text-base">Tamanho</span>

			<div className="mt-2 flex gap-4">
				{sizes.map((size, index) => (
					<div
						key={index}
						data-selected={index == selectedSizeIndex}
						className="flex size-13 cursor-pointer items-center justify-center rounded-full border-2 border-zinc-400 data-[selected=true]:border-0 data-[selected=true]:bg-black data-[selected=true]:text-white lg:size-16"
						onClick={() => setSelectedSizeIndex(index)}
					>
						<span className="text-xl">{size}</span>
					</div>
				))}
			</div>
		</div>
	)
}
