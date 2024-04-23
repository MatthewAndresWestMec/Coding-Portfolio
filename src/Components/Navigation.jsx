import React, { useState } from 'react';
import '../styles/css/navigation.css';

function Navigation() {
  const [isActive, setIsActive] = useState(false);

  // Toggle the active class and close menu
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  // Handle link click and close menu
  const handleLinkClick = () => {
    setIsActive(false);
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <nav className='navbar'>
          {/* Logo */}
          <a href='/' className='logo'>
            MATT.
          </a>

          <ul className={`navMenu ${isActive ? 'active' : ''}`}>
            <li>
              <a href='/' className='navLink' onClick={handleLinkClick}>
                Home
              </a>
            </li>
            <li>
              <a href='/About' className='navLink' onClick={handleLinkClick}>
                About
              </a>
            </li>
            <li>
              <a href='/Gallery' className='navLink' onClick={handleLinkClick}>
                Gallery
              </a>
            </li>
          </ul>

          <div
            className={`hamburger ${isActive ? 'active' : ''}`}
            onClick={toggleActiveClass}>
            <span className='bar'></span>
            <span className='bar'></span>
            <span className='bar'></span>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navigation;
