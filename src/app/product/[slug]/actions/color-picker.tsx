const palette = {
	Preto: "black",
	Branco: "white",
	Bronze: "#CD7F32",
	Amarela: "yellow",
} as const

interface ColorPickerProps {
	colors: string[]
	selectedColorIndex: number
	onColorSelected: (index: number) => void
}

export const ColorPicker = ({
	colors,
	selectedColorIndex,
	onColorSelected,
}: ColorPickerProps) => {
	return (
		<div className="mt-6 lg:mt-14">
			<span className="text-sm text-[#4A4A4A] lg:text-base">
				Cor:{" "}
				<span className="text-[#A4A4A4]">
					{colors[selectedColorIndex]}
				</span>
			</span>

			<div className="mt-2 flex gap-4">
				{colors.map((color, index) => (
					<div
						data-selected={index == selectedColorIndex}
						key={index}
						className="cursor-pointer rounded-full p-1 data-[selected=true]:border-2"
						onClick={() => onColorSelected(index)}
					>
						<div
							className="size-11 rounded-full border-3 border-zinc-400 lg:size-14"
							style={{
								backgroundColor:
									palette[color as keyof typeof palette],
							}}
						/>
					</div>
				))}
			</div>
		</div>
	)
}
