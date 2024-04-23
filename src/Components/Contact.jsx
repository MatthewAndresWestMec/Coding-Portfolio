import React, { useEffect } from 'react';
import 'aos/dist/aos.css'; // Import AOS CSS
import AOS from 'aos'; // Import AOS library

import '../styles/css/contact.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with desired options
  }, []);

  return (
    <section id='contact' data-aos='fade-up'>
      <div className='contact-box'>
        <div className='contact-links'>
          <h2 className='contact-header'>CONTACT</h2>
          <div className='links'>
            <div className='link'>
              <a>
                <img
                  className='image-contact'
                  src='https://i.postimg.cc/m2mg2Hjm/linkedin.png'
                  alt='linkedin'
                />
              </a>
            </div>
            <div className='link'>
              <a>
                <img
                  className='image-contact'
                  src='https://i.postimg.cc/YCV2QBJg/github.png'
                  alt='github'
                />
              </a>
            </div>
            <div className='link'>
              <a>
                <img
                  className='image-contact'
                  src='https://i.postimg.cc/W4Znvrry/codepen.png'
                  alt='codepen'
                />
              </a>
            </div>
            <div className='link'>
              <a>
                <img
                  className='image-contact'
                  src='https://i.postimg.cc/NjLfyjPB/email.png'
                  alt='email'
                />
              </a>
            </div>
          </div>
        </div>
        <div
          className='contact-form-wrapper'
          data-aos='fade-up'
          data-aos-delay='200'>
          <form>
            <div className='form-item'>
              <input type='text' name='sender' required />
              <label>Name:</label>
            </div>
            <div className='form-item'>
              <input type='text' name='email' required />
              <label>Email:</label>
            </div>
            <div className='form-item'>
              <textarea className='' name='message' required></textarea>
              <label>Message:</label>
            </div>
            <button className='submit-btn'>Send</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
