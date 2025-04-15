interface SizePickerProps {
	sizes: string[]
	selectedSizeIndex: number
	onSizeSelected: (index: number) => void
}

export const SizePicker = ({
	sizes,
	selectedSizeIndex,
	onSizeSelected,
}: SizePickerProps) => {
	return (
		<div className="mt-6 lg:mt-10">
			<span className="text-sm text-[#4A4A4A] lg:text-base">Tamanho</span>

			<div className="mt-2 flex gap-4">
				{sizes.map((size, index) => (
					<div
						key={index}
						data-selected={index == selectedSizeIndex}
						className="flex size-13 cursor-pointer items-center justify-center rounded-full border-2 border-zinc-400 data-[selected=true]:border-0 data-[selected=true]:bg-black data-[selected=true]:text-white lg:size-16"
						onClick={() => onSizeSelected(index)}
					>
						<span className="text-xl">{size}</span>
					</div>
				))}
			</div>
		</div>
	)
}
