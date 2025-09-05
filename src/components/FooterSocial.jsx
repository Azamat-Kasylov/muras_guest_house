/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import styled from "styled-components";
import { SocialsData } from "../data";

const FooterSocial = () => {
  return (
    <Socials>
      {SocialsData.map((i) => (
        <a target="_blank" rel="noreferrer" href={i.href} key={i.href}>
          <img src={i.iconPath} key={i.href} />
        </a>
      ))}
    </Socials>
  );
};

const Socials = styled.div`
  text-align: center;
  display: flex;

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
  a + a {
    margin-left: 20px;
  }
`;

export default FooterSocial;
