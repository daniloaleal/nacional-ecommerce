import axios from "axios"

export const shopifyAdmin = axios.create({
	baseURL: `https://${process.env.SHOPIFY_STORE_URL}/admin/api/2025-01`,
	headers: {
		"Content-Type": "application/json",
		"X-Shopify-Access-Token": process.env.SHOPIFY_ADMIN_API_TOKEN,
	},
})

interface PushToShopifyStorefront {
	query: string
	variables?: Record<string, unknown>
}

export const pushToShopifyStorefront = async ({
	query,
	variables = {},
}: PushToShopifyStorefront) => {
	const response = await axios.post(
		`https://${process.env.SHOPIFY_STORE_URL}/api/2025-04/graphql.json`,
		{ query, variables },
		{
			headers: {
				"Content-Type": "application/json",
				"X-Shopify-Storefront-Access-Token":
					process.env.SHOPIFY_STOREFRONT_API_TOKEN,
			},
		}
	)

	return response.data
}

interface PushToShopifyAdmin {
	query: string
	variables?: Record<string, unknown>
}

export const pushToShopifyAdmin = async ({
	query,
	variables = {},
}: PushToShopifyAdmin) => {
	const response = await axios.post(
		`https://${process.env.SHOPIFY_STORE_URL}/admin/api/2025-01/graphql.json`,
		{ query, variables },
		{
			headers: {
				"Content-Type": "application/json",
				"X-Shopify-Access-Token": process.env.SHOPIFY_ADMIN_API_TOKEN,
			},
		}
	)

	return response.data
}

export interface ProductEdgeNode {
	id: string
	title: string
	descriptionHtml: string
	handle: string
	options: Array<{
		name: string
		values: string[]
	}>
	images: {
		edges: Array<{
			node: {
				originalSrc: string
			}
		}>
	}
	variants: {
		edges: Array<{
			node: {
				price: string
				compareAtPrice: string | null
			}
		}>
	}
	metafields: {
		edges: Array<{
			node: {
				namespace: string
				key: string
				value: string
			}
		}>
	}
}

export interface FormattedProduct {
	id: string
	title: string
	description: string
	image: string
	images: string[]
	price: string
	compareAtPrice: string | null
	sizes: string[]
	colors: string[]
	slug: string
	url: string
	mercadolivreUrl: string
	shopeeUrl: string
}

const formatShopifyProduct = (product: ProductEdgeNode): FormattedProduct => {
	const variant = product.variants?.edges[0]?.node

	return {
		id: product.id,
		title: product.title,
		description: product.descriptionHtml,
		image: product.images?.edges[0]?.node.originalSrc ?? "",
		images: product.images?.edges.map(({ node }) => node.originalSrc) ?? [],
		price: variant?.price ?? "0.00",
		compareAtPrice: variant?.compareAtPrice ?? null,
		sizes:
			product.options?.find(({ name }) => name === "Tamanho")?.values ||
			[],
		colors:
			product.options?.find(({ name }) => name === "Cor")?.values || [],
		slug: product.handle,
		url: `/product/${product.handle}`,
		mercadolivreUrl:
			product.metafields?.edges?.find(
				({ node: { key } }) => key === "mercadolivre"
			)?.node.value ?? "",
		shopeeUrl:
			product.metafields?.edges?.find(
				({ node: { key } }) => key === "shopee"
			)?.node.value ?? "",
	}
}

export const getProductsByIds = async (
	ids: string[]
): Promise<FormattedProduct[]> => {
	if (!ids.length) return []

	const query = `
    query {
      nodes(ids: [${ids.map(id => `"${id}"`).join(",")}]) {
        ... on Product {
          id
          title
          descriptionHtml
          handle
          options {
            name
            values
          }
          images(first: 4) {
            edges {
              node {
                originalSrc
              }
            }
          }
          variants(first: 1) {
            edges {
              node {
                price
                compareAtPrice
              }
            }
          }
		  metafields(first: 2) {
			edges {
				node {
					namespace
					key
					value
				}
			}
		  }
        }
      }
    }
  `

	const response = await pushToShopifyAdmin({ query })
	const products = response.data.nodes.filter(Boolean) as ProductEdgeNode[]

	return products.map(formatShopifyProduct)
}

export const getProductsFromCollections = async (
	collections: string[],
	filters: string
): Promise<FormattedProduct[]> => {
	const query = `
	query {
	  ${collections
			.map(
				(collectionId, index) => `
		collection${index}: collection(id: "gid://shopify/Collection/${collectionId}") {
		  products(${filters}) {
			edges {
			  node {
				id
				title
				descriptionHtml
				handle
				options {
				  name
				  values
				}
				images(first: 4) {
				  edges {
					node {
					  originalSrc
					}
				  }
				}
				variants(first: 1) {
				  edges {
					node {
					  price
					  compareAtPrice
					}
				  }
				}
				metafields(first: 2) {
				  edges {
					node {
					  namespace
					  key
					  value
					}
				  }
				}
			  }
			}
		  }
		}
	  `
			)
			.join("\n")}
	}
  `

	const response = await pushToShopifyAdmin({ query })
	const allProducts: ProductEdgeNode[] = []

	collections.forEach((_, index) => {
		const collectionKey = `collection${index}`
		const productEdges =
			response.data?.[collectionKey]?.products?.edges ?? []

		productEdges.forEach(({ node }: { node: ProductEdgeNode }) => {
			allProducts.push(node)
		})
	})

	return allProducts.map(formatShopifyProduct)
}

interface GetProducts {
	filters?: string
}

export const getProducts = async ({
	filters = "",
}: GetProducts): Promise<FormattedProduct[]> => {
	const query = `
    query {
      products(${filters}) {
        edges {
          node {
            id
            title
            descriptionHtml
            handle
            options {
              name
              values
            }
            images(first: 4) {
              edges {
                node {
                  originalSrc
                }
              }
            }
            variants(first: 1) {
              edges {
                node {
                  price
                  compareAtPrice
                }
              }
            }
			metafields(first: 2) {
			  edges {
			    node {
				  namespace
				  key
				  value
				}
			  }
		    }
          }
        }
      }
    }
  `

	const response = await pushToShopifyAdmin({ query })
	const edges = response.data.products?.edges ?? []

	return edges.map(({ node }: { node: ProductEdgeNode }) =>
		formatShopifyProduct(node)
	)
}
