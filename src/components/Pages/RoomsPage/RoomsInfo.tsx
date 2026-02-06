import React from "react";
import styled from "styled-components";
import { IInfo } from "../../../data";

interface RoomsInfoProps {
  rooms: IInfo[];
}

const RoomsInfo: React.FC<RoomsInfoProps> = ({ rooms }) => {
  return (
    <StyledYurt>
      <div className="rooms-card-wrapper">
        {rooms.map((room, index) => (
          <div key={index} className="room-card">
            <h3 className="room-title">{room.title}</h3>
            <p className="room-description">{room.description}</p>
            <p className="room-price">{room.price}</p>
          </div>
        ))}
      </div>
    </StyledYurt>
  );
};

const StyledYurt = styled.section`
  margin-bottom: 50px;

  .rooms-card-wrapper {
    max-width: max-content;
    display: flex;
    flex-direction: column;
  }

  .room-card {
    width: 100%;
    margin-top: 50px;
    @media (max-width: 768px) {
      padding: 0 1rem;
      margin-top: 30px;
    }
  }

  .room-title {
    color: #000;
    padding-bottom: 10px;
  }

  .room-description {
    color: #555;
    padding-bottom: 10px;
  }

  .room-price {
    padding: 5px 0;
    font-weight: 700;
    background-color: #f6e7a7;
    text-align: center;
  }
`;

export default RoomsInfo;
