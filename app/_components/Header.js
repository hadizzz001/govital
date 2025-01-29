"use client";
import React, { useState, useEffect } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [brandsMenuOpen, setBrandsMenuOpen] = useState(false); // State for Brands sub-menu
  const [subBrandMenuOpen, setSubBrandMenuOpen] = useState(null); // State for each brand's sub-submenu
  const [brands, setBrands] = useState([]); // State to store brand data
  const [subBrands, setSubBrands] = useState([]); // State to store sub-brand data

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const toggleBrandsMenu = () => {
    setBrandsMenuOpen((prev) => !prev);
  };

  const toggleSubBrandMenu = (brandId) => {
    setSubBrandMenuOpen((prev) => (prev === brandId ? null : brandId));
  };

  // Fetch brands and sub-brands on mount
  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const brandResponse = await fetch("/api/brand");
        const brandData = await brandResponse.json();
        setBrands(brandData);
      } catch (error) {
        console.error("Error fetching brands:", error);
      }
    };

    const fetchSubBrands = async () => {
      try {
        const subBrandResponse = await fetch("/api/subbrand");
        const subBrandData = await subBrandResponse.json();
        setSubBrands(subBrandData);
      } catch (error) {
        console.error("Error fetching sub-brands:", error);
      }
    };

    fetchBrands();
    fetchSubBrands();
  }, []);

  return (
    <header>
      <div className="container">
        <a href="/" className="daherfoods" title="Govital">
          <img
            alt="Govital"
            src="Content/images/daherfoods.png"
            style={{ width: "85%" }}
          />
        </a>
        <div className={`menuPop ${menuOpen ? "open" : ""}`}>
          <nav id="menu" className={menuOpen ? "fade" : ""}>
            <ul className="links">
              <li>
                <a href="/" title="Home">
                  Home
                </a>
              </li>
              <li>
                <a href="/#about" title="Group" onClick={toggleMenu}>
                  About
                </a>
              </li>
              <li>
                <a href="#!" title="Brands" onClick={toggleBrandsMenu}>
                  Brands
                </a>
                <ul
                  className={`subBrands xl:fixed bg-[#263441] p-5 pt-0 transition-all duration-300 ease-in-out ${
                    brandsMenuOpen
                      ? "visible opacity-100 translate-y-0"
                      : "invisible opacity-0 -translate-y-4"
                  }`}
                  style={{
                    display: brandsMenuOpen ? "block" : "none",
                  }}
                >
                  {brands.map((brand) => (
                    <li key={brand.name} style={{ marginBottom: "1em" }}>
                      <a
                        style={{ color: "white" }}
                        title={brand.name}
                        onClick={() => toggleSubBrandMenu(brand.name)}
                      > 
                        {brand.name}
                      </a>
                      <ul
                        className={`subSubBrands absolute left-full top-0 bg-[#35495e] p-3 transition-all duration-300 ease-in-out ${
                          subBrandMenuOpen === brand.name
                            ? "visible opacity-100 translate-x-0"
                            : "invisible opacity-0 -translate-x-4"
                        }`}
                      >
                        {subBrands
                          .filter((subBrand) => subBrand.brand === brand.name)
                          .map((subBrand) => (
                            <li key={subBrand.name} >
                              <a
                                style={{ color: "white" }}
                                href={`/products?subbrnd=${subBrand.name}`} 
                                title={subBrand.name}
                              >
                                {subBrand.name}
                              </a>
                            </li>
                          ))}
                      </ul>
                    </li>
                  ))}
                  <li>
                    <a style={{ color: "white" }} title="View All" href="/products">
                      View all
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/contact" title="Contact Us">
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="openMenu mr-5" onClick={toggleMenu}>
          <i className="fa fa-bars" aria-hidden="true" />
        </div>
        <div className="backMenu">
          <i className="fa fa-chevron-left" aria-hidden="true" />
        </div>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n/* SubBrands Transition */\n.subBrands {\n  transition: all 0.3s ease-in-out;\n}\n\n/* SubSubBrands Transition */\n.subSubBrands {\n  transition: all 0.3s ease-in-out;\n  width:250px;\n}\n\n/* Visibility and Transform */\n.visible {\n  opacity: 1;\n  transform: translate(0);\n}\n\n.invisible {\n  opacity: 0;\n  transform: translateY(-10px);\n}\n\n/* SubBrands Slide-In */\n.subBrands li {\n  position: relative;\n}\n\n\n"
        }}
      />

      <style
        dangerouslySetInnerHTML={{
          __html: "\n.subSubBrands{\n    left: 50px;\n    z-index: 999;\n}\n"
        }}
      />

<style
  dangerouslySetInnerHTML={{
    __html:
      "\n@media (max-width: 767px) {\n    #menu .links > li:first-child {\n        display: block!important;\n    }\n}\n"
  }}
/>


    </header>
  );
}

export default Header;
