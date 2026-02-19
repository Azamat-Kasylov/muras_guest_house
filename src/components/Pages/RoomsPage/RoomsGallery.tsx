import React from "react";
import styled from "styled-components";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MediaInterface } from "../../../data";

const defaultSettings: Settings = {
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
        centerPadding: "130px",
        slidesToShow: 1,
        speed: 400,
        dots: true,
        arrows: false,
        touchThreshold: 20,
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
        speed: 400,
        dots: true,
        arrows: false,
        touchThreshold: 20,
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
        speed: 400,
        dots: false,
        arrows: false,
        touchThreshold: 20,
      },
    },
  ],
};

interface Props {
  media: MediaInterface[];
  settings?: Partial<Settings>;
}
const RoomsGallery: React.FC<Props> = ({ media, settings }) => {
  const sliderSettings = {
    ...defaultSettings,
    ...settings,
  };

  const SliderCustom: any = Slider;

  return (
    <StyledGallery>
      <SliderCustom {...sliderSettings}>
        {media.map((item, index) => (
          <div className="media-wrapper" key={index}>
            {item.type === "image" ? (
              <img src={item.url} alt={item.alt || `gallery-image-${index}`} />
            ) : (
              <video autoPlay muted loop playsInline>
                <source src={item.url} type="video/mp4" />
              </video>
            )}
          </div>
        ))}
      </SliderCustom>
    </StyledGallery>
  );
};

const StyledGallery = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 50px;

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

  .media-wrapper {
    width: 100%;
    height: 375px;
    overflow: hidden;
  }

  img {
    width: 100%;
    padding: 0 5px;
    aspect-ratio: 4/3;
    object-fit: cover;
  }

  video {
    width: 100%;
    padding: 0 5px;
    aspect-ratio: 4/3;
    object-fit: cover;
  }
`;

export default RoomsGallery;
