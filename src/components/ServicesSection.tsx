import React from "react";
import styled from "styled-components";
import { ServicesData } from "../data";

const ServicesSection: React.FC = () => {
  return (
    <StyledServices id="services" className="services">
      <h2 className="section-title">Our services</h2>
      <div className="services-grid">
        {ServicesData.map((services, index) => (
          <div key={index} className="services-card">
            <img
              src={services.imagePath}
              alt={services.title}
              className="services-image"
            />
            <div className="services-content">
              <h3 className="services-title">{services.title}</h3>
              <p className="services-description">{services.description}</p>
              <p className="services-price">{services.price}</p>
            </div>
          </div>
        ))}
      </div>
    </StyledServices>
  );
};

const StyledServices = styled.section`
  padding: 0 50px 50px;
  background-color: #f8fafc;

  @media (max-width: 500px) {
    padding: 0 3rem 50px;
  }

  .section-title {
    font-size: 36px;
    text-align: center;
  }

  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 40px;
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
    font-size: 20px;
    margin: 0 0 10px;
  }

  .services-description {
    font-size: 14px;
    color: #555;
    margin-bottom: 10px;
  }

  .services-price {
    font-weight: bold;
    color: #0077cc;
  }
`;

export default ServicesSection;
