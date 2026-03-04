import React from "react";
import styled from "styled-components";

const HeroPage: React.FC = () => {
  return (
    <Section id="aboutUs">
      <HeroWrapper className="container">
        <h1 className="title">Muras Guest House</h1>
        <ContentWrapper>
          <StaticImg src="./3_ainura.jpeg" alt="Owner" />
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
  margin-bottom: 50px;
`;

const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;

  .title {
    margin: 0;
    margin: 30px 0;
    font-size: clamp(30px, 3vw + 10px, 50px);
    font-weight: normal;
    text-align: center;
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
  .hero_text {
    margin-bottom: 20px;
    color: #6b7280;
  }
  font-size: 24px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const StaticImg = styled.img`
  position: relative;
  width: 100%;
  max-width: 40%;
  align-self: start;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export default HeroPage;
