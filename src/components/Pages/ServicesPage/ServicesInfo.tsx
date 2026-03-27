import React from "react";
import styled from "styled-components";
import { ServiceInterface } from "../../../data";

interface ServicesInfoProps {
  service: ServiceInterface[];
  className: string;
}

const ServicesInfo: React.FC<ServicesInfoProps> = ({ service, className }) => {
  return (
    <StyledYurt>
      {service.map(
        ({ title, description, menu, price, image: { url, alt } }, index) => (
          <div key={index} className="service-card">
            <img src={url} alt={alt} className="service-img" />
            <h3 className="service-title">{title}</h3>
            <p className="service-description">{description}</p>
            <p className={`service-menu ${className}`}>{`Menu: ${menu}`}</p>
            <p className="service-price">{price}</p>
          </div>
        ),
      )}
    </StyledYurt>
  );
};

const StyledYurt = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;

  .hidden {
    display: none;
  }

  .service-card {
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .service-img {
    height: 24px;
    margin-bottom: 1rem;
  }

  .service-title {
    margin-bottom: 1.5rem;
  }

  .service-description,
  .service-menu {
    color: #7e7367;
    margin-bottom: 1.5rem;
    text-align: center;
  }

  .service-price {
    font-family: "Cormorant Garamond", serif;
    font-style: italic;
    font-size: 24px;
    font-weight: 400;
    color: #000;
    border-radius: 5px;
  }

  @media (max-width: 1024px) {
    .service-card {
      padding: 0;
    }
  }

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

export default ServicesInfo;
