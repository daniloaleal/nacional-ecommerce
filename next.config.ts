import type { NextConfig } from "next"

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "cdn.shopify.com",
			},
		],
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
}

export default nextConfig
