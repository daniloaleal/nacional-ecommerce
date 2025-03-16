"use client"

import { ArrowLeft, X } from "lucide-react"
import { ComponentProps, ReactNode, useEffect } from "react"
import { twMerge } from "tailwind-merge"

export interface SideBarProps extends ComponentProps<"div"> {
	isOpen?: boolean
	title: string
	children: ReactNode
	onRequestClose: () => unknown
}

export const SideBar = ({
	children,
	isOpen = false,
	title,
	onRequestClose,
	className,
	...props
}: SideBarProps) => {
	useEffect(() => {
		document.body.style.overflow = isOpen ? "hidden" : ""

		return () => {
			document.body.style.overflow = ""
		}
	}, [isOpen])

	return (
		isOpen && (
			<div
				className="fixed top-0 bottom-0 left-0 z-40 flex w-full justify-end bg-[rgba(0,0,0,0.5)] text-black"
				onClick={onRequestClose}
			>
				<div
					className={twMerge(
						"z-50 w-full bg-[#F0F0F0] sm:w-[483px]",
						className
					)}
					onClick={e => e.stopPropagation()}
					{...props}
				>
					<div className="relative my-10 flex items-center justify-center px-9 sm:justify-between">
						<h1 className="text-2xl font-extrabold sm:text-4xl">
							{title}
						</h1>
						<X
							className="size-7 cursor-pointer max-sm:hidden"
							onClick={onRequestClose}
						/>
						<ArrowLeft
							className="absolute left-9 size-7 cursor-pointer sm:hidden"
							onClick={onRequestClose}
						/>
					</div>
					{children}
				</div>
			</div>
		)
	)
}
