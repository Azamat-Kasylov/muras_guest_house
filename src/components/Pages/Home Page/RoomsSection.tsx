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
          Choose the stay that suits your journey
        </p>
        {roomsData.map(
          (
            {
              link,
              forWhom,
              info: { title, description, price },
              image: { url, alt },
            },
            index,
          ) => (
            <div key={index} className="room-card">
              <h3 className="room-title">{title}</h3>
              <div className="flex-col">
                <div className="flex_row">
                  <p className="forWhom">{forWhom}</p>
                  <span>|</span>
                  <p className="room-price">{price}</p>
                </div>
                <p className="room-description">{description}</p>
              </div>
              <NavLink to={link} className="next" aria-label="Go to page">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                  <path
                    fill="#7e7367"
                    d="M439.1 297.4C451.6 309.9 451.6 330.2 439.1 342.7L279.1 502.7C266.6 515.2 246.3 515.2 233.8 502.7C221.3 490.2 221.3 469.9 233.8 457.4L371.2 320L233.9 182.6C221.4 170.1 221.4 149.8 233.9 137.3C246.4 124.8 266.7 124.8 279.2 137.3L439.2 297.3z"
                  />
                </svg>
              </NavLink>
            </div>
          ),
        )}
      </div>
    </StyledRooms>
  );
};

const StyledRooms = styled.section`
  padding: 100px 0;
  background-color: #fff;

  .room-description {
    display: none;
    color: #7e7367;
    transition: all 0.5s;
  }

  .container {
    padding: 0;
  }

  .section-title {
    padding-left: 6rem;
    margin-bottom: 1rem;
  }

  .section-suptitle {
    text-transform: uppercase;
    color: #7e7367;
    padding-left: 6rem;
    margin-bottom: 50px;
  }

  .room-card {
    width: 100%;
    padding: 3rem 6rem;
    display: flex;
    align-items: center;
    gap: 6rem;
    background: #fff;
    border-top: 1px solid #e2ded2;
    position: relative;
    transition: all 0.5s;

    &:hover {
      background-color: #7e7367;

      .room-description {
        display: block;
        transition: all 0.5s;
      }

      .room-title,
      .room-description,
      .room-price,
      .forWhom,
      span {
        color: #fff;
      }
    }
  }

  .room-card:last-child {
    border-bottom: 1px solid #e2ded2;
  }

  .flex-col {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
  }

  .flex_row {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  .room-title,
  .room-description,
  .room-price,
  .forWhom,
  span {
    transition: all 0.5s;
  }

  .room-title {
    color: #000;
    font-size: 32px;
    font-weight: 300;
  }

  .room-description,
  .room-price,
  .forWhom,
  span {
    color: #7e7367;
  }

  .room-title {
    min-width: fit-content;
  }

  .next {
    margin-left: auto;
    display: flex;
    align-items: center;
    width: 25px;
    border-radius: 50%;
    background-color: #fff;
  }

  @media (max-width: 1024px) {
    .room-card {
      display: flex;
      padding: 3rem 1rem;

      &:hover {
        align-items: start;

        .next {
          align-self: center;
        }
      }
    }

    .flex-col {
      flex-direction: column;
    }

    .section-title,
    .section-suptitle {
      padding-left: 1rem;
    }
  }

  @media (max-width: 768px) {
    .room-card {
      display: flex;
      flex-direction: column;
      gap: 0;

      &:hover {
        align-items: center;
      }
    }

    .room-title {
      margin: 0;
      margin-bottom: 2rem;
    }

    .room-description {
      text-align: center;
    }

    .next {
      margin-top: 1rem;
    }

    .flex_row {
      justify-content: center;
    }
  }
`;

export default RoomsSection;
