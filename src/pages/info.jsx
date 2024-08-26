import React from "react";
import Nav from "../components/nav";
import Footer from "../components/footer";
function Info(){
    return(
        <div>
           <Nav/> 
    <main>
        <section id="info-hero">
            <div class="container">
                <h1>Understanding and Supporting Mental Health</h1>
                <p>Join us in raising awareness and providing support for those facing mental health challenges.</p>
                <a href="#" class="cta-button">Learn More</a>
            </div>
        </section>

        <div class="container">
            <div class="info-grid">
                <section id="about-depression" class="info-box">
                    <div class="info-content">
                        <h2>What is Depression?</h2>
                        <p>Depression is a common and serious medical illness that negatively affects how you feel, think, and act. It's characterized by persistent feelings of sadness and loss of interest in activities.</p>
                    </div>
                </section>

                <section id="depression-facts" class="info-box">
                    <div class="info-content">
                        <h2>Facts and Statistics</h2>
                        <ul class="fact-list">
                            <li>Affects 1 in 15 adults annually</li>
                            <li>16.6% experience it in their lifetime</li>
                            <li>Often first appears in late teens to mid-20s</li>
                            <li>Women are more likely to experience it</li>
                        </ul>
                    </div>
                </section>

                <section id="depression-symptoms" class="info-box">
                    <div class="info-content">
                        <h2>Common Symptoms</h2>
                        <ul class="symptoms-list">
                            <li>Persistent sad or empty mood</li>
                            <li>Loss of interest in activities</li>
                            <li>Changes in appetite or weight</li>
                            <li>Sleep disturbances</li>
                            <li>Fatigue or loss of energy</li>
                            <li>Feelings of worthlessness or guilt</li>
                            <li>Difficulty concentrating</li>
                            <li>Thoughts of death or suicide</li>
                        </ul>
                    </div>
                </section>

                <section id="identifying-depression" class="info-box">
                    <div class="info-content">
                        <h2>Identifying Depression in Others</h2>
                        <ul class="identification-list">
                            <li>Persistent sad or anxious mood</li>
                            <li>Social withdrawal</li>
                            <li>Expressing hopelessness</li>
                            <li>Increased irritability</li>
                            <li>Changes in eating/sleeping patterns</li>
                            <li>Difficulty making decisions</li>
                            <li>Unexplained physical symptoms</li>
                            <li>Talking about death or suicide</li>
                        </ul>
                    </div>
                </section>
            </div>

            <section id="resources">
                <h2>Helpful Resources</h2>
                <div class="resource-links">
                    <a href="#" class="resource-button">
                        <i class="fas fa-book"></i>
                        Learn More
                    </a>
                    <a href="#" class="resource-button">
                        <i class="fas fa-phone"></i>
                        Helpline
                    </a>
                    <a href="#" class="resource-button">
                        <i class="fas fa-user-md"></i>
                        Find a Therapist
                    </a>
                    <a href="#" class="resource-button">
                        <i class="fas fa-users"></i>
                        Support Groups
                    </a>
                </div>
            </section>
        </div>
    </main>
    <Footer/>
        </div>
    )
}

export default Info;