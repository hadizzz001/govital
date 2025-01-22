import React from 'react'

const Footer = () => {
  return (
    <footer>
    <div className="medias">
      <span>Stay Connected With Govital On:</span>
      <ul className="options">
        <li>
          <a
            href="https://www.facebook.com/daherfoods"
            target="_blank"
            title="Facebook"
          >
            <i className="fa fa-facebook" aria-hidden="true" />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/daherfoods"
            target="_blank"
            title="Twitter"
          >
            <i className="fa fa-twitter" aria-hidden="true" />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/masterofficial/"
            target="_blank"
            title="Instagram"
          >
            <i className="fa fa-instagram" aria-hidden="true" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/company/daher-foods"
            target="_blank"
            title="Linkedin"
          >
            <i className="fa fa-linkedin" aria-hidden="true" />
          </a>
        </li>
      </ul>
    </div>
    <div className="container">
      
      <div className="copyright">
        <div className="icon">
          <img className="footerLogo" src="Content/images/footerLogo.png" />
        </div>
        <div className="text">
      © {new Date().getFullYear()}. All Rights Reserved.
    </div>
      </div>
 
    </div>
    <div className="scrollUp">
      <span />
      Back to Top
    </div>
  </footer>
  )
}

export default Footer