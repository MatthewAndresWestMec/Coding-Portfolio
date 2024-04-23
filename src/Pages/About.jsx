import React from 'react';
import Navigation from '../Components/Navigation';
import Footer from '../Components/Footer';
import Accordion from '../Components/Accordion';
import Contact from '../Components/Contact';
import '../styles/css/about.css';
const About = () => {
  return (
    <div>
      <Navigation />
      <br></br>
      <h1 className='under'>About Me</h1>

      <div className='flex-container'>
        <div className='image-container'>
          <img
            src='https://pngfre.com/wp-content/uploads/cat-poster.png'
            alt='Image Description'
          />
        </div>
        <div className='content-container'>
          <h2 className='header-text'>Matthew Andres</h2>
          <p className='paragraph-text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus enim, deleniti blanditiis quam consectetur aliquid fuga
            assumenda perspiciatis earum quisquam atque libero architecto qui
            labore facere pariatur odit, optio est repellat iure. Voluptas animi
            vero, deserunt, ratione, corrupti vel repudiandae ipsam natus quas
            temporibus enim.
          </p>
        </div>
      </div>

      <div className='flex-container'>
        <div className='content-container'>
          <h2 className='header-text'>My Experience</h2>
          <div className='paragraph-text'>
            <Accordion />
          </div>
        </div>
        <div className='image-container'>
          <img
            src='https://pngfre.com/wp-content/uploads/cat-poster.png'
            alt='Image Description'
          />
        </div>
      </div>

      <div className='button-section'>
        <h1>RESUME & WORK</h1>
        <div className='flex-container1'>
          <div className='resume-container twelve'>
            <button src='https://docs.google.com/document/d/1oxg7LS5m8v7maFx-PvKB1F83KzFOglrogu6Cfv8z3bE/edit?usp=sharing'>
              Resume
            </button>
          </div>
          <div className='work-container twelve'>
            <button src='/about'>Work</button>
          </div>
        </div>
      </div>

      <Contact />
      <Footer />
    </div>
  );
};

export default About;
