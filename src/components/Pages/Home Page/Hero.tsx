import React from "react";
import styled from "styled-components";

const Hero: React.FC = () => {
  return (
    <StyledHero id="aboutUs">
      <div className="container">
        <div className="hero_flex">
          <h2 className="hero_title">About Muras</h2>
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
        </div>
        <img
          className="hero_img"
          src="./14_hotel-back-view.jpeg"
          alt="Muras Guest House"
          loading="lazy"
        />
      </div>
    </StyledHero>
  );
};

const StyledHero = styled.section`
  padding: 100px 0;
  background-color: #fff;

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
  }

  .hero_suptitle,
  .hero_text {
    margin-bottom: 20px;
    color: #7e7367;
  }

  .hero_title {
    margin-bottom: 10px;
  }

  .hero_suptitle {
    text-transform: uppercase;
    margin-bottom: 50px;
  }

  .hero_text {
    line-height: 1.7;
  }

  .hero_img {
    max-width: 55%;
    max-height: 100%;
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
