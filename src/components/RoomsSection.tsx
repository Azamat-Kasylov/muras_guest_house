import React from "react";
import styled from "styled-components";
import { roomsData } from "../data";
import { NavLink } from "react-router";

const RoomsSection: React.FC = () => {
  return (
    <StyledRooms id="rooms" className="rooms">
      <h2 className="section-title">Our rooms and Yurts</h2>
      <div className="rooms-grid">
        {roomsData.map((room, index) => (
          <NavLink to={room.link} key={index} className="room-card">
            <img src={room.imagePath} alt={room.title} className="room-image" />
            <div className="room-content">
              <h3 className="room-title">{room.title}</h3>
              <p className="room-description">{room.description}</p>
              {/* <p className="room-price">{room.price}</p> */}
            </div>
          </NavLink>
        ))}
      </div>
    </StyledRooms>
  );
};

const StyledRooms = styled.section`
  min-height: 100%;
  padding: 0 50px 50px;
  background-color: #f8fafc;
  overflow: hidden;

  @media (max-width: 500px) {
    padding: 0 3rem 50px;
  }

  .section-title {
    font-size: 36px;
    text-align: center;
  }

  .rooms-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 40px;
  }

  .room-card {
    overflow: hidden;
    background: #fff;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transition: transform 0.2s ease;
    text-decoration: none;
  }

  .room-card:hover {
    transform: translateY(-5px);
  }

  .room-image {
    width: 100%;
    aspect-ratio: 16/11;
    object-fit: cover;
  }

  .room-content {
    padding: 15px;
  }

  .room-title {
    color: #000;
    font-size: 20px;
    margin: 0 0 10px;
  }

  .room-description {
    font-size: 14px;
    color: #555;
    margin-bottom: 10px;
  }

  .room-price {
    font-weight: bold;
    color: #0077cc;
  }
`;

export default RoomsSection;
