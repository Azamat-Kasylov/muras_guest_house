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
  padding-bottom: 50px;
  background-color: #f5f3ee;
`;

const HeroWrapper = styled.div`
  .title {
    margin-top: 30px;
    margin-bottom: 10px;
  }

  .suptitle {
    color: #6b7280;
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
  .hero_text {
    margin-bottom: 20px;
    color: #6b7280;
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const StaticImg = styled.img`
  position: relative;
  width: 100%;
  max-width: 50%;
  align-self: start;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export default HeroPage;
