/* eslint-disable jsx-a11y/alt-text */
import styled from "styled-components";
import { roomsData } from "../data";

const RoomsItem = ({ title, price, description }) => {
  return (
    <Wrapper>
      {roomsData.map((i) => (
        <StyledDiv key={i.imagePath}>
          <img src={i.imagePath} />
          <p>{i.price}</p>
          <p>{i.title}</p>
          <p>{i.description}</p>
        </StyledDiv>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: auto;
  gap: 20px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const StyledDiv = styled.div`
  height: auto;
  padding: 15px;
  background-color: #fff;
  border: 0.5px solid #e9e9e9;
  border-radius: 20px;
  position: relative;

  &:first-child {
    grid-row: 1 / span 2;
  }

  p {
    margin: 0;
    padding: 0;
  }

  p:first-of-type {
    width: 70px;
    text-align: center;
    padding: 5px 0;
    border: 0.5px solid #fff;
    border-radius: 20px;
    background-color: #f4d549;
    color: #000;
    position: absolute;
    top: 25px;
    left: 25px;
  }

  p:nth-of-type(2) {
    margin: 8px 0;
    font-weight: 700;
  }

  img {
    width: 100%;
    aspect-ratio: 16/11;
    object-fit: cover;
    border: 0.3px solid #f7f7f7;
    border-radius: 15px;
  }
`;

export default RoomsItem;
