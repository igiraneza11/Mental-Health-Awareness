import React from "react"
import { useNavigate } from 'react-router-dom';
import Nav from "../components/nav";
import Footer from "../components/footer";
function Support(){

    const navigate = useNavigate();

    const handleLinkClick = (event) => {
      event.preventDefault();
      navigate('/chatbox');
    };

    return(
        <div>
            <Nav/>
                <main>
        <section id="support-hero">
            <div className="container">
                <h1>Support and Resources</h1>
                <p>Find help, information, and coping strategies for depression.</p>
            </div>
        </section>

        <section id="helpful-resources">
            <div className="container">
                <h2>Helpful Resources</h2>
                <div className="resource-grid">
                    <div className="resource-card">
                        <h3>Chat Bot</h3>
                        <p>Reduce depression with our chat bot</p>
                        <p>Chat bot</p>
                        {/* <a href="../components/chatbox.jsx" className="resource-link" target="_parent">Start chat</a> */}
                        <a href="/chatbox" onClick={handleLinkClick}>Start chat</a>
                    </div>
                    <div className="resource-card">
                        <h3>Ai Powered emotional companion</h3>
                        <p>Information, support, and advocacy</p>
                        <a href="#" className="resource-link" target="_blank">Start accessing yourself</a>
                        
                    </div>
                    <div className="resource-card">
                        <h3>Gamified Progress Tracking</h3>
                        <p>Play and know where your depression rate exceeds</p>
                        <a href="#" className="resource-link" target="_blank">Start Playing Game</a>
                    </div>
                </div>
            </div>
        </section>

        <section id="self-care-tips">
            <div className="container">
                <h2>Self-Care and Coping Strategies</h2>
                <div className="support-grid">
                    <div className="support-card">
                        <i className="fas fa-heart"></i>
                        <h3>Practice Self-Compassion</h3>
                        <p>Be kind to yourself and practice positive self-talk.</p>
                    </div>
                    <div className="support-card">
                        <i className="fas fa-running"></i>
                        <h3>Regular Exercise</h3>
                        <p>Engage in physical activity to boost mood and reduce stress.</p>
                    </div>
                    <div className="support-card">
                        <i className="fas fa-bed"></i>
                        <h3>Maintain Sleep Hygiene</h3>
                        <p>Establish a consistent sleep schedule and create a relaxing bedtime routine.</p>
                    </div>
                    <div className="support-card">
                        <i className="fas fa-users"></i>
                        <h3>Connect with Others</h3>
                        <p>Reach out to friends, family, or support groups for social connection.</p>
                    </div>
                    <div className="support-card">
                        <i className="fas fa-book"></i>
                        <h3>Mindfulness and Meditation</h3>
                        <p>Practice mindfulness techniques to stay present and reduce anxiety.</p>
                    </div>
                    <div className="support-card">
                        <i className="fas fa-utensils"></i>
                        <h3>Healthy Eating</h3>
                        <p>Maintain a balanced diet to support your physical and mental health.</p>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <Footer/>
        </div>
    )
}

export default Support;