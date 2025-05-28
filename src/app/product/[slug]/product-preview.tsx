"use client"

import { useKeenSlider } from "keen-slider/react"
import Image from "next/image"
import { useState } from "react"

import { FullScreenImagesViewer } from "@/components/full-screen-photo-viewer"

interface ProductPreviewProps {
	images: string[]
}

export const ProductPreview = ({ images }: ProductPreviewProps) => {
	const [currentSlide, setCurrentSlide] = useState(0)
	const [isSliderReady, setIsSliderReady] = useState(false)
	const [isOpenFullScreenImagesViewer, setIsOpenFullScreenImagesViewer] =
		useState(false)
	const [imageIndexFocus, setImageIndexFocus] = useState(0)
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

	const handleClickImage = (imageIndex: number) => {
		setImageIndexFocus(imageIndex)
		setIsOpenFullScreenImagesViewer(true)
	}

	return (
		<>
			<div className="max-xxl:justify-center flex gap-7 px-5 max-lg:hidden">
				<div className="space-y-3.5">
					{images[1] && (
						<div className="h-[248px] w-[243px] bg-[#D9D9D9]">
							<Image
								className="h-full w-full object-cover"
								src={images[1]}
								width={243}
								height={248}
								alt="product preview"
								onClick={() => handleClickImage(1)}
							/>
						</div>
					)}
					{images[2] && (
						<div className="h-[248px] w-[243px] bg-[#D9D9D9]">
							<Image
								className="h-full w-full object-cover"
								src={images[2]}
								width={243}
								height={248}
								alt="product preview"
								onClick={() => handleClickImage(2)}
							/>
						</div>
					)}
					{images[3] && (
						<div className="h-[248px] w-[243px] bg-[#D9D9D9]">
							<Image
								className="h-full w-full object-cover"
								src={images[3]}
								width={243}
								height={248}
								alt="product preview"
								onClick={() => handleClickImage(3)}
							/>
						</div>
					)}
				</div>
				<div className="h-[768px] w-[576px] bg-[#D9D9D9]">
					<Image
						className="h-full w-full object-cover"
						src={images[0]}
						width={578}
						height={578}
						alt="product preview"
						onClick={() => handleClickImage(0)}
					/>
				</div>
			</div>

			<div className="relative h-[438px] w-full bg-[#D9D9D9] lg:hidden">
				<div className="keen-slider h-full" ref={sliderRef}>
					{images[0] && (
						<Image
							className="keen-slider__slide mx-auto h-full sm:w-auto sm:object-contain"
							src={images[0]}
							width={243}
							height={248}
							alt="product preview"
						/>
					)}
					{images[1] && (
						<Image
							className="keen-slider__slide mx-auto h-full sm:w-auto sm:object-contain"
							src={images[1]}
							width={243}
							height={248}
							alt="product preview"
						/>
					)}
					{images[2] && (
						<Image
							className="keen-slider__slide mx-auto h-full sm:w-auto sm:object-contain"
							src={images[2]}
							width={243}
							height={248}
							alt="product preview"
						/>
					)}
					{images[3] && (
						<Image
							className="keen-slider__slide mx-auto h-full sm:w-auto sm:object-contain"
							src={images[3]}
							width={243}
							height={248}
							alt="product preview"
						/>
					)}
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

			<FullScreenImagesViewer
				images={images}
				isOpen={isOpenFullScreenImagesViewer}
				defaultImageIndex={imageIndexFocus}
				onClose={() => setIsOpenFullScreenImagesViewer(false)}
			/>
		</>
	)
}
