export const formatNumber = (number: number) =>
	number < 10 ? `0${number}` : number

export const formatPrice = (cents: number) =>
	new Intl.NumberFormat("pt-BR", {
		style: "currency",
		currency: "BRL",
	}).format(cents / 100)

export const calculateDiscount = (price: number, comparisonPrice: number) =>
	`-${Math.ceil(
		((comparisonPrice / 100 - price / 100) / (comparisonPrice / 100)) * 100
	)}%`
