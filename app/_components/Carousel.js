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
    "https://ucarecdn.com/1724aefd-9b9f-46d8-85d9-748b27c871f7/back.webp",
    "https://ucarecdn.com/f41464f4-f24b-49eb-a27a-a32a0fe5a662/back1.webp",
  ];

  const mobileImages = [
    "https://ucarecdn.com/84b0859c-ae14-4b75-a774-fd7f7def7847/001.webp",
    "https://ucarecdn.com/170ffad6-e736-4edc-9aff-1b89c8cd196b/002.webp",
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
          "url('https://ucarecdn.com/20bbd477-9274-408f-8259-99c416b32f51/lefttrianglearrowiconinblackthinlineartvector.png')",
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
          "url('https://ucarecdn.com/20bbd477-9274-408f-8259-99c416b32f51/lefttrianglearrowiconinblackthinlineartvector.png')",
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
