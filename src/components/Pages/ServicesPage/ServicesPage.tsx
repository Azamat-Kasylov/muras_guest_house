import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import ServicesGallery from "./ServicesGallery";
import ServicesInfo from "./ServicesInfo";
import { serviceImages, serviceInfo } from "../../../data";

const ServicesPage: React.FC = () => {
  return (
    <Section className="rooms">
      <NavLink to="link" className="room-link"></NavLink>
      <h2 className="title">Our services</h2>
      <ServicesInfo service={serviceInfo.breakfastInfo} />
      <ServicesGallery images={serviceImages.breakfast} />
      <ServicesInfo service={serviceInfo.lunchInfo} />
      <ServicesGallery images={serviceImages.lunch} />
      <ServicesInfo service={serviceInfo.dinnerInfo} />
      <ServicesGallery images={serviceImages.dinner} />
    </Section>
  );
};

const Section = styled.section`
  padding: 80px 50px 50px;
  @media (max-width: 1024px) {
    padding: 80px 0 50px;
  }

  .title {
    padding: 0 1rem;
  }
`;

export default ServicesPage;
