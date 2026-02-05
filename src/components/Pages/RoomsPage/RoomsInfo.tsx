import React from "react";
import styled from "styled-components";

interface RoomItem {
  title: string;
  description: string;
  price: string;
}

interface RoomsInfoProps {
  rooms: RoomItem[];
}

const RoomsInfo: React.FC<RoomsInfoProps> = ({ rooms }) => {
  return (
    <StyledYurt>
      <div className="wrapper">
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
  margin-bottom: 100px;

  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .room-card {
    width: 100%;
    margin-top: 50px;
    @media (max-width: 1024px) {
      padding: 0 1rem;
    }
  }

  .room-title {
    color: #000;
    padding-bottom: 20px;
  }

  .room-description {
    color: #555;
    padding-bottom: 10px;
  }

  .room-price {
    font-weight: 700;
    color: blue;
  }
`;

export default RoomsInfo;
