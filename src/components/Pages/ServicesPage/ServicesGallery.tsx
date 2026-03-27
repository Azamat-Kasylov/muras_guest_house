import React from "react";
import styled from "styled-components";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IImage } from "../../../data";

const defaultSettings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  touchThreshold: 20,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
      },
    },
  ],
};

interface Props {
  images: IImage[];
  settings?: Partial<Settings>;
}
const ServicesGallery: React.FC<Props> = ({ images, settings }) => {
  const sliderSettings = {
    ...defaultSettings,
    ...settings,
  };

  const SliderCustom: any = Slider;

  return (
    <StyledGallery>
      <SliderCustom {...sliderSettings}>
        {images.map((image, index) => (
          <div className="media-wrapper" key={index}>
            <img
              src={image.url}
              alt={image.alt || `meal-image-${index}`}
              className="services_image"
              loading="lazy"
            />
          </div>
        ))}
      </SliderCustom>
    </StyledGallery>
  );
};

const StyledGallery = styled.div`
  max-width: 50%;
  padding: 0 40px;
  margin: 0 auto;

  .slick-prev:before,
  .slick-next:before {
    font-size: 30px;
    color: #7e7367;
  }

  .slick-arrow:hover {
    opacity: 0.6;
  }

  .slick-next {
    right: -25px;
  }

  .slick-prev {
    left: -35px;
  }

  .services_image {
    width: 100%;
    padding: 0 5px;
    aspect-ratio: 4/3;
    object-fit: cover;
  }

  @media (max-width: 1024px) {
    max-width: 70%;
    padding: 0;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    .services_image {
      padding: 0 2px;
    }
  }
`;

export default ServicesGallery;
