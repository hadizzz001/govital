"use client";

import Slider from "react-slick";
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const brandImages = [
  "http://kms.daherfoods.com/Content/ResizedImages/2000/90/inside/170104122603654~kettle.png",
  "http://kms.daherfoods.com/Content/ResizedImages/2000/90/inside/201117121534146~yupiya%20roll%20over%20logo.png",
  "http://kms.daherfoods.com/Content/ResizedImages/2000/90/inside/161227022243324~curvy.fw.png", 
  "http://kms.daherfoods.com/Content/ResizedImages/2000/90/inside/170104122603654~kettle.png",
  "http://kms.daherfoods.com/Content/ResizedImages/2000/90/inside/201117121534146~yupiya%20roll%20over%20logo.png",
  "http://kms.daherfoods.com/Content/ResizedImages/2000/90/inside/161227022243324~curvy.fw.png"
];

const BrandCarousel = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    draggable: true,
    swipe: true,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 2000,
    appendDots: (dots ) => (
      <div style={{ marginTop: '20px' }}>
        <ul>{dots}</ul>
      </div>
    ),
    customPaging: () => (
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
        settings: { slidesToShow: 3, slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <div className="brand-carousel container" style={{ marginTop: "5em", marginBottom: "5em" }}>
      <h2 className="subHeader">
        Our <b>Brands</b>
      </h2>
      <Slider {...settings}>
        {brandImages.map((brand, index) => (
          <div key={index} style={{ display: 'flex', height: '200px' }}>
            <Image
              src={brand}
              alt={`Brand ${index + 1}`}
              width={150}
              height={100}
              priority
              style={{marginLeft: "6em"}}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BrandCarousel;
