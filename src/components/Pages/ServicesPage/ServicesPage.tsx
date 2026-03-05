import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import ServicesGallery from "./ServicesGallery";
import ServicesInfo from "./ServicesInfo";
import { serviceImages, serviceInfo } from "../../../data";

const ServicesPage: React.FC = () => {
  return (
    <Section className="services">
      <div className="container">
        <NavLink to="link" className="services-link"></NavLink>
        <ServicesInfo service={serviceInfo.breakfastInfo} />
        <ServicesGallery images={serviceImages.breakfast} />
        <ServicesInfo service={serviceInfo.lunchInfo} />
        <ServicesGallery images={serviceImages.lunch} />
        <ServicesInfo service={serviceInfo.dinnerInfo} />
        <ServicesGallery images={serviceImages.dinner} />
      </div>
    </Section>
  );
};

const Section = styled.section`
  padding-top: 60px;
  background-color: #f5f3ee;

  .container {
    @media (max-width: 768px) {
      padding: 0;
    }
  }
`;

export default ServicesPage;
