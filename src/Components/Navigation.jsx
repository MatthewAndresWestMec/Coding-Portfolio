import React, { useState } from 'react';
import '../styles/css/navigation.css';

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    // <nav className='navbar'>
    //   {/* Hamburger Button */}
    //   <div className='hamburger' onClick={toggleMenu}>
    //     <span className='bar'></span>
    //     <span className='bar red'></span>
    //     <span className='bar'></span>
    //   </div>

    //   {/* Close Button */}
    //   {isOpen && (
    //     <div className='close-btn' onClick={toggleMenu}>
    //       ×
    //     </div>
    //   )}

    //   {/* Off-Canvas Menu */}
    //   {isOpen && (
    //     <div className='off-canvas'>
    //       <ul>
    //         <li>
    //           <a href='/'>Home</a>
    //         </li>
    //         <li>
    //           <a href='/about'>About</a>
    //         </li>
    //         <li>
    //           <a href='/gallery'>Gallery</a>
    //         </li>
    //       </ul>
    //     </div>
    //   )}
    // </nav>
    <></>
  );
}

export default Navigation;
