"use client";

import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Carousel = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const desktopImages = [
    "https://res.cloudinary.com/dsamezukx/image/upload/v1740435942/xzp8crv6ucoyahj1mydd.webp",
    "https://res.cloudinary.com/dsamezukx/image/upload/v1740435942/gss1jjtca8q38e09alwj.webp",
  ];

  const mobileImages = [
    "https://res.cloudinary.com/dsamezukx/image/upload/v1740435942/ddosvz9xjygn8jryfsvz.webp",
    "https://res.cloudinary.com/dsamezukx/image/upload/v1740435942/whknuym5ti5vbcolpa35.webp",
  ];

  const images = isMobile ? mobileImages : desktopImages;

  const arrowStyle = {
    position: "absolute",
    top: "50%",
    zIndex: 10,
    width: "60px",
    height: "60px",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    cursor: "pointer",
    transform: "translateY(-50%)",
    opacity: 0.8,
  };

  const CustomPrevArrow = ({ onClick }) => (
    <div
      style={{
        ...arrowStyle,
        left: "15px",
        backgroundImage:
          "url('https://res.cloudinary.com/dsamezukx/image/upload/v1740435942/fqva8hwlqmuc549gvzqm.png')",
      }}
      onClick={onClick}
    />
  );

  const CustomNextArrow = ({ onClick }) => (
    <div
      style={{
        ...arrowStyle,
        right: "15px",
        transform: "translateY(-50%) rotate(180deg)", // Flip the arrow for the next button
        backgroundImage:
          "url('https://res.cloudinary.com/dsamezukx/image/upload/v1740435942/fqva8hwlqmuc549gvzqm.png')",
      }}
      onClick={onClick}
    />
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div style={{ width: "100%", height: "100vh", overflow: "hidden" }}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} style={{ width: "100%", height: "100vh" }}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
