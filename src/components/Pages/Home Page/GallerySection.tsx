import React, { lazy, Suspense, useState } from "react";
import styled from "styled-components";
import { galleryData } from "../../../data";

const GalleryPopup = lazy(() => import("../../GalleryPopup"));
const PopupBackground = lazy(() => import("../../PopupBackground"));

const GallerySection = () => {
  const [isActive, setIsActive] = useState<boolean | number | null>(false);
  const [initialSlide, setInitialSlide] = useState<number>(0);

  const handleClick = (index: number) => {
    setInitialSlide(index);
    setIsActive(!isActive);
  };

  return (
    <StyledSection id="gallery">
      <div className="gallery_container container">
        <h2 className="gallery_title">Gallery</h2>
        <p className="gallery_suptitle">
          A glimpse of life at Muras Guest House and the Alay Valley
        </p>
        <div className="gallery_grid">
          {galleryData.slice(0, 5).map(({ url, alt }, index) => (
            <img
              src={url}
              alt={alt}
              className="pics"
              key={index}
              onClick={() => handleClick(index)}
              loading="lazy"
            />
          ))}
          {isActive && (
            <Suspense
              fallback={
                <div>
                  <p>Loading...</p>
                </div>
              }
            >
              <PopupBackground isOpen={isActive} setIsOpen={setIsActive} />
              <GalleryPopup initialSlide={initialSlide} />
            </Suspense>
          )}
        </div>
      </div>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  padding: 100px 0;
  position: relative;
  background-color: #fff;

  .gallery_title {
    margin-bottom: 15px;
  }

  .gallery_suptitle {
    text-transform: uppercase;
    color: #7e7367;
    margin-bottom: 50px;
  }

  .gallery_grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 250px);
    gap: 20px;

    .pics:first-child {
      grid-column-start: 1;
      grid-column-end: 3;
      grid-row-start: 1;
      grid-row-end: 2;
    }

    .pics:nth-child(2) {
      grid-column-start: 1;
      grid-column-end: 3;
      grid-row-start: 2;
      grid-row-end: 3;
    }

    .pics:nth-child(3) {
      grid-column-start: 3;
      grid-column-end: 4;
      grid-row-start: 1;
      grid-row-end: 3;
    }

    .pics {
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: contrast(100%) brightness(100%) saturate(120%);
      border-radius: 30px;

      &:hover {
        cursor: pointer;
      }
    }
  }

  @media (max-width: 768px) {
    .gallery_grid {
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: auto;
      row-gap: 10px;
      column-gap: 7px;

      .pics {
        aspect-ratio: 9/6;
        border-radius: 0;
      }

      .pics:first-child {
        grid-column-start: 1;
        grid-column-end: 5;
        grid-row-start: 1;
        grid-row-end: 2;
      }

      .pics:nth-child(2) {
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 2;
        grid-row-end: 3;
      }
      .pics:nth-child(3) {
        grid-column-start: 2;
        grid-column-end: 3;
        grid-row-start: 2;
        grid-row-end: 3;
      }
    }
  }
`;

export default GallerySection;
