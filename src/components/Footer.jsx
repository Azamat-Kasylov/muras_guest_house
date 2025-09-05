import React from "react";
import styled from "styled-components";
import FooterSocial from "./FooterSocial";
import FooterContacts from "./FooterContacts";

const Footer = () => {
  return (
    <StyledFooter>
      <FooterContent>
        <FooterContacts />
        <FooterSocial />
      </FooterContent>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  height: 100vh;
  background-image: url(/footer.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000000;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 1) 5%,
      rgba(0, 0, 0, 1) 10%,
      rgba(0, 0, 0, 0) 50%
    );
  }
`;

const FooterContent = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 30px 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-self: flex-end;
  position: relative;
  z-index: 1;

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

export default Footer;
