import styled from "styled-components";
import FooterSocial from "./FooterSocial";
import FooterContacts from "./FooterContacts";
import Certificates from "./Certificates";
import { certificateData } from "../../data";

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <div className="container">
        <Certificates certificates={certificateData} />
        <FooterContent>
          <div className="footer_copy">
            <div className="copy_img-wrapper">
              <img
                src="./logo_muras.jpeg"
                alt="Muras logo"
                className="copy_logo"
              />
              <p className="copy_title">Muras Guest House</p>
            </div>
            <p className="copy_suptitle">
              Alay Valley, Osh Region, Kyrgyzstan Cozy mountain hotel and
              gateway to the high passes.
            </p>
          </div>
          <FooterContacts />
          <FooterSocial />
        </FooterContent>
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  min-height: calc(100vh - 60px);
  padding-top: 70px;
  padding-bottom: 50px;
  background-image: url(./footer.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100%;
    background: linear-gradient(
      35deg,
      rgba(6, 10, 18, 0.91) 20%,
      rgba(6, 10, 18, 0.7) 50%,
      rgba(6, 10, 18, 0.91) 90%
    );
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
`;

const FooterContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-self: flex-end;
  position: relative;
  z-index: 1;

  .footer_copy {
    display: flex;
    flex-direction: column;
    max-width: 300px;

    .copy_img-wrapper {
      display: flex;
      gap: 15px;
      margin-bottom: 15px;
      align-items: center;

      .copy_logo {
        width: 40px;
        border-radius: 50%;
      }
    }

    .copy_title,
    .copy_suptitle {
      color: #fff;
    }

    .copy_title {
      font-size: 18px;
    }

    @media (max-width: 768px) {
      align-items: center;
      text-align: center;
      margin-bottom: 20px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    padding: 30px 0;
  }
`;

export default Footer;
