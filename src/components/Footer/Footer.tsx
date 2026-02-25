import styled from "styled-components";
import FooterSocial from "./FooterSocial";
import FooterContacts from "./FooterContacts";
import Certificates from "./Certificates";
import { certificateData } from "../../data";

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <Certificates certificates={certificateData} />
      <FooterContent>
        <FooterContacts />
        <FooterSocial />
      </FooterContent>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  min-height: 100vh;
  padding: 1rem;
  background-image: url(./footer.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100%;
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

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    padding: 30px 0;
  }
`;

export default Footer;
