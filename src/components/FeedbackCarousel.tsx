/* eslint-disable jsx-a11y/alt-text */
import { FeedbackData } from "../data";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

const Gallery: React.FC = () => {
  return (
    <StyledGallery id="feedback">
      <div className="title_wrapper">
        <h2>Our guests</h2>
      </div>
      <StyledSliderWrapper className="slider-container">
        <SimpleSlider />
      </StyledSliderWrapper>
    </StyledGallery>
  );
};

const StyledGallery = styled.section`
  min-height: 100vh;
  padding: 50px 50px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  overflow: hidden;

  @media (max-width: 768px) {
    min-height: 100%;
    flex-direction: column;
  }
  @media (max-width: 430px) {
    padding: 50px 2rem;
  }

  .title_wrapper {
    width: 100%;
    min-width: 225px;
  }

  h2 {
    padding: 0;
  }
`;

const StyledSliderWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  min-width: 250px;

  .slick-next:before,
  .slick-next:after {
    display: none;
  }

  .slick-dots {
    bottom: -30px;
  }

  .slick-dots li button:before {
    font-size: 15px;
  }
`;

const SlickSlider = Slider as unknown as React.ComponentType<Settings>;

const SimpleSlider: React.FC = () => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <SlickSlider {...settings}>
      {FeedbackData.map((i) => (
        <StyledImgWrapper key={i.imagePath}>
          <div key={i.imagePath}>
            <img src={i.imagePath} />
            <p className="description">"{i.description}"</p>
            <p className="guest">{i.guest}</p>
          </div>
        </StyledImgWrapper>
      ))}
    </SlickSlider>
  );
};

const StyledImgWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 10px;
  transition: transform 0.3s;

  @media (max-width: 768px) {
    text-align: center;
  }

  img {
    width: 180px;
    height: 180px;
    object-fit: cover;
    border-radius: 90px;

    @media (max-width: 768px) {
      margin: 0 auto;
    }
  }

  .guest {
    line-height: 1.7;
  }

  .description {
    font-style: italic;
    padding: 30px 0;
  }
`;

export default Gallery;
