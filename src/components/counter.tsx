"use client"

import { useEffect, useState } from "react"
import { ClassNameValue, twMerge } from "tailwind-merge"

import { formatNumber } from "@/utils/number"

interface Counter {
	timeUnitClassName?: ClassNameValue
}

export const Counter = ({ timeUnitClassName }: Counter) => {
	const initialTime = 39 * 60 * 60 // 39 hours
	const [remainingTime, setRemainingTime] = useState(initialTime)

	useEffect(() => {
		const interval = setInterval(() => {
			if (remainingTime <= 0) {
				return setRemainingTime(initialTime)
			}

			setRemainingTime(prevTime => prevTime - 1)
		}, 1000)

		return () => clearInterval(interval)
	})

	return (
		<div className="flex gap-1.5 text-white">
			<div
				className={twMerge(
					"flex size-9 items-center justify-center rounded-sm bg-black p-1 font-medium",
					timeUnitClassName
				)}
			>
				<span>{formatNumber(Math.floor(remainingTime / 3600))}</span>
			</div>
			<div
				className={twMerge(
					"flex size-9 items-center justify-center rounded-sm bg-black p-1 font-medium",
					timeUnitClassName
				)}
			>
				<span>
					{formatNumber(Math.floor((remainingTime % 3600) / 60))}
				</span>
			</div>
			<div
				className={twMerge(
					"flex size-9 items-center justify-center rounded-sm bg-black p-1 font-medium",
					timeUnitClassName
				)}
			>
				<span>{formatNumber(remainingTime % 60)}</span>
			</div>
		</div>
	)
}
