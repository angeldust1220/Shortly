import PropTypes from 'prop-types'

export default function PricingCard({subHeading, price, bullet1, bullet2, bullet3}){
    return(
        <article className="article">
            {
                price === '49' ?
                <div className='article__value'>
                    <p>Best</p>
                </div> : null
            }
            <div className='article__heading'>
                <h2>{subHeading}</h2>
                <p>${price}<sub>mo</sub></p>
            </div>
            <div className="article__bullets">
                <p>{bullet1}</p>
                <p>{bullet2}</p>
                <p>{bullet3}</p>
            </div>
            <button type="button">Select</button>
        </article>
    )
}

PricingCard.propTypes = {
    subHeading: PropTypes.string,
    price: PropTypes.string,
    bullet1: PropTypes.string,
    bullet2: PropTypes.string,
    bullet3: PropTypes.string
}