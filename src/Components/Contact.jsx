import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../styles/css/contact.css';

const Contact = () => {
  return (
    <section>
      <div className='section-header'>
        <div className='container-form'>
          <h2>Contact Us</h2>
        </div>
      </div>

      <div className='container-form'>
        <div className='row'>
          <div className='contact-info'>
            <div className='contact-info-item'>
              <div className='contact-info-icon'>
                <FontAwesomeIcon icon={faHome} />
              </div>

              <div className='contact-info-content'>
                <h4>Address</h4>
                <p>
                  1234 Something Else Road,
                  <br /> Peoria, Illinois, <br />
                  55555
                </p>
              </div>
            </div>

            <div className='contact-info-item'>
              <div className='contact-info-icon'>
                <FontAwesomeIcon icon={faPhone} />
              </div>

              <div className='contact-info-content'>
                <h4>Phone</h4>
                <p>571-457-2321</p>
              </div>
            </div>

            <div className='contact-info-item'>
              <div className='contact-info-icon'>
                <FontAwesomeIcon icon={faEnvelope} />
              </div>

              <div className='contact-info-content'>
                <h4>Email</h4>
                <p>ntamerrwael@mfano.ga</p>
              </div>
            </div>
          </div>

          <div className='contact-form'>
            <form action='' id='contact-form'>
              <h2>Send Message</h2>
              <div className='input-box'>
                <input type='text' required name='' />
                <span>Full Name</span>
              </div>

              <div className='input-box'>
                <input type='email' required name='' />
                <span>Email</span>
              </div>

              <div className='input-box'>
                <textarea required name=''></textarea>
                <span>Type your Message...</span>
              </div>

              <div className='input-box'>
                <input type='submit' value='Send' name='' />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
