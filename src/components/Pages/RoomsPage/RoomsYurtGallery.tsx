import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { roomsYurtImages } from "../../../data";

const RoomsYurtGallery: React.FC = () => {
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
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          className: "center",
          centerMode: true,
          infinite: true,
          centerPadding: "130px",
          slidesToShow: 1,
          speed: 300,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          className: "center",
          centerMode: true,
          infinite: true,
          centerPadding: "80px",
          slidesToShow: 1,
          speed: 300,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          className: "center",
          centerMode: true,
          infinite: true,
          centerPadding: "40px",
          slidesToShow: 1,
          speed: 300,
          dots: false,
          arrows: false,
        },
      },
    ],
  };

  const SliderCustom: any = Slider;

  return (
    <SliderCustom {...settings}>
      {roomsYurtImages.map((i, index) => (
        <img key={index} src={i.imagePath} alt="yurt-photo" />
      ))}
    </SliderCustom>
  );
}

const StyledYurtGallery = styled.div`
  max-width: 1000px;
  width: 100%;

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
    padding: 0 5px;
    aspect-ratio: 4/3;
    object-fit: cover;
  }
`;

export default RoomsYurtGallery;
