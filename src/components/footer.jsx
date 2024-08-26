import React from 'react';
import '../styles/style.css'
function Footer(){
    return (
        <footer>
        <div class="footer-content">
            <div class="footer-section about">
                <h3>About Us</h3>
                <p>We are dedicated to raising awareness about mental health and providing support to those in need.</p>
            </div>
            <div class="footer-section links">
                <h3>Quick Links</h3>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="info.html">Information</a></li>
                    <li><a href="support.html">Support</a></li>
                    <li><a href="involved.html">Get Involved</a></li>
                    <li><a href="contact.html">Contact Us</a></li>
                </ul>
            </div>
            <div class="footer-section contact">
                <h3>Contact Us</h3>
                <p><i class="fas fa-phone"></i> 0794674689</p>
                <p><i class="fas fa-envelope"></i> igirimbabazie72@gmail.com</p>
            </div>
            <div class="footer-section social">
                <h3>Follow Us</h3>
                <div class="social-icons">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><span className="fab fa-facebook"></span></a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2024 Comscat. All rights reserved.</p>
        </div>
    </footer>
    )
}

export default Footer;