/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import styled from "styled-components";
import { FeedBackData } from "../data";

const FeedBack = () => {
  return (
    <StyledFeedBack>
      <FeedBackContent>
        <h2>Our guests</h2>
        {FeedBackData.map((i) => (
          <div key={i.imagePath}>
            <img src={i.imagePath} />
            <p>"{i.description}"</p>
            <p>{i.guest}</p>
          </div>
        ))}
      </FeedBackContent>
    </StyledFeedBack>
  );
};

const StyledFeedBack = styled.section`
  height: 100vh;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FeedBackContent = styled.div`
  width: 1200px;
  padding: 0 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  h2 {
    margin: 0;
    font-weight: normal;
    @media (max-width: 768px) {
      margin-bottom: 70px;
    }
  }

  div {
    max-width: 60%;
    @media (max-width: 768px) {
      max-width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  img {
    width: 180px;
    height: 180px;
    object-fit: cover;
    margin-bottom: 30px;
    border-radius: 100px;
    @media (max-width: 768px) {
    }
  }

  p:first-of-type {
    margin-bottom: 30px;
    line-height: 1.7;
  }

  p:nth-of-type(1) {
    font-style: italic;
  }
`;

export default FeedBack;
