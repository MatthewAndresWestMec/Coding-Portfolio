import React from 'react';
import Navigation from '../Components/Navigation';
import Contact from '../Components/Contact';

import '../styles/css/main.css';
const Main = () => {
  return (
    <div>
      <Navigation />
      <div className='container'>
        <div className='box'>
          <h1 className='first name'>Matthew</h1>
        </div>
        <div class='box'></div>
        <div class='box'>
          <h2 className='desc'>College Student / Web Dev</h2>
          <button className='button --double'>My Work</button>
        </div>
        <div class='box'>
          <h1 className='last name'>Andres</h1>
        </div>
      </div>

      <div className='Card'>
        <div class='projcard-container'>
          <div class='projcard projcard-red'>
            <div class='projcard-innerbox'>
              <img
                class='projcard-img'
                src='https://picsum.photos/800/600?image=1080'
              />
              <div class='projcard-textbox'>
                <div class='projcard-title'>
                  A Short Intro To Matthew Andres
                </div>
                <div class='projcard-subtitle'>
                  A college student at ASU studying Biological Science
                </div>
                <div class='projcard-bar'></div>
                <div class='projcard-description'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </div>
                <button className='none button --double'>My Work</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Contact />
      <div className='Footer'></div>
    </div>
  );
};

export default Main;
