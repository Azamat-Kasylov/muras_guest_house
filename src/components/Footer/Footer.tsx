import styled from "styled-components";
import FooterSocial from "./FooterSocial";
import FooterContacts from "./FooterContacts";
import FooterNavigation from "./FooterNavigation";

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <div className="container">
        <div className="footer_copy">
          <h2 className="footer_title">Muras</h2>
          <p className="footer_suptitle">
            Alay Valley, Osh Region, Kyrgyzstan Cozy mountain hotel and gateway
            to the high passes.
          </p>
          <FooterContacts />
        </div>
        <FooterNavigation />
        <FooterSocial />
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  padding: 6rem 0;
  background-color: #fff;
  border-top: 1px solid #e2ded2;

  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  .footer_title {
    margin-bottom: 1rem;
  }

  .footer_suptitle {
    max-width: 330px;
    color: #7e7367;
    margin-bottom: 2rem;
    line-height: 1.7;
  }

  @media (max-width: 1024px) {
    .container {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 768px) {
    .container {
      grid-template-columns: 1fr;
    }
  }
`;

export default Footer;
