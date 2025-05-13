import { ChevronRight, MessageSquareShare } from "lucide-react"
import { ComponentProps } from "react"
import { FaInstagram } from "react-icons/fa"
import { SiWhatsapp } from "react-icons/si"

interface DetailsProps extends ComponentProps<"details"> {
	title: string
}

const Details = ({ title, children, ...props }: DetailsProps) => (
	<details className="group border-b border-gray-700 pb-3" {...props}>
		<summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-gray-700">
			<span>{title}</span>
			<span className="transition-transform group-open:rotate-90">
				<ChevronRight />
			</span>
		</summary>

		{children}
	</details>
)

export const Footer = () => {
	const links = {
		quickAccess: [
			{
				icon: <MessageSquareShare className="size-7" />,
				text: "Atendimento",
				href: "mailto:contato@usenacional.com.br?subject=Atendimento%20Nacional%20Online&body=Ol%C3%A1,%20preciso%20de%20ajuda:%0A%0A",
			},
			// {
			// 	icon: <Mailbox className="size-7" />,
			// 	text: "Status do pedido",
			// 	href: "/",
			// },
			// {
			// 	icon: <Container className="size-7" />,
			// 	text: "Devoluções",
			// 	href: "/",
			// },
			{
				icon: <SiWhatsapp className="size-7" />,
				text: "Compre via WhatsApp",
				href: "https://api.whatsapp.com/send?phone=5564984200970",
			},
		],
		help: [
			{
				text: "Entrega",
				href: "/",
			},
			{
				text: "Devolução",
				href: "/",
			},
			{
				text: "Pagamento",
				href: "/",
			},
			{
				text: "Meus pedidos",
				href: "/",
			},
			{
				text: "Cancelamentos",
				href: "/",
			},
		],
		store: [
			{
				text: "Calçados",
				href: "/catalog?category=496846995776",
			},
			{
				text: "Política de privacidade",
				href: "/policy",
			},
			{
				text: "Feminino",
				href: "/catalog?category=498671419712",
			},
			{
				text: "Masculino",
				href: "/catalog?category=498671452480",
			},
			{
				text: "Infantil",
				href: "/catalog?category=498671485248",
			},
			{
				text: "Bebês",
				href: "/catalog?category=498671518016",
			},
			{
				text: "Plus Size",
				href: "/catalog?category=496502964544",
			},
			{
				text: "Acessórios",
				href: "/catalog?category=496847061312",
			},
			{
				text: "Semijoias",
				href: "/catalog?category=496847028544",
			},
			{
				text: "Perfumes",
				href: "/catalog?category=496846897472",
			},
		],
	}

	return (
		<footer className="mt-24 bg-white px-5 pt-20 pb-14 md:px-10">
			<div className="mx-auto hidden max-w-7xl grid-cols-4 gap-5 md:grid">
				<div>
					<h1 className="font-semibold text-gray-600">
						Acesso rápido
					</h1>

					<div className="mt-10 space-y-9 text-gray-600">
						{links.quickAccess.map(
							({ icon, text, href }, index) => (
								<a
									target="_blank"
									key={index}
									href={href}
									className="flex items-center gap-4"
								>
									{icon}
									<span>{text}</span>
								</a>
							)
						)}
					</div>
				</div>
				{/* <div>
					<h1 className="font-semibold text-gray-600">Ajuda</h1>

					<div className="mt-10 flex flex-col gap-4 text-gray-600">
						{links.help.map(({ href, text }, index) => (
							<a target="_blank" key={index} href={href}>
								{text}
							</a>
						))}
					</div>
				</div> */}
				<div>
					<h1 className="font-semibold text-gray-600">Loja</h1>

					<div className="mt-10 flex flex-col gap-4 text-gray-600">
						{links.store.map(({ href, text }, index) => (
							<a target="_blank" key={index} href={href}>
								{text}
							</a>
						))}
					</div>
				</div>
				<div className="space-y-11 font-semibold text-gray-600">
					<div className="space-y-3.5">
						<h1>Redes sociais</h1>
						<div className="flex items-center gap-2.5">
							<a
								href="https://www.instagram.com/usenacional/"
								target="_blank"
							>
								<FaInstagram className="size-8" />
							</a>
						</div>
					</div>
					<div>
						<h1>Formas de pagamento</h1>
					</div>
				</div>
			</div>

			<div className="md:hidden">
				<div className="space-y-2.5">
					<Details title="Acesso rápido">
						<div className="mt-2 ml-2 space-y-5 text-gray-600">
							{links.quickAccess.map(
								({ icon, text, href }, index) => (
									<a
										target="_blank"
										key={index}
										href={href}
										className="flex items-center gap-4"
									>
										{icon}
										<span>{text}</span>
									</a>
								)
							)}
						</div>
					</Details>
					{/* <Details title="Ajuda">
						<div className="mt-2 ml-2 flex flex-col gap-4 text-gray-600">
							{links.help.map(({ href, text }, index) => (
								<a target="_blank" key={index} href={href}>
									{text}
								</a>
							))}
						</div>
					</Details> */}
					{/* <Details title="Loja">
						<div className="mt-2 ml-2 flex flex-col gap-4 text-gray-600">
							{links.help.map(({ href, text }, index) => (
								<a target="_blank" key={index} href={href}>
									{text}
								</a>
							))}
						</div>
					</Details> */}
				</div>

				<div className="mt-11 space-y-3.5 font-semibold text-gray-600">
					<div>
						<h1>Redes sociais</h1>
						<div className="flex items-center gap-2.5">
							<a
								href="https://www.instagram.com/usenacional/"
								target="_blank"
							>
								<FaInstagram className="size-8" />
							</a>
						</div>
					</div>
					<div>
						<h1>Formas de pagamento</h1>
					</div>
				</div>
			</div>

			<p className="mt-20 text-center text-xs text-gray-400 md:text-sm">
				Av. Amazonas, N° 362, Centro, Goiatuba - Goiás • CEP 75600-000
				CNPJ: 05.907.568/0001-04
			</p>
		</footer>
	)
}
