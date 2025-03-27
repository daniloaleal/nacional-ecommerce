import { Header } from "@/components/header/header"

import { Banner } from "./banner"
import { Benefits } from "./benefits"
import { LittleFinds } from "./little-finds"
import { NavigationCategory } from "./navigation-category"
import { News } from "./news"
import { PlusSize } from "./plus-size"
import { SupperOffers } from "./super-offers"

export default function Home() {
	return (
		<>
			<Header />
			<Banner />
			<Benefits />
			<NavigationCategory />
			<SupperOffers />
			<News />
			<LittleFinds />
			<PlusSize />
		</>
	)
}
