import React, { useState } from 'react';
import '../styles/css/navigation.css';

function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                <span></span>
                <span className="red"></span>
                <span></span>
            </div>

            {isOpen && (
                <div className="off-canvas">
                    <button className="close-btn" onClick={() => setIsOpen(false)}>×</button>
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