import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
function Nav(){
    return(
        <>
        <nav className="mobile-nav">
        <Link to="/" className="fas fa-home">Home</Link>
        <Link to="/info" className="fas fa-info-circle">Info</Link>
        <Link to="/support" className="fas fa-hands-helping">Support</Link>
        <Link to="/involved" className="fas fa-users">Get Involved</Link>
        <Link to="/contact" className="">Contact Us</Link>
    </nav>
    
        <div className="header">
        <nav className="navbar">
            <div className="logo">
                <img src={logo} alt="#" />
            </div>
            <div className="nav-links">
                  <Link to="/" className='navbar-link'>Home</Link>
                  <Link to="/info" className='navbar-link'>Info</Link>
                  <Link to="/support" className='navbar-link'>Support</Link>
                  <Link to="/involved" className='navbar-link'>Get Involved</Link>
                  <Link to="/contact" className='navbar-link'>Contact Us</Link>
            </div>
        </nav>
        </div>
        </>
    )
}
export default Nav;