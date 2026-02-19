import styled from "styled-components";
import { galleryData } from "../data";
import { useState, useRef } from "react";

const GalleryAutoCarousel: React.FC = () => {
  const GalleryRef = useRef<HTMLDivElement | null>(null);
  const [paused, setPaused] = useState(false);

  const HandleClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).tagName !== "IMG") return;

    const gallery = GalleryRef.current;

    if (!gallery) return;

    gallery.style.animationPlayState = paused ? "running" : "paused";
    setPaused(!paused);
  };

  return (
    <StyledGallery id="gallerySection">
      <div className="container">
        <div className="gallery" onClick={HandleClick} ref={GalleryRef}>
          {galleryData.map((i) => (
            <div className="gallery_item" key={i.url}>
              <img className="gallery_image" src={i.url} alt="" />
            </div>
          ))}
          {galleryData.map((i) => (
            <div className="gallery_item" key={i.url}>
              <img className="gallery_image" src={i.url} alt="" />
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
    animation: scroll 50s linear infinite;

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

    @media (max-width: 430px) {
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
  }

  .gallery_image {
    width: 100%;
    height: 100%;
    object-fit: cover;

    &:hover {
      cursor: pointer;
    }
  }
`;

export default GalleryAutoCarousel;
