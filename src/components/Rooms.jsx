import styled from "styled-components";
import RoomsItem from "./RoomsItem";

const Rooms = () => {
  return (
    <StyledRooms id="rooms">
      <h2>Our rooms and Yurts</h2>
      <RoomsItem />
    </StyledRooms>
  );
};

const StyledRooms = styled.section`
  min-height: 100vh;
  padding: 0 1rem 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff7e5;
`;

export default Rooms;
