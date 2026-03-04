import React from "react";
import styled from "styled-components";
import { IInfo } from "../../../data";

interface RoomsInfoProps {
  rooms: IInfo[];
}

const RoomsInfo: React.FC<RoomsInfoProps> = ({ rooms }) => {
  return (
    <StyledYurt>
      {rooms.map((room, index) => (
        <div key={index} className="room-card">
          <h3 className="room-title">{room.title}</h3>
          <p className="room-description">{room.description}</p>
          <p className="room-price">{room.price}</p>
        </div>
      ))}
    </StyledYurt>
  );
};

const StyledYurt = styled.div`
  margin-top: 30px;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }

  .room-card {
    max-width: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .room-title {
    font-weight: 500;
    color: #000;
    padding-bottom: 10px;
    font-size: 24px;
  }

  .room-description {
    color: #6b7280;
    padding-bottom: 10px;
    text-align: center;
  }

  .room-price {
    padding: 5px 20px;
    font-weight: 400;
    color: #fef3c7;
    background-color: #b97328;
    border-radius: 5px;
  }
`;

export default RoomsInfo;
