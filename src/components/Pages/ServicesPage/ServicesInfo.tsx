import React from "react";
import styled from "styled-components";
import { ServiceInterface } from "../../../data";

interface ServicesInfoProps {
  service: ServiceInterface[];
}

const ServicesInfo: React.FC<ServicesInfoProps> = ({ service }) => {
  return (
    <StyledYurt>
      <div className="service-wrapper">
        {service.map(({ title, description, menu, price }, index) => (
          <div key={index} className="service-card">
            <h3 className="service-title">{title}</h3>
            <p className="service-menu">{`Menu: ${menu}`}</p>
            <p className="service-description">{description}</p>
            <p className="service-price">{price}</p>
          </div>
        ))}
      </div>
    </StyledYurt>
  );
};

const StyledYurt = styled.section`
  margin-bottom: 50px;

  .service-wrapper {
    max-width: max-content;
    display: flex;
    flex-direction: column;
  }

  .service-card {
    width: 100%;
    margin-top: 50px;
    @media (max-width: 900px) {
      padding: 0 1rem;
    }
  }

  .service-title {
    color: #000;
    padding-bottom: 10px;
  }

  .service-description,
  .service-menu {
    color: #555;
    padding-bottom: 10px;
  }

  .service-price {
    padding: 5px 0;
    font-weight: 700;
    background-color: #f6e7a7;
    text-align: center;
  }
`;

export default ServicesInfo;
