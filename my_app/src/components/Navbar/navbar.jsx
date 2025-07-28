import React from 'react'
import './navbar.css'  // We’ll use a separate CSS file for better organization

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h2 className="navbar-logo">SADAR Video Games</h2>
        <ul className="navbar-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Games</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
