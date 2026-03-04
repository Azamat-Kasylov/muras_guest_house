import React from "react";
import styled from "styled-components";
import { roomsData } from "../../../data";
import { NavLink } from "react-router-dom";

const RoomsSection: React.FC = () => {
  return (
    <StyledRooms id="rooms" className="rooms">
      <div className="container">
        <h2 className="section-title">Room Types</h2>
        <p className="section-suptitle">
          Choose the stay that suits your journey.
        </p>
        <div className="rooms-grid">
          {roomsData.map(
            (
              {
                link,
                info: { title, description, price },
                image: { url, alt },
              },
              index,
            ) => (
              <NavLink to={link} key={index} className="room-card">
                <img src={url} alt={alt} className="room-image" />
                <div className="room-content">
                  <div className="title_flex">
                    <h3 className="room-title">{title}</h3>
                    <p className="room-price">{price}</p>
                  </div>
                  <p className="room-description">{description}</p>
                </div>
              </NavLink>
            ),
          )}
        </div>
      </div>
    </StyledRooms>
  );
};

const StyledRooms = styled.section`
  min-height: 100%;
  padding: 50px 0;
  background-color: #f0eee8;
  overflow: hidden;

  .section-title {
    margin-bottom: 10px;
  }

  .section-suptitle {
    color: #6b7280;
    margin-bottom: 40px;
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
    filter: contrast(110%) brightness(100%) saturate(130%);
  }

  .room-content {
    padding: 15px;

    .title_flex {
      display: flex;
      justify-content: space-between;
    }

    .room-title {
      color: #000;
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 20px;
    }

    .room-description {
      font-size: 16px;
      color: #6b7280;
      margin-bottom: 10px;
    }

    .room-price {
      font-size: 16px;
      color: #6b7280;
    }
  }
`;

export default RoomsSection;
