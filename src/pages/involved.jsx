import Nav from "../components/nav";
import Footer from "../components/footer";
function Involved(){
    return(
        <div>
          <Nav/>  
    <main>
        <section id="get-involved-hero">
            <div class="container">
                <h1>Get Involved</h1>
                <p>Join us in the fight against depression. Your support can make a difference.</p>
            </div>
        </section>

        <section id="involvement-options">
            <div class="container">
                <div class="involvement-grid">
                    <div class="involvement-card">
                        <i class="fas fa-hand-holding-heart"></i>
                        <h2>Donate</h2>
                        <p>Your financial support helps us continue our mission to raise awareness and provide resources for those affected by depression.</p>
                        <a href="#" class="cta-button">Donate Now</a>
                    </div>
                    <div class="involvement-card">
                        <i class="fas fa-users"></i>
                        <h2>Volunteer</h2>
                        <p>Lend your time and skills to our cause. We have various volunteering opportunities available.</p>
                        <a href="#" class="cta-button">Become a Volunteer</a>
                    </div>
                    <div class="involvement-card">
                        <i class="fas fa-share-alt"></i>
                        <h2>Spread Awareness</h2>
                        <p>Help us reach more people by sharing our message on social media and in your community.</p>
                        <div class="social-share">
                            <a href="#" class="social-icon"><i class="fab fa-facebook-f"></i></a>
                            <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
                            <a href="#" class="social-icon"><i class="fab fa-instagram"></i></a>
                            <a href="#" class="social-icon"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="impact">
            <div class="container">
                <h2>Your Impact</h2>
                <p>By getting involved, you're helping us:</p>
                <ul class="impact-list">
                    <li>Provide support to those struggling with depression</li>
                    <li>Fund research for better treatment options</li>
                    <li>Educate communities about mental health</li>
                    <li>Reduce stigma surrounding depression</li>
                </ul>
            </div>
        </section>
    </main>
    <Footer/>
        </div>
    )
}
export default Involved;