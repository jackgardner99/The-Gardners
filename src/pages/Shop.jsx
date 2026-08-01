import { useShopifyProducts } from '../hooks/useShopifyProducts'
import ProductCard from '../components/ProductCard'
import './Shop.css'

const FAN_PACKS = [
  {
    tier: 'Seedling',
    price: '$5/mo',
    description: 'Early access to tickets, monthly demo drops, and the fan-only newsletter.',
  },
  {
    tier: 'Homestead',
    price: '$15/mo',
    description: 'Everything in Seedling, plus quarterly merch discounts and livestream access.',
  },
  {
    tier: 'Orchard',
    price: '$30/mo',
    description:
      'Everything in Homestead, plus a signed physical release each year and your name in the liner notes.',
  },
]

const BANDZOOGLE_URL = 'https://thegardners.bandzoogle.com/membership'

export default function Shop() {
  const { products, loading, error } = useShopifyProducts()

  return (
    <>
      <section className="section fan-packs">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Join the family</span>
            <h1>Fan Packs</h1>
            <p className="shop-page__intro">
              Membership perks and behind-the-scenes access, hosted on our Bandzoogle page.
            </p>
          </div>

          <div className="grid grid--3">
            {FAN_PACKS.map((pack) => (
              <div key={pack.tier} className="card fan-pack">
                <h3 className="fan-pack__tier">{pack.tier}</h3>
                <p className="fan-pack__price">{pack.price}</p>
                <p className="fan-pack__desc">{pack.description}</p>
                <a
                  className="btn btn-primary fan-pack__cta"
                  href={BANDZOOGLE_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Join on Bandzoogle
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="stitch container" />

      <section className="section shop-page">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow eyebrow--alt">Take a piece home</span>
            <h2>Shop</h2>
            <p className="shop-page__intro">Merch, straight from the merch table to your door.</p>
          </div>

          {loading && (
            <p className="shop-page__status" role="status">
              Loading merch&hellip;
            </p>
          )}

          {!loading && error && (
            <p className="shop-page__status shop-page__status--error" role="alert">
              We couldn't load the shop right now. Try again shortly, or catch us at a show.
            </p>
          )}

          {!loading && !error && products.length === 0 && (
            <p className="shop-page__status">No merch listed yet — check back soon.</p>
          )}

          {!loading && !error && products.length > 0 && (
            <ul className="grid grid--3">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </ul>
          )}
        </div>
      </section>
    </>
  )
}
