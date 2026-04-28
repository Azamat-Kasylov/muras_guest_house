/* eslint-disable jsx-a11y/alt-text */
import { IImage } from "../data";
import styled from "styled-components";
import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

interface Props {
  initialSlide?: number;
  className?: string;
  item: IImage[];
}

const Slider: React.FC<Props> = ({ initialSlide, className, item }) => {
  const [currentSlide, setCurrentSlide] = useState(initialSlide);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: initialSlide,
    loop: true,
    slides: {
      spacing: 5,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <Gallery className={className}>
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          {item.map(({ url, alt, type }, index) =>
            type === "image" ? (
              <img
                key={index}
                className="keen-slider__slide"
                src={url}
                alt={alt || `gallery-image-${index}`}
                loading="lazy"
              />
            ) : (
              <video
                key={index}
                autoPlay
                muted
                loop
                playsInline
                className="keen-slider__slide"
              >
                <source src={url} type="video/mp4" />
              </video>
            ),
          )}
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
      {loaded && instanceRef.current && (
        <div className="dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              >
                <span className="dot_inner"></span>
              </button>
            );
          })}
        </div>
      )}
    </Gallery>
  );
};

export default Slider;

function Arrow(props: {
  disabled: boolean;
  left?: boolean;
  onClick: (e: any) => void;
}) {
  const disabled = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabled}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}

const Gallery = styled.div`
  max-width: 800px;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;

  &.mini_gallery {
    max-width: 50%;
    position: static;
    transform: none;

    @media (max-width: 768px) {
      max-width: 100%;
    }
  }

  img {
    object-fit: cover;
    aspect-ratio: 4/3;
    filter: contrast(100%) brightness(100%) saturate(120%);
  }

  video {
    aspect-ratio: 4/3;
    object-fit: cover;
  }

  .navigation-wrapper {
    position: relative;
  }

  .dots {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .dot {
    border: none;
    background-color: transparent;
    margin: 0 5px;
    padding: 11px 6px;
    cursor: pointer;
    outline: none;
    -webkit-tap-highlight-color: transparent;
  }

  .dot_inner {
    display: block;
    width: 8px;
    height: 8px;
    background: #dbdbdb;
    border-radius: 50%;
  }

  .dot:focus {
    outline: none;
  }

  .dot.active {
    background-color: transparent;
    outline: none;
    box-shadow: none;
    .dot_inner {
      background: #000;
    }
  }

  .arrow {
    width: 30px;
    height: 30px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    fill: #fff;
    cursor: pointer;
  }

  .arrow--left {
    left: 5px;
  }

  .arrow--right {
    left: auto;
    right: 5px;
  }

  .arrow--disabled {
    fill: rgba(255, 255, 255, 0.9);
  }

  @media (max-width: 1024px) {
    align-self: center;
  }

  @media (max-width: 768px) {
    padding: 0;
  }
`;
