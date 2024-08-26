import React from 'react';
import member from '../assets/Untitled_design__3_-removebg-preview.png';
import team2 from '../assets/Untitled_design__4_-removebg-preview.png';
import team3 from '../assets/Untitledk - Copy.png';
import Nav from '../components/nav';
import Footer from '../components/footer';

function Contact(){
    return(
        <>
        <Nav/>
    <main>
    <section id="contact-hero">
        <div class="container">
            <h1>Contact Us</h1>
            <p>We're here to listen and help. Reach out to us with any questions or feedback.</p>
        </div>
    </section>

    <section id="contactForm">
        <div class="container">
            <form action="/send-email" method="POST">
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required/>
                </div>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required/>
                </div>
                <div class="form-group">
                    <label for="message">Message:</label>
                    <textarea id="message" name="message" required></textarea>
                </div>
                <button type="submit" class="submit-button">Send Message</button>
            </form>
        </div>
    </section>

    <section id="social-media">
        <div class="container">
            <h2>Connect With Us</h2>
            <div class="social-icons">
                <a href="#" class="social-icon"><i class="fab fa-facebook-f"></i></a>
                <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
                <a href="#" class="social-icon"><i class="fab fa-instagram"></i></a>
                <a href="#" class="social-icon"><i class="fab fa-linkedin-in"></i></a>
            </div>
        </div>
    </section>

    <section id="team-members">
        <div class="container">
            <h2>Our Team</h2>
            <div class="team-grid">
                <div class="team-member">
                    <img src={member} alt="Team Member 1"/>
                    <h3>NSHUTI Olivier</h3>
                    <p>Clinical Psychologist</p>
                    <p>NSHUTI specializes in cognitive behavioral therapy and has been helping individuals overcome depression for over 15 years.</p>
                </div>
                <div class="team-member">
                    <img src={team2} alt="Team Member 2"/>
                    <h3>IGIRIMBABAZI Ezekiel</h3>
                    <p>Mental Health Advocate</p>
                    <p>Ezekiel is a passionate advocate for mental health awareness and has personal experience overcoming depression.</p>
                </div>
                <div class="team-member">
                    <img src={team3} alt="Team Member 3"/>
                    <h3>KALISA Auxille</h3>
                    <p>Support Group Facilitator</p>
                    <p>KALISA leads our support groups and creates a safe, welcoming environment for individuals to share their experiences.</p>
                </div>
            </div>
        </div>
    </section>
</main>
<Footer/>
</>
    );
}

export default  Contact;