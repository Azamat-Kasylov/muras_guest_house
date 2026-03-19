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
              <div key={index} className="room-card">
                <img
                  src={url}
                  alt={alt}
                  className="room-image"
                  loading="lazy"
                />
                <div className="room-content">
                  <div className="title_flex">
                    <h3 className="room-title">{title}</h3>
                    <p className="room-price">{price}</p>
                  </div>
                  <p className="room-description">{description}</p>
                  <NavLink to={link} className="room_details">
                    view details
                  </NavLink>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </StyledRooms>
  );
};

const StyledRooms = styled.section`
  padding: 50px 0;
  background-color: #f0eee8;

  .section-title {
    margin-bottom: 10px;
  }

  .section-suptitle {
    color: #434851;
    margin-bottom: 40px;
  }

  .rooms-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 40px;
  }

  .room-card {
    overflow: hidden;
    background: #fff;
    border-radius: 10px;
    border: 1px solid #e2ded2;
  }

  .room-image {
    width: 100%;
    aspect-ratio: 16/11;
    object-fit: cover;
  }

  .room-content {
    padding: 15px;
    background-color: #fff;

    .title_flex {
      margin-bottom: 15px;
      display: flex;
      justify-content: space-between;
      gap: 20px;
    }

    .room-title {
      color: #000;
      font-size: 18px;
      font-weight: 600;
    }

    .room-description,
    .room-price {
      color: #434851;
    }

    .room-description {
      margin-bottom: 20px;
    }

    .room-price {
      text-align: end;
    }

    .room_details {
      font-size: 14px;
      width: fit-content;
      padding: 5px 15px;
      color: #fff;
      background-color: #a0682e;
      border-radius: 50px;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export default RoomsSection;
