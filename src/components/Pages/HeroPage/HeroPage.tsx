import React from "react";
import styled from "styled-components";

const HeroPage: React.FC = () => {
  return (
    <StyledHero id="aboutUs">
      <HeroWrapper>
        <h1 className="title">Muras Guest House</h1>
        <ContentWrapper>
          <StaticImg src="./3_ainura.jpeg" alt="Owner" />
          <TextContent>
            <p>
              The Muras Guest House in Sary-Tash is a place for connoisseurs,
              those seeking relaxation, and active holidaymakers – one does not
              exclude the other.
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

const StyledHero = styled.section`
  min-height: 100%;
  padding-top: 40px;
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

  .title {
    margin: 0;
    margin-bottom: 30px;
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

export default HeroPage;
