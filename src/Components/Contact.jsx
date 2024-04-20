import React from 'react';
import '../styles/css/contact.css';

const Contact = () => {
  return (
    <>
      <div class='flex-container'>
        <div class='image-container'>
          <img
            src='https://pngfre.com/wp-content/uploads/cat-poster.png'
            alt='Image Description'
          />
        </div>
        <div class='content-container'>
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
      </div>
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
