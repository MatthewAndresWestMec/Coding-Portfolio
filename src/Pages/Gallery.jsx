import React from 'react';
import Navigation from '../Components/Navigation';
import Footer from '../Components/Footer';
import Slider from '../Components/Slider';
import '../styles/css/gallery.css';

const Gallery = () => {
  return (
    <div>
      <Navigation />
      <br></br>
      <h1 className='under'>My Work</h1>
      <Slider />
      <Footer />
    </div>
  );
};

export default Gallery;
