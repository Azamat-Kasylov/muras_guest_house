import React from "react";
import styled from "styled-components";

const Hero: React.FC = () => {
  return (
    <StyledHero id="aboutUs">
      <div className="container">
        <div className="hero_flex">
          <h2 className="hero_title">About Us</h2>
          <h1 className="hero_subtitle">
            Muras Guest House & Yurt Camp – Alay Valley, Kyrgyzstan
          </h1>
          <p className="hero_suptitle">
            A cozy basecamp for exploring the wild beauty of the Alay Valley
          </p>
          <p className="hero_text">
            Nestled at the gateway to the Pamir and Tien Shan ranges, Muras
            Guest House offers modern comfort with an authentic Kyrgyz spirit.
            Our rooms overlook sweeping valleys, glacier-fed rivers, and
            towering peaks that change colors with the light.
          </p>
          <p className="hero_text">
            Whether you are trekking, touring, or simply unwinding, our team is
            here to help you experience the best of local nature, culture, and
            cuisine. Enjoy homemade meals, guided excursions, and quiet evenings
            under the stars.
          </p>
          <div className="location">
            <div className="altitude">
              <p className="loc_val">
                3000<span>m</span>
              </p>
              <p className="loc_alt">Altitude</p>
            </div>
            <div className="view">
              <p className="view_val">360</p>
              <p className="view_desc">Mountain views</p>
            </div>
          </div>
        </div>
        <picture>
          <source
            srcSet="./14_hotel-back-view_768.webp"
            media="(max-width: 768px)"
          />
          <img
            className="hero_img"
            src="./14_hotel-back-view.webp"
            alt="Muras Guest House"
            fetchPriority="high"
          />
        </picture>
      </div>
    </StyledHero>
  );
};

const StyledHero = styled.section`
  padding: 100px 0;
  background-color: #fff;

  span {
    font-size: 20px;
  }

  .location {
    display: flex;
    gap: 4rem;
  }

  .loc_val,
  .view_val {
    font-family: "Cormorant Garamond", serif;
    font-size: 30px;
    line-height: 1.4;
  }

  .loc_alt,
  .view_desc,
  .hero_subtitle {
    color: #7e7367;
  }

  .view_val {
    position: relative;
  }

  .view_val::before {
    content: "";
    width: 9px;
    height: 9px;
    position: absolute;
    top: 7px;
    left: 40px;
    background-image: url(./circle.svg);
  }

  .container {
    padding: 0;
    display: flex;
    gap: 30px;
  }

  .hero_flex {
    padding-left: 6rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
  }

  .hero_suptitle,
  .hero_text {
    margin-bottom: 20px;
    color: #7e7367;
  }

  .hero_title {
    margin-bottom: 10px;
  }

  .hero_subtitle {
    font-size: 18px;
    font-weight: 300;
    margin-bottom: 1rem;
  }

  .hero_suptitle {
    text-transform: uppercase;
    margin-bottom: 50px;
  }

  .hero_text {
    line-height: 1.7;
  }

  picture {
    max-width: 55%;
  }

  .hero_img {
    height: 100%;
    object-fit: cover;
    border-bottom-left-radius: 50px;
    border-top-left-radius: 50px;
  }

  @media (max-width: 1024px) {
    .hero_flex {
      padding-left: 1rem;
    }
  }

  @media (max-width: 768px) {
    .container {
      padding: 0 1rem;
      flex-direction: column;
      gap: 30px;
    }

    picture {
      max-width: 100%;
    }

    .hero_flex {
      padding-left: 0;
    }

    .hero_img {
      max-width: 100%;
      border-radius: 30px;
    }
  }
`;

export default Hero;
