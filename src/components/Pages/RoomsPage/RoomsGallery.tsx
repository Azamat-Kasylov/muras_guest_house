import React from "react";
import styled from "styled-components";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ImageItem {
  imagePath: string;
  alt?: string;
}

interface GalleryProps {
  images: ImageItem[];
  settings?: Partial<Settings>;
  className?: string;
  imageClassName?: string;
}

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

const RoomsGallery: React.FC<GalleryProps> = ({
  images,
  settings = {},
  className = "",
  imageClassName = "",
}) => {
  const sliderSettings = {
    ...defaultSettings,
    ...settings,
  };

  const SliderCustom: any = Slider;

  return (
    <StyledGallery className={className}>
      <SliderCustom {...sliderSettings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image.imagePath}
              alt={image.alt || `gallery-image-${index}`}
              className={imageClassName}
            />
          </div>
        ))}
      </SliderCustom>
    </StyledGallery>
  );
};

const StyledGallery = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;

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
    padding: 0 5px;
    aspect-ratio: 4/3;
    object-fit: cover;
  }
`;

export default RoomsGallery;
