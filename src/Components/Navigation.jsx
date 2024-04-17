import React, { useState } from 'react';
import '../styles/css/navigation.css';

function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            {/* Toggle button with conditional content */}
            <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                {!isOpen ? (
                    // Hamburger Icon
                    <>
                        <span className='gray'></span>
                        <span className="red"></span>
                        <span className='gray'></span>
                    </>
                ) : (
                    // Close Icon
                    <span className="close-btn">×</span>
                )}
            </div>

            {isOpen && (
                <div className="off-canvas">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/resume">Resume</a></li>
                        <li><a href="/gallery">Gallery</a></li>
                    </ul>
                </div>
            )}
        </nav>
    );
}

export default Navigation;
