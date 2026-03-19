import React from "react";
import styled from "styled-components";

const Hero: React.FC = () => {
  return (
    <StyledHero id="aboutUs">
      <ContentWrapper className="container">
        <h2 className="hero_title">About Muras</h2>
        <p className="hero_suptitle">
          A cozy basecamp for exploring the wild beauty of the Alay Valley.
        </p>
        <div className="hero_flex">
          <StaticImg
            src="./14_hotel-back-view.jpeg"
            alt="Muras Guest House"
            loading="lazy"
          />
          <TextContent>
            <p className="hero_text">
              Nestled at the gateway to the Pamir and Tien Shan ranges, Muras
              Guest House offers modern comfort with an authentic Kyrgyz spirit.
              Our rooms overlook sweeping valleys, glacier-fed rivers, and
              towering peaks that change colors with the light.
            </p>
            <p className="hero_text">
              Whether you are trekking, touring, or simply unwinding, our team
              is here to help you experience the best of local nature, culture,
              and cuisine. Enjoy homemade meals, guided excursions, and quiet
              evenings under the stars.
            </p>
            <div className="specials_flex">
              <p className="specials">Panoramic mountain views</p>
              <p className="specials">Family-run with local guides</p>
              <p className="specials">Perfect base for trekking & tours</p>
            </div>
          </TextContent>
        </div>
      </ContentWrapper>
    </StyledHero>
  );
};

const StyledHero = styled.section`
  padding: 50px 0;
  background-color: #f5f3ee;
`;

const ContentWrapper = styled.div`
  .hero_flex {
    display: flex;
    align-self: center;
    justify-content: space-between;
    gap: 30px;

    @media (max-width: 768px) {
      flex-direction: column;
      display: flex;
      align-items: center;
    }
  }

  .hero_suptitle,
  .hero_text {
    margin-bottom: 20px;
    color: #626976;

    @media (max-width: 768px) {
      font-size: 18px;
    }
  }

  .hero_title {
    margin-bottom: 10px;
  }

  .hero_suptitle {
    margin-bottom: 50px;
  }
`;

const TextContent = styled.div`
  .specials_flex {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .specials {
    padding: 5px 10px;
    margin: 0;
    color: #fff;
    background-color: #a0682e;
    border-radius: 20px;

    @media (max-width: 768px) {
      font-size: 13px;
    }
  }
`;

const StaticImg = styled.img`
  max-width: 50%;
  width: 100%;
  height: 100%;
  filter: contrast(110%) brightness(100%) saturate(130%);

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export default Hero;
