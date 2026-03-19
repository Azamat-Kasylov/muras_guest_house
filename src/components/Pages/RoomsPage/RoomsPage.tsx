import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import RoomsInfo from "./RoomsInfo";
import { roomsImages, roomsInfo } from "../../../data";
import RoomsGallery from "./RoomsGallery";

const RoomsPage: React.FC = () => {
  return (
    <StyledRooms className="rooms">
      <div className="container">
        <NavLink
          to="link"
          className="room-link"
          aria-label="rooms page"
        ></NavLink>
        <RoomsInfo rooms={roomsInfo.yurtInfo} />
        <RoomsGallery media={roomsImages.yurtImages} />
        <RoomsInfo rooms={roomsInfo.standardRoomInfo} />
        <RoomsGallery media={roomsImages.standardRoomImages} />
        <RoomsInfo rooms={roomsInfo.comfortRoomInfo} />
        <RoomsGallery media={roomsImages.comfortRoomImages} />
      </div>
    </StyledRooms>
  );
};

const StyledRooms = styled.section`
  padding-top: 60px;
  background-color: #f5f3ee;

  .container {
    @media (max-width: 768px) {
      padding: 0;
    }
  }
`;

export default RoomsPage;
