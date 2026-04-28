/* eslint-disable jsx-a11y/alt-text */
import styled from "styled-components";
import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { feedbackData } from "../../../data";

const GallerySection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <Gallery>
      <div className="container">
        <h2 className="fb_title">Our Guests</h2>
        <div className="navigation-wrapper">
          <div ref={sliderRef} className="keen-slider">
            {feedbackData.map(({ feedbackText, guest }, index) => (
              <div key={index} className="keen-slider__slide fb_content">
                <p className="fb_text">{feedbackText}</p>
                <p className="fb_author">{guest}</p>
              </div>
            ))}
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
      </div>
    </Gallery>
  );
};

export default GallerySection;

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

const Gallery = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  background-color: #fff;

  .container {
    max-width: 1000px;
  }

  .fb_title {
    text-align: center;
    margin-bottom: 5rem;
  }

  .fb_content {
    text-align: center;
  }

  .fb_text {
    font-style: italic;
    margin-bottom: 2rem;
    color: #7e7367;
  }

  .fb_author {
    margin-bottom: 1rem;
    color: #7e7367;
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
    fill: #000;
    cursor: pointer;
  }

  .arrow--left {
    left: -70px;
  }

  .arrow--right {
    left: auto;
    right: -70px;
  }

  @media (max-width: 1024px) {
    .container {
      padding: 0 1rem;
    }

    .arrow {
      display: none;
    }
  }
`;
