import React from 'react'
import './Footer.css'  // Import the separate CSS

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} SADAR Video Games. All rights reserved.</p>
    </footer>
  )
}

export default Footer
