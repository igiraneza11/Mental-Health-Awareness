import React from 'react';
import home from '../assets/New Mental Health Certification Will Help Create Healthier Workplaces.jpg'
import Education from '../assets/health.png'
import Support from '../assets/support_agent_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png'
import Treatment from '../assets/home_health_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png'
import Nav from '../components/nav';
import Footer from '../components/footer';

function Home(){
    return(
        <>
        <Nav/>
        <main>
        <section id="hero">
            <div class="hero-content">
                <h1>Understanding and Supporting Mental Health</h1>
                <p>Join us in raising awareness and providing support for those facing mental health challenges.</p>
                <a href="#" class="cta-button">Learn More</a>
            </div>
        </section>
        

        <div class="container">
            <section id="introduction">
                <h2>Introduction to Mental Health Challenges</h2>
                <div class="content-wrapper">
                    <img src={home} alt="" />
                    <div>
                        <p>Mental health is a crucial aspect of overall well-being, affecting how we think, feel, and act. Despite its importance, many people face challenges in maintaining good mental health, often struggling in silence.</p>
                        <p>Our website aims to shed light on these challenges, provide valuable information, and offer support to those in need. By understanding and addressing mental health issues, we can create a more compassionate and supportive society.</p>
                    </div>
                </div>
            </section>

            <section id="importance">
                <h2>Why Raising Awareness Matters</h2>
                <div class="card-container">
                    <div class="card">
                        <img src={Education} alt="" />
                        <h3>Education</h3>
                        <p>Informing people about mental health reduces stigma and promotes understanding.</p>
                    </div>
                    <div class="card">
                        <img src={Support} alt="" srcset="" />
                        <h3>Support</h3>
                        <p>Awareness leads to better support systems for those facing mental health challenges.</p>
                    </div>
                    <div class="card">
                        <img src={Treatment} alt="" />
                        <h3>Treatment</h3>
                        <p>Increased awareness encourages people to seek help and access appropriate treatment.</p>
                    </div>
                </div>
            </section>

            <section id="website-overview">
                <h2>What You'll Find on Our Website</h2>
                <ul>
                    <li>In-depth information about various mental health challenges</li>
                    <li>Resources for seeking help and support</li>
                    <li>Personal stories and experiences</li>
                    <li>Tips for maintaining good mental health</li>
                    <li>Ways to get involved and make a difference</li>
                </ul>
            </section>
        </div>
    </main>
    <Footer/>
    </>
    )
}
export default Home;