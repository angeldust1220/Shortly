export default function Hero(){
    return(
        <section className="hero | container">
            <img src={"/illustration-working.svg"} width={700} height={400} alt="illustration" draggable="false" />
            <div className="hero__heading">
                <h1>More than just<br/>shorter links</h1>
                <p> Build your brand&apos;s recognition and get detailed insights on how your links are performing.</p>
                <button type="button">Get Started</button>
            </div>        
        </section>
    )
}