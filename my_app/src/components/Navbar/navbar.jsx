import React, { useState } from 'react';
import './navbar.css';
import { FaBars, FaTimes, FaGamepad } from 'react-icons/fa';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
    setMobileMenuOpen(false); // close mobile menu after click
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
  {/* Left: Brand logo */}
  <div className="navbar-left">
    <h2 className="navbar-logo">
      <FaGamepad className="logo-icon" />
      SADAR Video Games
    </h2>
  </div>

  {/* Right: Links and toggle */}
  <div className="navbar-right">
    <div className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
      <a
        href="#"
        className={activeLink === 'Home' ? 'active' : ''}
        onClick={() => handleLinkClick('Home')}
      >
        Home
      </a>

      <div className="dropdown">
        <a
          href="#"
          className={activeLink === 'Games' ? 'active' : ''}
          onClick={() => handleLinkClick('Games')}
        >
          Games
        </a>
        <div className="dropdown-content">
          <div className="dropdown-section">
            <h4>PlayStation</h4>
            <a href="#">PS2 Games</a>
            <a href="#">PS3 Games</a>
            <a href="#">PS4 Games</a>
            <a href="#">PS5 Games</a>
          </div>
          <div className="dropdown-section">
            <h4>Xbox</h4>
            <a href="#">Xbox 360 Games</a>
            <a href="#">Xbox One Games</a>
            <a href="#">Xbox Series X/S Games</a>
          </div>
          <div className="dropdown-section">
            <h4>Nintendo</h4>
            <a href="#">Nintendo Switch Games</a>
            <a href="#">Nintendo Switch 2 Games</a>
          </div>
        </div>
      </div>

      <a
        href="#"
        className={activeLink === 'About' ? 'active' : ''}
        onClick={() => handleLinkClick('About')}
      >
        About
      </a>
      <a
        href="#"
        className={activeLink === 'Contact' ? 'active' : ''}
        onClick={() => handleLinkClick('Contact')}
      >
        Contact
      </a>
    </div>

    {/* Hamburger toggle */}
    <div className="navbar-toggle" onClick={toggleMenu}>
      {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
    </div>
  </div>
</div>

    </nav>
  );
};

export default Navbar;
