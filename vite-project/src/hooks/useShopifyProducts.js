import { useEffect, useState } from 'react'

const SHOPIFY_DOMAIN = import.meta.env.VITE_SHOPIFY_DOMAIN
const STOREFRONT_TOKEN = import.meta.env.VITE_SHOPIFY_STOREFRONT_TOKEN
const API_VERSION = '2024-10'

const PRODUCTS_QUERY = `
  query Products($first: Int!) {
    products(first: $first, sortKey: CREATED_AT, reverse: true) {
      edges {
        node {
          id
          title
          handle
          availableForSale
          featuredImage {
            url
            altText
          }
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
          variants(first: 1) {
            edges {
              node {
                id
              }
            }
          }
        }
      }
    }
  }
`

function mapProductNode(node) {
  return {
    id: node.id,
    title: node.title,
    handle: node.handle,
    available: node.availableForSale,
    image: node.featuredImage?.url || null,
    price: node.priceRange?.minVariantPrice?.amount || null,
    currency: node.priceRange?.minVariantPrice?.currencyCode || 'USD',
    checkoutUrl: SHOPIFY_DOMAIN ? `https://${SHOPIFY_DOMAIN}/products/${node.handle}` : '#',
  }
}

export function useShopifyProducts() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false

    async function fetchProducts() {
      if (!SHOPIFY_DOMAIN || !STOREFRONT_TOKEN) {
        if (!cancelled) {
          setError('Shop is not configured yet.')
          setLoading(false)
        }
        return
      }

      setLoading(true)
      setError(null)

      try {
        const response = await fetch(
          `https://${SHOPIFY_DOMAIN}/api/${API_VERSION}/graphql.json`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'X-Shopify-Storefront-Access-Token': STOREFRONT_TOKEN,
            },
            body: JSON.stringify({
              query: PRODUCTS_QUERY,
              variables: { first: 24 },
            }),
          },
        )

        if (!response.ok) {
          throw new Error(`Shop request failed (${response.status})`)
        }

        const { data, errors } = await response.json()

        if (errors?.length) {
          throw new Error(errors[0].message)
        }

        const edges = data?.products?.edges || []
        const mapped = edges.map((edge) => mapProductNode(edge.node))

        if (!cancelled) {
          setProducts(mapped)
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message || 'Could not load the shop right now.')
        }
      } finally {
        if (!cancelled) {
          setLoading(false)
        }
      }
    }

    fetchProducts()

    return () => {
      cancelled = true
    }
  }, [])

  return { products, loading, error }
}
