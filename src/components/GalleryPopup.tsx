/* eslint-disable jsx-a11y/alt-text */
import { galleryData } from "../data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

interface Props {
  initialSlide: number;
}

const GalleryPopup: React.FC<Props> = ({ initialSlide }) => {
  return (
    <Section id="gallery">
      <Wrapper className="container">
        <SimpleSlider initialSlide={initialSlide} />
      </Wrapper>
    </Section>
  );
};

const Section = styled.section`
  max-width: 1000px;
  width: 100%;
  padding: 0 80px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;

  @media (max-width: 768px) {
    padding: 0;
  }

  @media (max-height: 600px) {
    max-width: 600px;
  }
`;

const Wrapper = styled.div`
  @media (max-width: 768px) {
    padding: 0;
  }
  .slick-arrow::before {
    font-size: 40px;
  }

  .slick-next {
    right: -30px;
  }

  .slick-prev {
    left: -50px;
  }
`;

const SimpleSlider: React.FC<Props> = ({ initialSlide }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    touchThreshold: 20,
    initialSlide: initialSlide,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          infinite: true,
          slidesToShow: 1,
          touchThreshold: 20,
          speed: 300,
          dots: true,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          infinite: true,
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
          infinite: true,
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
      {galleryData.map(({ url, alt }, index) => (
        <StyledImgWrapper key={index}>
          <img src={url} alt={alt} />
        </StyledImgWrapper>
      ))}
    </SliderCustom>
  );
};

const StyledImgWrapper = styled.div`
  aspect-ratio: 16/11;

  img {
    width: 100%;
    height: 100%;
    padding: 0 2px;
    object-fit: cover;
    filter: contrast(100%) brightness(100%) saturate(120%);
  }
`;

export default GalleryPopup;
