import React from "react";
import styled from "styled-components";
import RoomsYurt from "./RoomsYurt";
import RoomsStandard from "./RoomsStandard";
import RoomsComfort from "./RoomsComfort";
import { NavLink } from "react-router-dom";

const RoomsPage: React.FC = () => {
  return (
    <StyledRooms className="rooms">
      <NavLink to="link" className="room-link"></NavLink>
      <h2>Our rooms and Yurts</h2>
      <RoomsYurt />
      <RoomsStandard />
      <RoomsComfort />
    </StyledRooms>
  );
};

const StyledRooms = styled.section`
  padding: 60px 50px 50px;
`;

export default RoomsPage;
