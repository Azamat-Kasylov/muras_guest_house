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
  padding: 100px 0;
  background-color: #fff;

  .container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .feedback_title {
    text-align: center;
    margin-bottom: 50px;
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
      {feedbackData.map(({ feedbackText, guest }, index) => (
        <StyledImgWrapper key={index}>
          <div key={index} className="feedback_content">
            <p className="description">"{feedbackText}"</p>
            <p className="guest">{guest}</p>
          </div>
        </StyledImgWrapper>
      ))}
    </SlickSlider>
  );
};

const StyledImgWrapper = styled.div`
  transition: transform 0.3s;

  .feedback_content {
    text-align: center;
  }

  .guest,
  .description {
    color: #7e7367;
    line-height: 1.7;
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
