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
              <div key={index} className="services-card">
                <img src={url} alt={alt} className="services-image" />
                <div className="services-content">
                  <h3 className="services-title">{title}</h3>
                  <p className="services-description">{description}</p>
                  <NavLink to={link} className="services_details">
                    view details
                  </NavLink>
                </div>
              </div>
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
    margin-bottom: 40px;
  }

  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 40px;
  }

  .services-card {
    margin: 0 auto;
    max-width: 400px;
    overflow: hidden;
    background: #fff;
    border-radius: 10px;
    border: 1px solid #e2ded2;
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
    margin-bottom: 20px;
  }

  .services_details {
    font-size: 14px;
    width: fit-content;
    padding: 5px 15px;
    color: #fef3c7;
    background-color: #b97328;
    border-radius: 50px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default ServicesSection;
