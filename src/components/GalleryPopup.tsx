/* eslint-disable jsx-a11y/alt-text */
import { galleryData } from "../data";
import styled from "styled-components";
import { lazy, Suspense, useEffect } from "react";

const Slider = lazy(() => import("react-slick"));

const useAsyncSlickStyles = () => {
  useEffect(() => {
    // Загружаем CSS после того, как страница отрендерилась
    const loadStyles = async () => {
      // @ts-ignore
      await import("slick-carousel/slick/slick.css");
      // @ts-ignore
      await import("slick-carousel/slick/slick-theme.css");
    };

    // Откладываем загрузку до после интерактива
    if ("requestIdleCallback" in window) {
      requestIdleCallback(() => loadStyles());
    } else {
      setTimeout(loadStyles, 100);
    }
  }, []);
};

interface Props {
  initialSlide: number;
}

const GalleryPopup: React.FC<Props> = ({ initialSlide }) => {
  useAsyncSlickStyles();
  return (
    <Gallery id="gallery">
      <Wrapper className="container">
        <Suspense fallback={<div>Loading...</div>}>
          <SimpleSlider initialSlide={initialSlide} />
        </Suspense>
      </Wrapper>
    </Gallery>
  );
};

const Gallery = styled.div`
  max-width: 800px;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;

  .container {
    padding: 0;
    display: grid;
    grid-template-columns: minmax(0, 1fr);
  }

  @media (max-width: 768px) {
    padding: 0;
  }

  @media (max-height: 600px) {
    max-width: 600px;
  }
`;

const Wrapper = styled.div`
  .slick-next,
  .slick-prev {
    width: 45px;
    height: 100px;
    padding: 5px;
    background-color: #515151;
    opacity: 0.7;
    z-index: 99;
  }

  .slick-next:focus,
  .slick-next:hover,
  .slick-prev:focus,
  .slick-prev:hover {
    background: #515151;
  }

  .slick-next {
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    right: 2px;
  }

  .slick-prev {
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    left: 2px;
  }

  .slick-next:before {
    content: url("./next.svg");
  }

  .slick-prev:before {
    content: url("./prev.svg");
  }

  @media (max-width: 768px) {
    padding: 0;
  }
`;

const SimpleSlider: React.FC<Props> = ({ initialSlide }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    touchThreshold: 20,
    initialSlide: initialSlide,
    adaptiveHeight: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    swipe: true,
    touchMove: true,
    waitForAnimate: true,
    lazyLoad: "ondemand",
    responsive: [
      {
        breakpoint: 768,
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
          <img src={url} alt={alt} loading="lazy" />
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
