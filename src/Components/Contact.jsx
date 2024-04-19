import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../styles/css/contact.css';

const Contact = () => {
  return (
    <form id='form' className='topBefore'>
      <input id='name' type='text' placeholder='NAME' />
      <input id='email' type='text' placeholder='E-MAIL' />
      <textarea id='message' type='text' placeholder='MESSAGE'></textarea>
      <input id='submit' type='submit' value='GO!' />
    </form>
  );
};

export default Contact;
