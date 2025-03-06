import { Header } from "@/components/header"

import { Banner } from "./banner"
import { Benefits } from "./benefits"
import { NavigationCategory } from "./navigation-category"
import { News } from "./news"
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
		</>
	)
}
