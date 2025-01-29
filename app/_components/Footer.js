import React from 'react'

const Footer = () => {
  return (
    <footer>
    <div className="medias">
      <span>Stay Connected With Govital On:</span>
      <ul className="options">
        <li>
          <a
            href="https://www.facebook.com/profile.php?id=61572533973860"
            target="_blank"
            title="Facebook"
          >
            <i className="fa fa-facebook" aria-hidden="true" />
          </a>
        </li> 
        <li>
          <a
            href="https://www.instagram.com/govital.lb"
            target="_blank"
            title="Instagram"
          >
            <i className="fa fa-instagram" aria-hidden="true" />
          </a>
        </li>
        <li>
          <a
            href="https://www.tiktok.com/@govital7"
            target="_blank"
            title="Linkedin"
          >
            <i class="fa-brands fa-tiktok"></i>
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
 
  </footer>
  )
}

export default Footer