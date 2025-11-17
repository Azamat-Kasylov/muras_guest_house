import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router";
import RoomsYurt from "./RoomsYurt";

const RoomsPage: React.FC = () => {
  return (
    <StyledRooms className="rooms">
      <NavLink to="link" className="room-link"></NavLink>
      <RoomsYurt />
    </StyledRooms>
  );
};

const StyledRooms = styled.section`
  padding: 100px 50px 50px;
`;

export default RoomsPage;
