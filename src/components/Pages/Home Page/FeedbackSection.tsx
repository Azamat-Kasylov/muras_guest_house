/* eslint-disable jsx-a11y/alt-text */
import { feedbackData } from "../../../data";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

const FeedbackSection: React.FC = () => {
  return (
    <StyledSection id="feedback">
      <div className="container">
        <div className="title_wrapper">
          <h2 className="feedback_title">Our guests</h2>
        </div>
        <StyledSliderWrapper className="slider-container">
          <SimpleSlider />
        </StyledSliderWrapper>
      </div>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  padding: 50px 0;
  background-color: #f5f3ee;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  .title_wrapper {
    width: 100%;
    min-width: 225px;

    .feedback_title {
      text-align: center;
    }

    @media (max-width: 768px) {
      text-align: center;
    }
  }
`;

const StyledSliderWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  min-width: 250px;

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
    arrows: false,
  };

  return (
    <SlickSlider {...settings}>
      {feedbackData.map(
        ({ image: { url, alt }, feedbackText, guest }, index) => (
          <StyledImgWrapper key={index}>
            <div key={url}>
              <img src={url} alt={alt} loading="lazy" />
              <p className="description">"{feedbackText}"</p>
              <p className="guest">{guest}</p>
            </div>
          </StyledImgWrapper>
        ),
      )}
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

  .guest,
  .description {
    color: #434851;
  }

  .guest {
    line-height: 1.7;
    padding-bottom: 15px;
  }

  .description {
    font-style: italic;
    padding: 30px 0;
  }
`;

export default FeedbackSection;
