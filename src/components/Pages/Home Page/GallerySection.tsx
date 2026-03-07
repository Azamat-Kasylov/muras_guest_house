import React, { useState } from "react";
import styled from "styled-components";
import GalleryPopup from "../../GalleryPopup";
import { galleryData } from "../../../data";
import PopupBackground from "../../PopupBackground";

const GalleryStatic = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [initialSlide, setInitialSlide] = useState<number>(0);

  const handleClick = (index: number) => {
    setInitialSlide(index);
    setIsActive(!isActive);
  };

  return (
    <StyledSection>
      <div className="gallery_container container">
        <h2 className="gallery_title">Gallery</h2>
        <p className="gallery_suptitle">
          A glimpse of life at Muras Guest House and the Alay Valley.
        </p>
        <div className="gallery_grid">
          {galleryData.slice(0, 5).map(({ url, alt }, index) => (
            <img
              src={url}
              alt={alt}
              className="pics"
              key={index}
              onClick={() => handleClick(index)}
            />
          ))}
          {isActive && (
            <>
              <PopupBackground isOpen={isActive} setIsOpen={setIsActive} />
              <GalleryPopup initialSlide={initialSlide} />
            </>
          )}
        </div>
      </div>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  padding: 50px 0;
  position: relative;
  background-color: #f5f3ee;

  .gallery_title {
    margin-bottom: 10px;
  }

  .gallery_suptitle {
    color: #6b7280;
    margin-bottom: 30px;
  }

  .gallery_grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 15px;

    .pics:first-child {
      grid-column-start: 1;
      grid-column-end: 3;
      grid-row-start: 1;
      grid-row-end: 3;
    }

    .pics {
      height: 100%;
      aspect-ratio: 16/11;
      object-fit: cover;
      filter: contrast(100%) brightness(100%) saturate(120%);
    }
  }

  @media (max-width: 768px) {
    .gallery_grid {
      grid-template-columns: repeat(4, 1fr);
      row-gap: 10px;
      column-gap: 7px;

      .pics:first-child {
        grid-column-start: 1;
        grid-column-end: 5;
      }
    }
  }
`;

export default GalleryStatic;
