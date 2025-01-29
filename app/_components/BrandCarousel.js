"use client"

import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BrandCarousel = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await fetch('/api/brand');
        const data = await response.json();
        // Assuming data is an array of brand objects with an `img` field
        const brandImages = data.map(brand => brand.img[0]);
        setBrands(brandImages);
      } catch (error) {
        console.error('Error fetching brands:', error);
      }
    };

    fetchBrands();
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    draggable: true,
    swipe: true,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 2000,
    appendDots: (dots) => (
      <div style={{ marginTop: '20px' }}>
        <ul>{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <button
        style={{
          width: '10px',
          height: '10px',
          borderRadius: '50%',
          background: '#888',
          border: 'none',
        }}
      />
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="brand-carousel container" style={{ marginTop: "5em", marginBottom: "5em" }}>
      <h2 className="subHeader mb-5">
        Our <b>Brands</b>
      </h2>
      <Slider {...settings}>
        {brands.length > 0 ? (
          brands.map((brand, index) => (
            <div
              key={index}
              style={{ display: 'flex', height: '200px' }}
            >
              <Image
                src={brand}
                alt={`Brand ${index + 1}`}
                width={150}
                height={100}
                priority={true}
              />
            </div>
          ))
        ) : (
          <p>Loading brands...</p>
        )}
      </Slider>
    </div>
  );
};

export default BrandCarousel;
