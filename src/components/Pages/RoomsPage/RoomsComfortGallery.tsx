import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { roomsComfortImages } from "../../../data";

const RoomsComfortGallery: React.FC = () => {
  return (
    <StyledYurtGallery>
      <SimpleSlider />
    </StyledYurtGallery>
  );
};

function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  const SliderCustom: any = Slider;

  return (
    <SliderCustom {...settings}>
      {roomsComfortImages.map((i, index) => (
        <img key={index} src={i.imagePath} alt="yurt-photo" />
      ))}
    </SliderCustom>
  );
}

const StyledYurtGallery = styled.div`
  max-width: 1000px;
  width: 100%;
  @media (max-width: 1200px) {
    max-width: 950px;
  }
  @media (max-width: 1024px) {
    max-width: 800px;
  }
  @media (max-width: 900px) {
    max-width: 580px;
  }
  @media (max-width: 600px) {
    max-width: 470px;
  }
  @media (max-width: 480px) {
    max-width: 380px;
    padding: 0 20px;
  }
  @media (max-width: 410px) {
    max-width: 300px;
  }

  .slick-arrow {
    background-color: #d8e1ec;
    width: 40px;
    height: 100%;
    opacity: 0.4;
    transition: opacity 0.3s;
    z-index: 1;
  }

  .slick-arrow:hover {
    opacity: 0.6;
  }

  .slick-arrow::before {
    opacity: 1;
  }

  .slick-next {
    right: -35px;
  }

  .slick-prev {
    left: -35px;
  }

  img {
    width: 100%;
    height: 100%;
    padding: 0 5px;
    aspect-ratio: 4/3;
    object-fit: cover;
  }
`;

export default RoomsComfortGallery;
