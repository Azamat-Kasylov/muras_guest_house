import React from "react";
import styled from "styled-components";
import { breakfastData } from "../../../data";
import BreackfastGallery from "./BreakfastGallery";

const Breakfast: React.FC = () => {
  return (
    <Section className="brkfst">
      <div className="brkfst-grid">
        <BreackfastGallery />
        {breakfastData.map((brkfst, index) => (
          <div key={index} className="brkfst-card">
            <h3 className="brkfst-title">{brkfst.title}</h3>
            <p className="brkfst-menu">{brkfst.menu}</p>
            <p className="brkfst-description">{brkfst.description}</p>
            <p className="brkfst-price">{brkfst.price}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

const Section = styled.section`
  margin-bottom: 100px;

  .brkfst-grid {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .brkfst-card {
    width: 100%;
    margin-top: 50px;
    @media (max-width: 900px) {
      padding: 0 1rem;
    }
  }

  .brkfst-title {
    color: #000;
    padding-bottom: 20px;
  }

  .brkfst-description,
  .brkfst-menu {
    color: #555;
    padding-bottom: 10px;
  }

  .brkfst-price {
    font-weight: 700;
    color: blue;
  }
`;

export default Breakfast;
