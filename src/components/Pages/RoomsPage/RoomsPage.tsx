import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import RoomsInfo from "./RoomsInfo";
import {
  roomsYurt,
  roomsYurtImages,
  roomsStandardImages,
  roomsStandard,
  roomsComfortImages,
  roomsComfort,
} from "../../../data";
import RoomsGallery from "./RoomsGallery";

const RoomsPage: React.FC = () => {
  return (
    <StyledRooms className="rooms">
      <NavLink to="link" className="room-link"></NavLink>
      <h2 className="title">Our rooms and Yurts</h2>
      <RoomsGallery images={roomsYurtImages} />
      <RoomsInfo rooms={roomsYurt} />
      <RoomsGallery images={roomsStandardImages} />
      <RoomsInfo rooms={roomsStandard} />
      <RoomsGallery images={roomsComfortImages} />
      <RoomsInfo rooms={roomsComfort} />
    </StyledRooms>
  );
};

const StyledRooms = styled.section`
  padding: 80px 50px 50px;
  @media (max-width: 1024px) {
    padding: 80px 0 50px;
  }

  .title {
    padding: 0 1rem;
    margin-bottom: 25px;
  }
`;

export default RoomsPage;
