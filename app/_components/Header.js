"use client"

import React, { useState } from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header>
      <div className="container">
        <a href="/" className="daherfoods" title="Govital">
          <img alt="Govital" src="Content/images/daherfoods.png" />
        </a>
        <div className={`menuPop ${menuOpen ? 'open' : ''}`}>
          <nav id="menu" className={menuOpen ? 'fade' : ''}>
            <ul className="links">
              <li>
                <a className=" " href="/" title="Home">
                  Home
                </a>
                <i className="fa fa-angle-right" aria-hidden="true" />
              </li>
              <li>
                <a href="/#about" title="Group">
                  About
                </a>
              </li>
              <li>
                <a href="brands.html" title="Brands">
                  Brands
                </a>
              </li>
              <li>
                <a href="/contact" title="Contact Us">
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
          <ul className={`mediaOptions ${menuOpen ? 'fade' : ''}`}>
            <li>
              <a href="https://www.facebook.com/daherfoods" target="_blank" title="Facebook">
                <i className="fa fa-facebook" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/daherfoods" target="_blank" title="Twitter">
                <i className="fa fa-twitter" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/masterofficial/" target="_blank" title="Instagram">
                <i className="fa fa-instagram" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/daher-foods" target="_blank" title="Linkedin">
                <i className="fa fa-linkedin" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>
        <div className="openMenu" onClick={toggleMenu}>
          <i className="fa fa-bars" aria-hidden="true" />
        </div>
        <div className="backMenu">
          <i className="fa fa-chevron-left" aria-hidden="true" />
        </div>
      </div>
    </header>
  );
}

export default Header;
