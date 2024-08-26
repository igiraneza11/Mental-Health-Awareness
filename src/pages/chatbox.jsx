import React from 'react';
import '../styles/chatbox.css'
function Chatbox() {
    return(
        
    <div id="chatbot-container">
    <div id="chat-header">
        <a href="support.html" id="back-button" class="nav-button">
            <i class="fas fa-arrow-left"></i>
        </a>
        Depression Support Chatbot
        <a href="index.html" id="home-button" class="nav-button">
            <i class="fas fa-home"></i>
        </a>
    </div>
    <div id="chat-messages"></div>
    <div id="chat-input">
        <input type="text" id="user-input" placeholder="Type your message..."/>
        <button id="send-message"><i class="fas fa-paper-plane"></i></button>
    </div>
</div>
    )
}

export default Chatbox;