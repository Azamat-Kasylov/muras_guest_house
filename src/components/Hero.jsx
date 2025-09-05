import React from "react";
import styled from "styled-components";

const Hero = () => {
  return (
    <StyledHero id="aboutUs">
      <HeroWrapper>
        <ContentWrapper>
          <StaticImg src="/3.jpeg" alt="Owner" />
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
              the senses.
              <span>Your happy place.</span>
            </p>
          </TextContent>
        </ContentWrapper>
      </HeroWrapper>
    </StyledHero>
  );
};

const StyledHero = styled.div`
  min-height: 100vh;
  background-image: url(/14.jpeg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
`;

const HeroWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 10%,
    rgba(255, 255, 255, 0) 300%
  );
`;

const ContentWrapper = styled.div`
  display: flex;
  align-self: center;
  justify-content: space-between;
  gap: 50px;
  padding: 0 16px;
  @media (max-width: 768px) {
    flex-direction: column;
    display: flex;
    align-items: center;
  }
`;

const TextContent = styled.div`
  p {
    margin-bottom: 20px;
  }
  font-size: 24px;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const StaticImg = styled.img`
  position: relative;
  width: 100%;
  max-width: 50%;
  align-self: start;
  border-radius: 20px;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export default Hero;
