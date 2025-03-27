import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import notFoundImg from "@/assets/notFound.svg"
import { Header } from "@/components/header/header"

export const metadata: Metadata = {
	title: "Não encontrado - Nacional Online",
	robots: {
		index: false,
		follow: false,
	},
}

export default function NotFound() {
	return (
		<>
			<Header alwaysBackgroundWhite />

			<div className="flex h-screen w-full flex-col items-center justify-center px-10">
				<Image src={notFoundImg} alt="not found" />
				<div className="max-w-[668px] text-center">
					<h1 className="mb-4 text-3xl font-bold md:text-5xl">
						Sua página não está respondendo
					</h1>
					<p className="mb-16 leading-none font-medium md:text-2xl">
						Essa página não existe ou não está funcionando! Nós
						sugerimos que você retorne à página inicial
					</p>
					<Link
						className="rounded-full bg-black px-7 py-5 text-white"
						href="/"
					>
						VOLTAR À PÁGINA INICIAL
					</Link>
				</div>
			</div>
		</>
	)
}
