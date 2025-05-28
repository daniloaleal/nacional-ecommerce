"use client"

import { useKeenSlider } from "keen-slider/react"
import { X } from "lucide-react"
import Image from "next/image"
import { useEffect } from "react"

interface FullScreenPhotoViewerProps {
	images: string[]
	defaultImageIndex?: number
	isOpen?: boolean
	onClose: () => void
}

export const FullScreenImagesViewer = ({
	images,
	defaultImageIndex = 0,
	isOpen = false,
	onClose,
}: FullScreenPhotoViewerProps) => {
	const [sliderRef, instanceRef] = useKeenSlider({
		slides: {
			perView: 1,
		},
		created: () => {
			setTimeout(() => {
				instanceRef.current?.moveToIdx(defaultImageIndex)
			}, 0)
		},
	})

	useEffect(() => {
		document.body.style.overflow = isOpen ? "hidden" : ""

		return () => {
			document.body.style.overflow = ""
		}
	}, [isOpen])

	useEffect(() => {
		setTimeout(() => {
			instanceRef.current?.moveToIdx(defaultImageIndex)
		}, 0)
	}, [instanceRef, defaultImageIndex])

	if (!isOpen) {
		return
	}

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center">
			<div
				className="absolute inset-0 bg-black opacity-35"
				onClick={onClose}
			></div>

			<div
				className="keen-slider relative h-[700px] w-[800px] overflow-hidden bg-white shadow-lg"
				ref={sliderRef}
			>
				<button
					className="absolute top-5 left-5 z-50 cursor-pointer"
					onClick={onClose}
				>
					<X size={30} />
				</button>
				{images.map((image, index) => (
					<div
						className="keen-slider__slide flex h-full w-full items-center justify-center"
						key={index}
					>
						<Image
							src={image}
							alt={`Product Image ${index + 1}`}
							width={800}
							height={500}
							className="h-full w-full object-contain"
						/>
					</div>
				))}
			</div>
		</div>
	)
}
