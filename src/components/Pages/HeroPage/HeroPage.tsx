import React from "react";
import styled from "styled-components";

const HeroPage: React.FC = () => {
  return (
    <Section id="aboutUs">
      <HeroWrapper className="container">
        <h2 className="title">Muras Guest House</h2>
        <p className="suptitle">
          A cozy basecamp for exploring the wild beauty of the Alay Valley.
        </p>
        <ContentWrapper>
          <picture>
            <source srcSet="./3_ainura.webp" type="image/webp" />
            <img src="./3_ainura.jpeg" alt="Owner" className="hero_img" />
          </picture>
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
          </TextContent>
        </ContentWrapper>
      </HeroWrapper>
    </Section>
  );
};

const Section = styled.section`
  padding-top: 60px;
  padding-bottom: 50px;
  background-color: #f5f3ee;
`;

const HeroWrapper = styled.div`
  .title {
    margin-top: 30px;
    margin-bottom: 10px;
  }

  .suptitle {
    color: #626976;
    margin-bottom: 50px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  align-self: center;
  justify-content: space-between;
  gap: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    display: flex;
    align-items: center;
  }
`;

const TextContent = styled.div`
  width: 100%;

  .hero_text {
    margin-bottom: 20px;
    color: #626976;
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export default HeroPage;
