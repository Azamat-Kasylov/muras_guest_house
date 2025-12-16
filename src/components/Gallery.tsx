/* eslint-disable jsx-a11y/alt-text */
import { GalleryData } from "../data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

const Gallery: React.FC = () => {
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
    max-width: 360px;
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
    @media (max-width: 410px) {
      width: 123px;
      height: 30px;
    }
  }

  .slick-arrow:hover {
    opacity: 0.6;
  }

  .slick-arrow::before {
    opacity: 1;
  }

  .slick-next {
    right: -35px;
    @media (max-width: 410px) {
      top: 215px;
      right: 5px;
    }
  }

  .slick-prev {
    left: -35px;
    @media (max-width: 410px) {
      top: 215px;
      left: 5px;
    }
  }
`;

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
          initialSlide: 1,
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
      {GalleryData.map((i) => (
        <StyledImgWrapper key={i.imagePath}>
          <img src={i.imagePath} />
        </StyledImgWrapper>
      ))}
    </SliderCustom>
  );
}

const StyledImgWrapper = styled.div`
  width: 100%;
  height: 100%;
  aspect-ratio: 4/3;
  padding: 0 5px;
  transition: transform 0.3s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default Gallery;
