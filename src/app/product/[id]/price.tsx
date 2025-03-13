export const Price = () => (
	<div className="mt-6 lg:mt-9">
		<div className="flex items-center justify-between">
			<div className="flex items-end gap-3 lg:gap-9">
				<h2 className="text-xl font-medium text-[#9A9A9A] lg:text-2xl">
					<del>R$ 79,99</del>
				</h2>
				<h1 className="text-2xl font-semibold lg:text-5xl">R$ 79,99</h1>
			</div>
			<span className="bg-red-600 px-1.5 py-2 text-sm font-bold text-white lg:text-base">
				-40%
			</span>
		</div>
		<span className="text-xs text-[#4A4A4A] lg:text-xl">
			ou 10x de R$ 7,99 *
		</span>
	</div>
)
