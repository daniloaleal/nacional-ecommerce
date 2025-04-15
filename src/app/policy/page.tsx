import { Metadata } from "next"

import { Header } from "@/components/header/header"

export const metadata: Metadata = {
	title: "Política de privacidade - Nacional Online",
	description: "Nossa política de privacidade e como protegemos seus dados",
}

export default function Policy() {
	return (
		<>
			<Header alwaysBackgroundWhite />

			<div className="mt-40 px-5 md:px-24">
				<h1 className="mb-7 text-xl font-bold md:text-4xl">
					Política de privacidade e de proteção de dados da Nacional
					Online
				</h1>
				<p className="text-xl md:text-justify">
					No momento, não recolhemos nenhum dado.
				</p>
			</div>
		</>
	)
}
