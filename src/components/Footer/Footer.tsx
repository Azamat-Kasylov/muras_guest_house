import styled from "styled-components";
import FooterSocial from "./FooterSocial";
import FooterContacts from "./FooterContacts";
import Certificates from "./Certificates";
import { certificateData } from "../../data";

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <picture>
        <source srcSet="./footer.webp" type="image/webp" />
        <img
          src="./footer.jpg"
          alt="footer background-image"
          className="footer_img"
          loading="lazy"
        />
      </picture>
      <div className="container">
        <Certificates certificates={certificateData} />
        <FooterContent>
          <div className="footer_copy">
            <div className="copy_img-wrapper">
              <img
                src="./logo_muras.webp "
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
  min-height: 100vh;
  padding-bottom: 50px;
  display: flex;
  justify-content: center;
  position: relative;

  .footer_img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    filter: brightness(30%);
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
