import React from "react";
import styled from "styled-components";
import { ServiceInterface } from "../../../data";

interface ServicesInfoProps {
  service: ServiceInterface[];
}

const ServicesInfo: React.FC<ServicesInfoProps> = ({ service }) => {
  return (
    <StyledYurt>
      {service.map(({ title, description, menu, price }, index) => (
        <div key={index} className="service-card">
          <h3 className="service-title">{title}</h3>
          <p className="service-menu">{`Menu: ${menu}`}</p>
          <p className="service-description">{description}</p>
          <p className="service-price">{price}</p>
        </div>
      ))}
    </StyledYurt>
  );
};

const StyledYurt = styled.div`
  margin-top: 30px;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }

  .service-card {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .service-title {
    font-weight: 500;
    color: #000;
    padding-bottom: 10px;
  }

  .service-description,
  .service-menu {
    color: #6b7280;
    padding-bottom: 10px;
  }

  .service-price {
    padding: 5px 20px;
    font-weight: 400;
    color: #fef3c7;
    background-color: #b97328;
    border-radius: 5px;
  }
`;

export default ServicesInfo;
