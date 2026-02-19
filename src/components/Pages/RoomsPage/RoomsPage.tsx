import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import RoomsInfo from "./RoomsInfo";
import { roomsImages, roomsInfo } from "../../../data";
import RoomsGallery from "./RoomsGallery";

const RoomsPage: React.FC = () => {
  return (
    <StyledRooms className="rooms">
      <NavLink to="link" className="room-link"></NavLink>
      <h2 className="title">Our rooms and Yurts</h2>
      <RoomsInfo rooms={roomsInfo.yurtInfo} />
      <RoomsGallery media={roomsImages.yurtImages} />
      <RoomsInfo rooms={roomsInfo.standardRoomInfo} />
      <RoomsGallery media={roomsImages.standardRoomImages} />
      <RoomsInfo rooms={roomsInfo.comfortRoomInfo} />
      <RoomsGallery media={roomsImages.comfortRoomImages} />
    </StyledRooms>
  );
};

const StyledRooms = styled.section`
  padding: 80px 50px 50px;
  @media (max-width: 768px) {
    padding: 80px 0 50px;
  }

  .title {
    font-size: clamp(36px, 5vw, 50px);
    padding: 0 1rem;
  }
`;

export default RoomsPage;
