import React from 'react';
import './Style/FooterStyle.css';

const Footer = () => {
    return (
        <footer id="footer">
            <div className="footer-link-div">
                <a href="https://www.instagram.com/"> <i className="fab fa-instagram-square fa-3x footer-link "> </i></a>
                <a href="https://twitter.com/">       <i className="fab fa-twitter-square fa-3x footer-link">    </i></a>
                <a href="https://www.facebook.com/">  <i className="fab fa-facebook-square fa-3x footer-link">   </i></a>
                <a href="https://www.linkedin.com/">  <i className="fab fa-linkedin fa-3x footer-link">          </i></a>
            </div>
            <p>© Copyright 2018 Capgemini</p>
        </footer>

    )
}

export default Footer;