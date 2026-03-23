import React from "react";
import styled from "styled-components";
import { servicesData } from "../../../data";
import { NavLink } from "react-router-dom";

const ServicesSection: React.FC = () => {
  return (
    <StyledServices id="services" className="services">
      <div className="container">
        <h2 className="section-title">Our services</h2>
        <p className="section-suptitle">What we offer</p>
        <div className="services-grid">
          {servicesData.map(({ info: { title, description }, link }, index) => (
            <div key={index} className="services-card">
              <h3 className="services-title">{title}</h3>
              <p className="services-description">{description}</p>
              <NavLink to={link} className="services_details">
                view details
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </StyledServices>
  );
};

const StyledServices = styled.section`
  padding: 100px 0;
  background-color: #fff;
  transition: all 0.5s;

  .section-title {
    margin-bottom: 20px;
  }

  .section-suptitle {
    text-transform: uppercase;
    color: #7e7367;
    margin-bottom: 50px;
  }

  .services-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .services-card {
    padding: 25px 10px;
    border-top: 1px solid #e2ded2;
  }

  .services-title {
    font-size: 26px;
    font-weight: 400;
    margin-bottom: 15px;
  }

  .services-description {
    color: #7e7367;
    margin-bottom: 30px;
    line-height: 1.7;
  }

  .services_details {
    padding-bottom: 5px;
    color: #7e7367;

    &:hover {
      border-bottom: 1px solid #fff;
    }
  }

  h2,
  h3,
  p,
  a {
    transition: all 0.5s;
  }

  &:has(.services-grid:hover) {
    background-color: #3b332b;

    h2,
    h3,
    p,
    a {
      color: #fff;
    }
  }

  @media (max-width: 1024px) {
    .services-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 768px) {
    .services-grid {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
  }
`;

export default ServicesSection;
