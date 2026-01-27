import React from "react";
import styled from "styled-components";
import Breakfast from "./Breakfast";
import { NavLink } from "react-router-dom";

const ServicesPage: React.FC = () => {
  return (
    <Section className="rooms">
      <NavLink to="link" className="room-link"></NavLink>
      <h2 className="title">Our services</h2>
      <Breakfast />
    </Section>
  );
};

const Section = styled.section`
  padding: 80px 50px 50px;
  @media (max-width: 900px) {
    padding: 80px 0 50px;
  }

  .title {
    padding: 0 1rem;
    margin-bottom: 25px;
  }
`;

export default ServicesPage;
