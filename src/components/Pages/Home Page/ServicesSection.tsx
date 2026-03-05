import React from "react";
import styled from "styled-components";
import { servicesData } from "../../../data";
import { NavLink } from "react-router-dom";

const ServicesSection: React.FC = () => {
  return (
    <StyledServices id="services" className="services">
      <div className="container">
        <h2 className="section-title">Our services</h2>
        <p className="section-suptitle">
          Everything you need for a comfortable, worry-free stay
        </p>
        <div className="services-grid">
          {servicesData.map(
            (
              { image: { url, alt }, info: { title, description }, link },
              index,
            ) => (
              <NavLink to={link} key={index} className="services-card">
                <img src={url} alt={alt} className="services-image" />
                <div className="services-content">
                  <h3 className="services-title">{title}</h3>
                  <p className="services-description">{description}</p>
                </div>
              </NavLink>
            ),
          )}
        </div>
      </div>
    </StyledServices>
  );
};

const StyledServices = styled.section`
  padding: 50px 0;
  background-color: #f0eee8;

  .section-title {
    margin-bottom: 10px;
  }

  .section-suptitle {
    color: #6b7280;
    margin-bottom: 50px;
  }

  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
  }

  .services-card {
    overflow: hidden;
    background: #fff;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transition: transform 0.2s ease;
  }

  .services-card:hover {
    transform: translateY(-5px);
  }

  .services-image {
    width: 100%;
    aspect-ratio: 16/11;
    object-fit: cover;
  }

  .services-content {
    padding: 15px;
  }

  .services-title {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 15px;
  }

  .services-description {
    color: #6b7280;
    margin-bottom: 10px;
  }
`;

export default ServicesSection;
