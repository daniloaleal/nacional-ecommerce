interface ShopifyProductData {
	id: number
	title: string
	variants: { price: string; compare_at_price?: string }[]
	image: { src: string }
}

export const formatProductCardData = (product: ShopifyProductData) => {
	return {
		id: product.id,
		title: product.title,
		price: product.variants[0].price,
		comparisonPrice: product.variants[0].compare_at_price,
		image: product.image.src,
	}
}
