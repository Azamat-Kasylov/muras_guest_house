/* eslint-disable jsx-a11y/alt-text */
import { galleryData } from "../../../data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

const Gallery: React.FC = () => {
  return (
    <Section id="gallery">
      <Wrapper className="slider-container">
        <SimpleSlider />
      </Wrapper>
    </Section>
  );
};

const Section = styled.section`
  padding: 100px 60px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    padding: 100px 0;
  }
  @media (max-width: 768px) {
    padding: 100px 0;
  }
`;

const Wrapper = styled.div`
  max-width: 1200px;
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
`;

function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    touchThreshold: 20,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          className: "center",
          centerMode: true,
          infinite: true,
          centerPadding: "40px",
          slidesToShow: 2,
          touchThreshold: 20,
          speed: 300,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          className: "center",
          centerMode: true,
          infinite: true,
          centerPadding: "80px",
          slidesToShow: 1,
          touchThreshold: 20,
          speed: 300,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 430,
        settings: {
          className: "center",
          centerMode: true,
          infinite: true,
          centerPadding: "40px",
          slidesToShow: 1,
          touchThreshold: 20,
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
      {galleryData.map(({ imagePath, alt }, index) => (
        <StyledImgWrapper key={index}>
          <img src={imagePath} alt={alt} />
        </StyledImgWrapper>
      ))}
    </SliderCustom>
  );
}

const StyledImgWrapper = styled.div`
  aspect-ratio: 4/3;
  transition: transform 0.3s;

  img {
    width: 100%;
    height: 100%;
    padding: 0 5px;
    object-fit: cover;
  }
`;

export default Gallery;
