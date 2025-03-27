import { ChevronRight, Heart, Mailbox, MessageSquareShare } from "lucide-react"
import Link from "next/link"

import { SideBar } from "../side-bar"

interface HeaderSideBarProps {
	isOpen: boolean
	onRequestClose: () => void
}

export const HeaderSideBar = ({
	isOpen,
	onRequestClose,
}: HeaderSideBarProps) => {
	const links = [
		{
			name: "Novidades e Promoções",
			link: "/catalog?category=promocoes",
		},
		{
			name: "Feminino",
			link: "/catalog?category=feminino",
		},
		{
			name: "Masculino",
			link: "/catalog?category=masculino",
		},
		{
			name: "Crianças",
			link: "/catalog?category=criancas",
		},
		{
			name: "Bebês",
			link: "/catalog?category=bebes",
		},
		{
			name: "Plus Size",
			link: "/catalog?category=plussize",
		},
		{
			name: "Calçados",
			link: "/catalog?category=calcados",
		},
		{
			name: "Acessórios",
			link: "/catalog?category=acessorios",
		},
		{
			name: "Semijoias",
			link: "/catalog?category=semijoias",
		},
		{
			name: "Perfumes",
			link: "/catalog?category=perfumes",
		},
	]

	return (
		<SideBar
			className="flex flex-col gap-9 lg:hidden"
			title="Header Sidebar"
			isOpen={isOpen}
			defaultHeader={false}
			onRequestClose={onRequestClose}
		>
			<div className="mt-7 space-y-8 px-5">
				<button
					className="cursor-pointer rounded-full bg-black px-5 py-2 font-extrabold text-white"
					onClick={onRequestClose}
				>
					Fechar
				</button>

				<div className="space-y-10 text-lg font-bold">
					<div className="flex gap-2.5">
						<Heart className="size-7" />
						<span>Ver favoritos</span>
					</div>
					<div className="flex gap-2.5">
						<Mailbox className="size-7" />
						<span>Acompanhar meu pedido</span>
					</div>
					<div className="flex gap-2.5">
						<MessageSquareShare className="size-7" />
						<span>Atendimento & Suporte</span>
					</div>
				</div>
			</div>
			<div className="flex-1 overflow-auto px-2.5 text-xl font-medium">
				{links.map(({ name, link }, index) => (
					<Link
						data-isfirst={index === 0}
						key={index}
						href={link}
						className="flex w-full items-center justify-between border-b border-[#C7C7C7] px-3 py-7 data-[isfirst=true]:border-t"
					>
						<span>{name}</span>
						<ChevronRight />
					</Link>
				))}
			</div>
		</SideBar>
	)
}
