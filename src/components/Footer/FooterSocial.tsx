/* eslint-disable jsx-a11y/alt-text */
import styled from "styled-components";
import { socialsData } from "../../data";

const FooterSocial: React.FC = () => {
  return (
    <Socials>
      {socialsData.map((i) => (
        <a target="_blank" rel="noreferrer" href={i.href} key={i.href}>
          <img src={i.image.url} />
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
    border: 1px dashed #ffffff64;
    border-radius: 23px;
    transition: border 0.3s;
  }
  a:hover {
    border: 1px dashed #fff;
  }
`;

export default FooterSocial;
