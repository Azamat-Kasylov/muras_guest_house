import React from "react";
import styled from "styled-components";
import { roomsYurt } from "../data";
import RoomsYurtGallery from "./RoomsYurtGallery";

const RoomsSection: React.FC = () => {
  return (
    <StyledYurt className="yurt">
      <div className="yurt-grid">
        <RoomsYurtGallery />
        {roomsYurt.map((room, index) => (
          <div key={index} className="yurt-card">
            {/* <img src={room.imagePath} alt={room.title} className="yurt-image" /> */}
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
  padding: 100px 50px 50px;

  .yurt-title {
    color: #000;
  }

  .yurt-description {
    color: #555;
  }

  .yurt-price {
    font-weight: 700;
    color: blue;
  }
`;

export default RoomsSection;
