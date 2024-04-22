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

      <div class='flex-container'>
        <div class='image-container'>
          <img
            src='https://pngfre.com/wp-content/uploads/cat-poster.png'
            alt='Image Description'
          />
        </div>
        <div class='content-container'>
          <h2 class='header-text'>Matthew Andres</h2>
          <p class='paragraph-text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus enim, deleniti blanditiis quam consectetur aliquid fuga
            assumenda perspiciatis earum quisquam atque libero architecto qui
            labore facere pariatur odit, optio est repellat iure. Voluptas animi
            vero, deserunt, ratione, corrupti vel repudiandae ipsam natus quas
            temporibus enim.
          </p>
        </div>
      </div>

      <div class='flex-container'>
        <div class='content-container'>
          <h2 class='header-text'>My Experience</h2>
          <p class='paragraph-text'>
            <Accordion />
          </p>
        </div>
        <div class='image-container'>
          <img
            src='https://pngfre.com/wp-content/uploads/cat-poster.png'
            alt='Image Description'
          />
        </div>
      </div>

      <div className='button-section'>
        <h1>RESUME & WORK</h1>
        <div class='flex-container'>
          <div class='resume-container twelve'>
            <button>Resume</button>
          </div>
          <div class='work-container twelve'>
            <button>Work</button>
          </div>
        </div>
      </div>

      <Contact />
      <Footer />
    </div>
  );
};

export default About;
