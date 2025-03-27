"use client"

import { Menu } from "lucide-react"
import { useState } from "react"

import { HeaderSideBar } from "./header-side-bar"

export const HeaderSideBarButton = () => {
	const [isHeaderSideBarOpen, setIsHeaderSideBarOpen] = useState(false)

	return (
		<>
			<Menu
				className="size-8 cursor-pointer lg:hidden"
				onClick={() => setIsHeaderSideBarOpen(true)}
			/>

			<HeaderSideBar
				isOpen={isHeaderSideBarOpen}
				onRequestClose={() => setIsHeaderSideBarOpen(false)}
			/>
		</>
	)
}
