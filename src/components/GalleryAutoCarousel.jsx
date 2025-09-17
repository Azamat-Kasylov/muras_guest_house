import React from "react";
import styled from "styled-components";
import { GalleryData } from "../data";
import { useState, useRef } from "react";

const GalleryAutoCarousel = () => {
  const GalleryRef = useRef(null);
  const [paused, setPaused] = useState(false);

  const HandleClick = (e) => {
    if (e.target.tagName !== "IMG") return;

    const gallery = GalleryRef.current;

    if (!paused) {
      const style = window.getComputedStyle(gallery);
      const matrix = new DOMMatrixReadOnly(style.transform);
      const currentX = matrix.m41;

      gallery.style.transform = `translateX(${currentX}px)`;
      gallery.style.animation = "none";
      setPaused(true);
    } else {
      gallery.style.animation = "";
      setPaused(false);
    }
  };

  return (
    <StyledGallery>
      <div className="container">
        <div
          className="gallery"
          onClick={HandleClick}
          ref={GalleryRef}
          style={{ "--items": GalleryData.length }}
        >
          {GalleryData.map((i) => (
            <div className="gallery_item" key={i.imagePath}>
              <img className="gallery_image" src={i.imagePath} alt="" />
            </div>
          ))}
          {GalleryData.map((i) => (
            <div className="gallery_item" key={i.imagePath}>
              <img className="gallery_image" src={i.imagePath} alt="" />
            </div>
          ))}
        </div>
      </div>
    </StyledGallery>
  );
};

const StyledGallery = styled.section`
  min-height: 100vh;
  background-color: #fff;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    min-height: 100%;
    padding: 100px 0;
  }

  .container {
    overflow: hidden;
  }

  .gallery {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 500px;
    justify-content: stretch;
    gap: 30px;
    animation: scroll 40s linear infinite;

    @keyframes scroll {
      to {
        transform: translateX(calc((500px + 30px) * -16));
      }
    }

    @media (max-width: 768px) {
      grid-auto-columns: 400px;

      @keyframes scroll {
        to {
          transform: translateX(calc((400px + 30px) * -16));
        }
      }
    }

    @media (max-width: 500px) {
      grid-auto-columns: 300px;

      @keyframes scroll {
        to {
          transform: translateX(calc((300px + 30px) * -16));
        }
      }
    }
  }

  .gallery_item {
    aspect-ratio: 16/11;
    overflow: hidden;
    /* border-radius: 10px; */
  }

  .gallery_image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default GalleryAutoCarousel;
