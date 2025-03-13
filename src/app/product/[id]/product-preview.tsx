"use client"

import { useKeenSlider } from "keen-slider/react"
import Image from "next/image"
import { useState } from "react"

import productPreview1 from "@/assets/product-preview-1.png"
import productPreview2 from "@/assets/product-preview-2.png"
import productPreview3 from "@/assets/product-preview-3.png"
import productPreview4 from "@/assets/product-preview-4.png"

export const ProductPreview = () => {
	const [currentSlide, setCurrentSlide] = useState(0)
	const [isSliderReady, setIsSliderReady] = useState(false)
	const [sliderRef, instanceRef] = useKeenSlider({
		slides: {
			perView: 1,
		},
		slideChanged(slider) {
			setCurrentSlide(slider.track.details.rel)
		},
		created: () => {
			setIsSliderReady(true)
		},
		breakpoints: {
			"(min-width: 1024px)": {
				disabled: true,
			},
		},
	})

	return (
		<>
			<div className="max-xxl:justify-center flex gap-7 px-5 max-lg:hidden">
				<div className="space-y-3.5">
					<div className="h-[248px] w-[243px] bg-[#D9D9D9]">
						<Image
							className="h-full w-full object-cover"
							src={productPreview2}
							alt="product preview"
						/>
					</div>
					<div className="h-[248px] w-[243px] bg-[#D9D9D9]">
						<Image
							className="h-full w-full object-cover"
							src={productPreview3}
							alt="product preview"
						/>
					</div>
					<div className="h-[248px] w-[243px] bg-[#D9D9D9]">
						<Image
							className="h-full w-full object-cover"
							src={productPreview4}
							alt="product preview"
						/>
					</div>
				</div>
				<div className="h-[768px] w-[576px] bg-[#D9D9D9]">
					<Image
						className="h-full w-full object-cover"
						src={productPreview1}
						alt="product preview"
					/>
				</div>
			</div>

			<div className="relative h-[438px] w-full bg-[#D9D9D9] lg:hidden">
				<div className="keen-slider h-full" ref={sliderRef}>
					<Image
						className="keen-slider__slide mx-auto h-full sm:w-auto sm:object-contain"
						src={productPreview1}
						alt="product preview"
					/>
					<Image
						className="keen-slider__slide mx-auto h-full sm:w-auto sm:object-contain"
						src={productPreview2}
						alt="product preview"
					/>
					<Image
						className="keen-slider__slide mx-auto h-full sm:w-auto sm:object-contain"
						src={productPreview3}
						alt="product preview"
					/>
					<Image
						className="keen-slider__slide mx-auto h-full sm:w-auto sm:object-contain"
						src={productPreview4}
						alt="product preview"
					/>
				</div>

				<div className="absolute bottom-3.5 flex w-full justify-center">
					<div className="flex justify-center gap-4">
						{isSliderReady &&
							instanceRef.current?.track.details.slides.map(
								(_, index) => (
									<button
										key={index}
										data-currenslide={
											currentSlide === index
										}
										onClick={() =>
											instanceRef.current?.moveToIdx(
												index
											)
										}
										className="h-3 w-3 rounded-full bg-[#ADADAD] data-[currenslide=true]:bg-black"
									/>
								)
							)}
					</div>
				</div>
			</div>
		</>
	)
}
