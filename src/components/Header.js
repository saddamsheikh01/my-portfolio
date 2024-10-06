// src/components/Header.js
import React from 'react';
import './Header.css'; // Import the CSS file for the header styles


function Header() {
  return (
    <header className="header">
      <div className="header-content">
    
        <h1 className="header-title">Welcome to My Portfolio</h1>
        <p className="header-subtitle">Check out my projects below!</p>
        
        <nav className="header-nav">
          <ul className="nav-list">
            <li className="nav-item"><a href="#about" className="nav-link">About</a></li>
            <li className="nav-item"><a href="#projects" className="nav-link">Projects</a></li>
            <li className="nav-item"><a href="#contact" className="nav-link">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
