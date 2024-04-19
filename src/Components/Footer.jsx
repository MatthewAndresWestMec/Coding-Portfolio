import React from 'react';
import '../styles/css/footer.css';
const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container1'>
        <div className='footer-content'>
          <div className='footer-logo'>
            <h2>&copy; Matthew Andres 2024</h2>

            <h3>Website Designer</h3>
          </div>
          <div className='footer-links'>
            <ul className='footer-menu'>
              <li>
                <a href='/home' className='footer-link'>
                  Home
                </a>
              </li>
              <li>
                <a href='/about' className='footer-link'>
                  About
                </a>
              </li>
              <li>
                <a href='/gallery' className='footer-link'>
                  Gallery
                </a>
              </li>
            </ul>
          </div>
          <div className='footer-social'>
            <ul className='social-icons'>
              <li>
                <a href='#'>
                  <i className='fab fa-facebook-f'></i>
                </a>
              </li>
              <li>
                <a href='#'>
                  <i className='fab fa-twitter'></i>
                </a>
              </li>
              <li>
                <a href='#'>
                  <i className='fab fa-instagram'></i>
                </a>
              </li>
              <li>
                <a href='#'>
                  <i className='fab fa-linkedin-in'></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
