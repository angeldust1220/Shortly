import PricingCard from "../Components/PricingCard";

export default function Pricing(){
    const PRICING_DATA = [
        {
            subHeading: 'Basic',
            price: '10',
            bullet1: 'Unlimited URL Shortening',
            bullet2: 'Customized Short Links',
            bullet3: 'Basic Traffic Analytics:'
        },
        {
            subHeading: 'Pro',
            price: '49',
            bullet1: 'Previous Tier Benefits',
            bullet2: 'Password Protection',
            bullet3: 'Advanced Analytics:'
        },
        {
            subHeading: 'Business',
            price: '99',
            bullet1: 'Previous Tier Benefits',
            bullet2: 'Link Expiration Dates',
            bullet3: 'Domain Integration'
        }
    ];

    return(
        <main className="pricing | container">
            <section className="pricing__heading">
                <div className="pricing__heading--text">
                    <h1>Pricing</h1>
                    <p>Discover Your Ideal Plan. Find the pricing option that best suits your business, whether you&apos;re a startup, growing enterprise, or established industry leader. Benefit from transparent pricing with the flexibility to adapt as your needs change. Explore our tailored plans today.</p>
                </div>
                <img src="/pricing.svg" alt="illustration" draggable="false"/>
            </section>
            <section className="pricing__cards">
                {
                    PRICING_DATA.map(tier => {
                        return(
                            <PricingCard 
                                key={tier.price}
                                subHeading={tier.subHeading}
                                price={tier.price}
                                bullet1={tier.bullet1}
                                bullet2={tier.bullet2}
                                bullet3={tier.bullet3}
                            />
                        )
                    }) 
                }
            </section>
        </main>
    )
}