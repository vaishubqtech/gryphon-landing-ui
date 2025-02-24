import React from 'react'
import "./footer.css"

const FooterSection = () => {
  return (
    <div className='foo-sec'>
    <footer className="footer">
    <div className="footer-column">
      <h3>COMPANY</h3>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Works</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
    </div>

    <div className="footer-column">
      <h3>TEMPLATE</h3>
      <ul>
        <li>Style Guide</li>
        <li>Licenses</li>
        <li>Changelog</li>
      </ul>
    </div>

    <div className="footer-column">
      <h3>CONTACT</h3>
      <p>840 7213 6575</p>
      <p>demoemail@domain.com</p>
      <p>4508 United Kingdom</p>
    </div>

    <div className="footer-column">
      <h3>SOCIAL</h3>
      <ul>
        <li>Twitter</li>
        <li>Instagram</li>
        <li>LinkedIn</li>
        <li>Dribbble</li>
      </ul>
    </div>
  </footer>
  <div className='max-head-footer'>Gryphon Studio</div>
  <div className='reservation'>© All rights reserved. </div>
  </div>
  )
}

export default FooterSection
