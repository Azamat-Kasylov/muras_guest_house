/* eslint-disable jsx-a11y/alt-text */
import styled from "styled-components";
import { ServisesData } from "../data";

const ServisesItem = ({ title, price, description }) => {
  return (
    <Wrapper>
      {ServisesData.map((i) => (
        <StyledDiv key={i.imagePath}>
          <div>
            <img src={i.imagePath} />
          </div>
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
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  gap: 30px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const StyledDiv = styled.div`
  padding: 15px;
  background-color: #fff;
  border: 0.3px solid #e8e8e8;
  border-radius: 20px;
  position: relative;

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
    border-radius: 15px;
  }
`;

export default ServisesItem;
