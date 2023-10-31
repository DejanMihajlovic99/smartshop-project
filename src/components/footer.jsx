import { Facebook, Instagram, LinkedIn, Twitter, YouTube } from '@mui/icons-material'
import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-info">
        <h1> SMARTHOME DEVELOPER</h1>
        <div className="footer-info">
          <p className="footer-text"> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>
        </div>
        <div className="social-icons">
          <Facebook />
          <Twitter />
          <YouTube />
          <Instagram />
          <LinkedIn />
        </div>
        <div className="footer-bottom">
          <p> Copyright © All rights reserved / Mihajlovic Dejan  </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
