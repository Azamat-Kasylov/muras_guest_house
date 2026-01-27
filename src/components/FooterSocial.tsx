/* eslint-disable jsx-a11y/alt-text */
import styled from "styled-components";
import { SocialsData } from "../data";

const FooterSocial: React.FC = () => {
  return (
    <Socials>
      {SocialsData.map((i) => (
        <a target="_blank" rel="noreferrer" href={i.href} key={i.href}>
          <img src={i.iconPath} />
        </a>
      ))}
    </Socials>
  );
};

const Socials = styled.div`
  text-align: center;
  display: flex;
  gap: 20px;

  img {
    width: 30px;
  }
  a {
    display: flex;
    justify-content: center;
    width: 46px;
    height: 46px;
    border: 1px dashed #ffffff69;
    border-radius: 23px;
    transition: border 0.5s;
  }
  a:hover {
    border: 1px dashed #fff;
  }
`;

export default FooterSocial;
