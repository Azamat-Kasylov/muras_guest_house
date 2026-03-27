import React from "react";
import styled from "styled-components";
import RoomsInfo from "./RoomsInfo";
import { roomsImages, roomsInfo } from "../../../data";
import RoomsGallery from "./RoomsGallery";

const RoomsPage: React.FC = () => {
  return (
    <StyledRooms className="rooms">
      <h2 className="title">Room Types</h2>
      <p className="suptitle">Choose the stay that suits your journey</p>
      <div className="container">
        <div className="flex_cont">
          <RoomsInfo rooms={roomsInfo.yurtInfo} />
          <RoomsGallery media={roomsImages.yurtImages} />
        </div>
        <div className="flex_cont">
          <RoomsInfo rooms={roomsInfo.standardRoomInfo} />
          <RoomsGallery media={roomsImages.standardRoomImages} />
        </div>
        <div className="flex_cont">
          <RoomsInfo rooms={roomsInfo.comfortRoomInfo} />
          <RoomsGallery media={roomsImages.comfortRoomImages} />
        </div>
      </div>
    </StyledRooms>
  );
};

const StyledRooms = styled.section`
  padding-top: 60px;
  background-color: #fff;

  .flex_cont {
    width: 100%;
    display: flex;
    gap: 2rem;
    margin-bottom: 6rem;

    &:nth-child(2) {
      flex-direction: row-reverse;
    }
  }

  .title {
    width: 100%;
    text-align: center;
    padding-bottom: 1rem;
    margin-top: 2rem;
  }

  .suptitle {
    text-transform: uppercase;
    text-align: center;
    color: #7e7367;
    padding-bottom: 3rem;
    margin-bottom: 4rem;
    border-bottom: 1px solid #e2ded2;
  }

  @media (max-width: 1024px) {
    .flex_cont {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 2rem;

      &:nth-child(2) {
        flex-direction: column;
      }
    }
  }

  @media (max-width: 768px) {
    .container {
      padding: 0;
    }

    .flex_cont {
      flex-direction: column;
    }
  }
`;

export default RoomsPage;
