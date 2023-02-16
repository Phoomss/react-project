import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div>
    <footer id="footer">
    <p className="copy"> 
       &copy;{new Date().getFullYear()} Project-React Design and Develop By LAT | STORE
      </p>
    </footer>

    </div>
  )
}

export default Footer