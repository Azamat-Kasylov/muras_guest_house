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
  display: flex;
  justify-content: center;

  .room-card {
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .room-title {
    margin-bottom: 1.5rem;
  }

  .room-description {
    color: #7e7367;
    margin-bottom: 1.5rem;
    text-align: center;
  }

  .room-price {
    font-family: "Cormorant Garamond", serif;
    font-style: italic;
    font-size: 24px;
    color: #000;
    border-radius: 5px;
  }

  @media (max-width: 1024px) {
    .room-card {
      padding: 0;
    }
  }

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

export default RoomsInfo;
