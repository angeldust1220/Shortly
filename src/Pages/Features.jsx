export default function Features(){
    return(
        <main className="features">
            <section className="features__heading | container">
                <h1>Powerful Features to Enhance Your Link Management Experience</h1>
                <img src="/features-hero.svg" alt="illustration" draggable="false" />
            </section>

            <section className="features__card | container">
                <img src="/link.svg" alt="illustration" draggable="false" />
                <div className="features__card--text">
                    <h2>Custom Short URLs</h2>
                    <p>Allow users to create custom short URLs with meaningful keywords or names.</p>
                    <p>This feature provides a personal touch and makes it easier for users to remember and share their shortened links.</p>
                </div>
            </section>
            <section className="features__card">
                <div className="analytics | container">
                    <img src="/analytics.svg" alt="illustration" draggable="false" />
                    <div className="features__card--text">
                        <h2>Link Analytics</h2>
                        <p>Provide detailed analytics for each shortened URL.</p>
                        <p>Track metrics like the number of clicks, geographic location of users, referral sources, and more.</p>
                        <p>This feature helps users understand the performance of their links and optimize their strategies.</p>
                    </div>
                </div>
            </section>
            <section className="features__card | container">
                <img src="/date.svg" alt="illustration" draggable="false" />                
                <div className="features__card--text">
                    <h2>Expiration Dates</h2>
                    <p>Enable users to set expiration dates for their shortened URLs.</p>
                    <p>The link will automatically expire after the specified date, making it no longer accessible.</p>
                    <p>This feature can be useful for time-sensitive promotions or events, ensuring that the link is only valid for a specific period.</p>
                </div>
            </section>
        </main>
    )
}