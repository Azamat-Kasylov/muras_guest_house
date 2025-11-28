import React from "react";
import styled from "styled-components";
import { roomsComfort } from "../../../data";
import RoomsStandardGallery from "./RoomsComfortGallery";

const RoomsComfort: React.FC = () => {
  return (
    <StyledYurt className="yurt">
      <div className="yurt-grid">
        <RoomsStandardGallery />
        {roomsComfort.map((room, index) => (
          <div key={index} className="yurt-card">
            <div className="yurt-text-content">
              <h3 className="yurt-title">{room.title}</h3>
              <p className="yurt-description">{room.description}</p>
              <p className="yurt-price">{room.price}</p>
            </div>
          </div>
        ))}
      </div>
    </StyledYurt>
  );
};

const StyledYurt = styled.section`
  margin-bottom: 100px;
  .yurt-grid {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .yurt-card {
    width: 100%;
    margin-top: 50px;
  }

  .yurt-title {
    color: #000;
    padding-bottom: 20px;
  }

  .yurt-description {
    color: #555;
    padding-bottom: 10px;
  }

  .yurt-price {
    font-weight: 700;
    color: blue;
  }
`;

export default RoomsComfort;
