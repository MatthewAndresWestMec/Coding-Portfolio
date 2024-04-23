import React from 'react';
import '../styles/css/contact.css';

const Contact = () => {
  return (
    <>
      <section id='contact'>
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
          <div className='contact-form-wrapper'>
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
      {/* <div className='flex-container'>
        <div className='image-container'>
          <img
            src='https://pngfre.com/wp-content/uploads/cat-poster.png'
            alt='Image Description'
          />
        </div>
        <div className='content-container'>
          <div className='right'>
            <h2 className='header-text'>Contact Me</h2>
            <a className='email-link' href='mailto:your@email.com'>
              Want to talk to me via email?
            </a>
            <div className='small-title'>Or follow my social media</div>
            <ul className='social-list'>
              <li>
                <a href='https://github.com'>GitHub</a>
              </li>
              <li>
                <a href='https://linkedin.com'>LinkedIn</a>
              </li>
              <li>
                <a href='https://instagram.com'>Instagram</a>
              </li>
              <li>
                <a href='https://facebook.com'>Facebook</a>
              </li>
            </ul>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Contact;

{
  /* <div className='right'>
  <a className='email-link' href='mailto:your@email.com'>
    Want to talk to me via email?
  </a>
  <h2>Follow my social media</h2>
  <ul className='social-list'>
    <li>
      <a href='https://github.com'>GitHub</a>
    </li>
    <li>
      <a href='https://linkedin.com'>LinkedIn</a>
    </li>
    <li>
      <a href='https://instagram.com'>Instagram</a>
    </li>
    <li>
      <a href='https://facebook.com'>Facebook</a>
    </li>
  </ul>
</div>; */
}
