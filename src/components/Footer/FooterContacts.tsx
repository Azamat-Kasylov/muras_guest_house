import styled from "styled-components";

const FooterContacts: React.FC = () => {
  return (
    <Contacts id="contacts">
      <p>Сontacts:</p>
      <a className="phone" href="tel:+996773001996">
        +(996) 773 00 19 96 (mobile)
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
    @media (max-width: 768px) {
      text-align: center;
    }
  }
  a {
    display: inline-block;
    padding: 5px 0;
    color: #fff7e5;
    position: relative;
    transition: transform 0.5s;
  }
  a:hover {
    transform: translateX(30px);
  }
`;

export default FooterContacts;
