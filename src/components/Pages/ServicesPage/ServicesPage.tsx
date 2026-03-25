import React from "react";
import styled from "styled-components";
import ServicesGallery from "./ServicesGallery";
import ServicesInfo from "./ServicesInfo";
import { serviceImages, serviceInfo } from "../../../data";

const ServicesPage: React.FC = () => {
  return (
    <Section className="services">
      <h2 className="title">Our Services</h2>
      <p className="suptitle">What we offer</p>
      <div className="container">
        <div className="flex_cont">
          <ServicesInfo service={serviceInfo.mealsInfo} className={""} />
          <ServicesGallery images={serviceImages.meals} />
        </div>
        <div className="flex_cont">
          <ServicesInfo
            service={serviceInfo.transferInfo}
            className={"hidden"}
          />
          <ServicesInfo service={serviceInfo.toursInfo} className={"hidden"} />
        </div>
        <div className="flex_cont">
          <ServicesInfo
            service={serviceInfo.campingInfo}
            className={"hidden"}
          />
          <ServicesInfo
            service={serviceInfo.laundryInfo}
            className={"hidden"}
          />
        </div>
      </div>
    </Section>
  );
};

const Section = styled.section`
  padding-top: 60px;
  margin-bottom: 6rem;
  background-color: #fff;

  .flex_cont {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 6rem;
  }

  .title {
    width: 100%;
    text-align: center;
    padding-bottom: 1rem;
    margin-top: 2rem;
  }

  .suptitle {
    text-transform: uppercase;
    text-align: center;
    color: #7e7367;
    padding-bottom: 3rem;
    margin-bottom: 4rem;
    border-bottom: 1px solid #e2ded2;
  }

  @media (max-width: 1024px) {
    .flex_cont {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 2rem;

      &:nth-child(n + 2) {
        gap: 6rem;
      }
    }
  }

  @media (max-width: 768px) {
    .container {
      padding: 0;
    }

    .flex_cont {
      flex-direction: column;
    }
  }
`;

export default ServicesPage;
