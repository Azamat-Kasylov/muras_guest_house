import React from "react";
import styled from "styled-components";

const FooterContacts = () => {
  return (
    <Contacts id="contacts">
      <p>Сontacts:</p>
      <a className="phone" href="tel:+996773001996">
        +(996) 773 00 19 96 <span>(mobile)</span>
      </a>
      <a className="phone" href="tel:+996554067279">
        +(996) 554 06 72 79 (whatsapp)
      </a>
    </Contacts>
  );
};

const Contacts = styled.div`
  display: flex;
  flex-direction: column;
  & {
    color: #fff7e5;
  }
  p {
    margin: 0;
    margin-bottom: 5px;
    @media (max-width: 500px) {
      text-align: center;
    }
  }
  a {
    display: inline-block;
    text-decoration: none;
    padding: 5px 0;
    color: #fff7e5;
    position: relative;
    border-bottom: 1px dashed #05050524;
    transition: transform 0.5s;
  }
  a:hover {
    transform: translateX(30px);
  }

  span {
    letter-spacing: 2px;
  }
`;

export default FooterContacts;
