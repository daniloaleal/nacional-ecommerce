import { Suspense } from "react"

import { SideBar } from "../side-bar"
import { FavoritesList } from "./favorites-list"
import { FavoritesListSkeleton } from "./favorites-list-skeleton"

interface FavoritesSideBarProps {
	isOpen: boolean
	onRequestClose: () => unknown
}

export const FavoritesSidebar = ({
	onRequestClose,
	isOpen,
}: FavoritesSideBarProps) => {
	return (
		<SideBar
			className="flex flex-col"
			title="Favoritos"
			onRequestClose={onRequestClose}
			isOpen={isOpen}
		>
			<div className="grid flex-1 grid-cols-2 gap-4 overflow-auto px-9 pb-20 sm:gap-8">
				<Suspense fallback={<FavoritesListSkeleton />}>
					<FavoritesList />
				</Suspense>
			</div>
		</SideBar>
	)
}
