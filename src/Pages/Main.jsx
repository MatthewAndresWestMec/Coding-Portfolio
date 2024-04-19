import React from 'react';
// import Navigation from '../Components/Navigation';
// import Contact from '../Components/Contact';
import Footer from '../Components/Footer';
import '../styles/css/main.css';
const Main = () => {
  return (
    <div>
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

      {/* <Navigation /> */}
      <header class='header'>
        <div class='box'>
          <h1>bio sci</h1>
          <h1>student</h1>
        </div>
        <div class='box'></div>
        <div class='box'></div>
        <div class='box'>
          <h1>matt</h1>
          <h1>andres</h1>
        </div>
      </header>

      <div class='flex-container'>
        <div class='content-container'>
          <h2 class='header-text'>Sup, I'm Matthew</h2>
          <p class='paragraph-text'>
            Thank you for visiting my folio. I am currently a Biological Science
            Student at ASU with intent to study in dentistry. Graduated Sunrise
            Mountain HS & West-Mec Coding 2024.
          </p>
        </div>
        <div class='image-container'>
          <img
            src='https://pngfre.com/wp-content/uploads/cat-poster.png'
            alt='Image Description'
          />
        </div>
      </div>

      <Contact />

      <Footer />
    </div>
  );
};

export default Main;
