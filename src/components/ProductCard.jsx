import SmartImage from './SmartImage'
import './ProductCard.css'

export default function ProductCard({ product }) {
  const { title, image, price, currency, checkoutUrl, available } = product

  return (
    <li className="product-card card">
      <div className="product-card__image-wrap">
        <SmartImage src={image} placeholderClassName="product-card__placeholder" />
        {!available && <span className="product-card__badge">Sold out</span>}
      </div>

      <h3 className="product-card__title">{title}</h3>
      {price && (
        <p className="product-card__price">
          {currency === 'USD' || !currency ? '$' : `${currency} `}
          {price}
        </p>
      )}

      <a
        className={`btn ${available ? 'btn-primary' : 'btn-outline'} product-card__cta`}
        href={checkoutUrl}
        target="_blank"
        rel="noreferrer noopener"
        aria-disabled={!available}
        onClick={(e) => {
          if (!available) e.preventDefault()
        }}
      >
        {available ? 'Buy now' : 'Sold out'}
      </a>
    </li>
  )
}
