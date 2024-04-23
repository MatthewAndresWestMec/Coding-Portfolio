import React, { useEffect } from 'react';
import Navigation from '../Components/Navigation';
import Footer from '../Components/Footer';
import Accordion from '../Components/Accordion';
import Contact from '../Components/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/css/about.css';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease',
      once: true, // Only animate once
    });
  }, []);

  return (
    <div>
      <Navigation />
      <br />
      <h1 className='under'>About Me</h1>

      <div className='flex-container' data-aos='fade-up'>
        <div className='image-container'>
          <img
            src='https://pngfre.com/wp-content/uploads/cat-poster.png'
            alt='Image Description'
          />
        </div>
        <div className='content-container'>
          <h2 className='header-text'>Matthew Andres</h2>
          <p className='paragraph-text'>
            I am a high school student currently attending Sunrise Mountain High
            School and West-Mec North East Campus for Coding. My academic
            journey has led me to pursue a degree in Biological Science at
            Arizona State University. With a passion for healthcare and a keen
            interest in dentistry, optometry, and pharmaceuticals, I am excited
            to embark on this path towards a rewarding career in healthcare.
          </p>
        </div>
      </div>

      <div className='flex-container' data-aos='fade-up'>
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

      <div className='button-section' data-aos='fade-up'>
        <h1>RESUME & WORK</h1>
        <div className='flex-container1'>
          <div className='resume-container twelve'>
            <button>
              <a
                className='button-a'
                href='https://docs.google.com/document/d/1oxg7LS5m8v7maFx-PvKB1F83KzFOglrogu6Cfv8z3bE/edit?usp=sharing'
                target='_blank'
                rel='noopener noreferrer'>
                Resume
              </a>
            </button>
          </div>
          <div className='work-container twelve'>
            <button>
              <a className='button-a' href='/about'>
                Work
              </a>
            </button>
          </div>
        </div>
      </div>

      <Contact />
      <Footer />
    </div>
  );
};

export default About;
