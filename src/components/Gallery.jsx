/* eslint-disable jsx-a11y/alt-text */
import React from "react";
// import styled from "styled-components";
import { GalleryData } from "../data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

const Gallery = () => {
  return (
    <StyledGallery id="gallery">
      <div>
        <StyledSliderWrapper className="slider-container">
          <SimpleSlider />
        </StyledSliderWrapper>
      </div>
    </StyledGallery>
  );
};

const StyledGallery = styled.section`
  padding: 100px 1rem;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledSliderWrapper = styled.div`
  max-width: 1100px;
  width: 100%;
  padding: 0 50px;
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
  }
  @media (max-width: 390px) {
    max-width: 350px;
  }

  .slick-prev:before,
  .slick-next:before {
    font-size: 60px;
    color: #f6e7a7;

    @media (max-width: 1024px) {
      font-size: 40px;
    }
    @media (max-width: 900px) {
      font-size: 40px;
    }
    @media (max-width: 600px) {
      font-size: 30px;
    }
    @media (max-width: 480px) {
      font-size: 30px;
    }
    @media (max-width: 390px) {
      font-size: 30px;
    }
  }

  .slick-prev {
    left: -65px;

    @media (max-width: 1024px) {
      left: -45px;
    }
    @media (max-width: 900px) {
      left: -45px;
    }
    @media (max-width: 600px) {
      left: -35px;
    }
    @media (max-width: 480px) {
      left: -35px;
    }
    @media (max-width: 390px) {
      left: -35px;
    }
  }
`;

function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
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
  return (
    <Slider {...settings}>
      {GalleryData.map((i) => (
        <StyledImgWrapper key={i.imagePath}>
          <img src={i.imagePath} />
        </StyledImgWrapper>
      ))}
    </Slider>
  );
}

const StyledImgWrapper = styled.div`
  width: 100%;
  height: 100%;
  aspect-ratio: 4/3;
  padding: 0 10px;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
`;

export default Gallery;
