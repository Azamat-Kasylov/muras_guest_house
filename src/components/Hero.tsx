import React from "react";
import styled from "styled-components";

const Hero: React.FC = () => {
  return (
    <StyledHero id="aboutUs">
      <HeroWrapper>
        <ContentWrapper>
          <StaticImg src="./3_ainura.jpeg" alt="Owner" />
          <TextContent>
            <p>
              The Hotel Sonne Mellau in the Bregenzerwald is a place for
              connoisseurs, those seeking relaxation, and active holidaymakers –
              one does not exclude the other.
            </p>
            <p>
              Unforgettable moments to be shared together or enjoyed on your
              own. It's a place for special encounters and good conversations.
              An open atmosphere, style wherever you look, and enjoyment for all
              the senses. Your happy place.
            </p>
          </TextContent>
        </ContentWrapper>
      </HeroWrapper>
    </StyledHero>
  );
};

const StyledHero = styled.div`
  min-height: 100%;
`;

const HeroWrapper = styled.div`
  min-height: 100%;
  padding: 50px 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;

  @media (max-width: 768px) {
    padding: 50px 3rem;
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
  p {
    margin-bottom: 20px;
    color: #555;
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

export default Hero;
