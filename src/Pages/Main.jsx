import React from 'react';
import Navigation from '../Components/Navigation';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';
import '../styles/css/main.css';
const Main = () => {
  return (
    <div>
      <Navigation />

      <header className='header'>
        <div className='box'>
          <h1>BIOLOGY</h1>
          <h1>STUDENT</h1>
        </div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'>
          <h1>MATT</h1>
          <h1>ANDRES</h1>
        </div>
      </header>

      <div className='flex-container'>
        <div className='content-container'>
          <h2 className='header-text'>Sup, I'm Matthew</h2>
          <p className='paragraph-text'>
            Thank you for visiting my portfolio. I am currently a Biological
            Science Student at ASU with intent to study in dentistry. Graduated
            Sunrise Mountain HS & West-Mec Coding 2024.
          </p>
        </div>
        <div className='image-container'>
          <img
            src='https://pngfre.com/wp-content/uploads/cat-poster.png'
            alt='Image Description'
          />
        </div>
      </div>

      <Contact />

      <Footer />
      <div className='lines'>
        <div className='line'></div>
        <div className='line'></div>
        <div className='line'></div>
        <div className='line'></div>
        <div className='line'></div>
        <div className='line'></div>
        <div className='line'></div>
        <div className='line'></div>
        <div className='line'></div>
        <div className='line'></div>
        <div className='line'></div>
      </div>
    </div>
  );
};

export default Main;
