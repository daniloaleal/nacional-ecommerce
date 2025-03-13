"use client"

import { useState } from "react"

interface ColorPickerProps {
	colors: {
		name: string
		color: string
	}[]
}

export const ColorPicker = ({ colors }: ColorPickerProps) => {
	const [selectedColorIndex, setSelectedColorIndex] = useState(0)

	return (
		<div className="mt-6 lg:mt-14">
			<span className="text-sm text-[#4A4A4A] lg:text-base">
				Cor:{" "}
				<span className="text-[#A4A4A4]">
					{colors[selectedColorIndex].name}
				</span>
			</span>

			<div className="mt-2 flex gap-4">
				{colors.map(({ color }, index) => (
					<div
						data-selected={index == selectedColorIndex}
						key={index}
						className="cursor-pointer rounded-full p-1 data-[selected=true]:border-2"
						onClick={() => setSelectedColorIndex(index)}
					>
						<div
							className="size-11 rounded-full border-3 border-zinc-400 lg:size-14"
							style={{
								backgroundColor: color,
							}}
						/>
					</div>
				))}
			</div>
		</div>
	)
}
