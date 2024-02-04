export default function About(){
    return(
        <main className="about">
            
            <div className="wrapper | container">
                <h1>Shortly, your trusted partner in simplifying links.</h1>
                <img className="hero-img" src={"/about-us.svg"} alt="illustration" draggable="false" />          
            </div>

            <section className="about__mission ">
                <div className="container">
                    <h2>Our Mission</h2>
                    <p>At Shortly, we&apos;re dedicated to providing you with a fast, reliable, and user-friendly URL shortening service. Our mission is to empower individuals, businesses, and organizations to effectively manage and share their content with ease.</p>
                </div>
            </section>

            <section className="about__team | container">
                <img src="/who.svg" alt="illustration" draggable="false"/>
                <div className="wrapper">
                    <h2>Who We Are</h2>
                    <p>We are a team of passionate tech enthusiasts with a shared vision of streamlining the online experience. With a wealth of experience in web development and digital marketing, we recognized the need for a user-centric URL shortening solution. Shortly was born out of this desire to offer a service that puts you, the user, at the forefront.</p>                   
                </div>
                
            </section>
            
            <section className="about__difference">
                <div className="container">
                    <h2>What Sets Us Apart</h2>
                    <div className="about__difference--group">
                        <div className="about__difference--cell">
                            <h3>Customized Solutions</h3>
                            <p>We understand that one size doesn&apos;t fit all. That&apos;s why we offer customizable options to tailor your experience based on your unique needs.</p>
                        </div>
                        <div className="about__difference--cell">
                            <h3>Unparalleled Security</h3>
                            <p>Your privacy and security are our top priorities. Our robust encryption protocols ensure that your data remains confidential.</p>
                        </div>
                        <div className="about__difference--cell">
                            <h3>Transparent Analytics</h3>
                            <p>Gain insights into the performance of your links with our comprehensive analytics dashboard. Track clicks, locations, and more.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about__contact">
                <div className="wrapper | container">
                    <div className="about__contact--text">
                        <p>Get In Touch</p>
                        <h2>Have questions or need assistance? We&apos;re here to help! Feel free to reach out to us via our Contact Page.</h2>
                    </div>
                    <form action="">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="name" placeholder="Name" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" name="email" id="email" placeholder="sample@email.com" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Inquiry</label>
                            <textarea name="message" id="message" placeholder="Message" required/>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </section>
        </main>
    )
}