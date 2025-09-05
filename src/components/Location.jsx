/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import styled from "styled-components";

const Location = () => {
  return (
    <StyledLocation>
      <div>
        <img src="map1.png" />
        <img src="meteo.png" />
      </div>
    </StyledLocation>
  );
};

const StyledLocation = styled.div`
  min-height: 100vh;
  padding: 50px 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;

  div {
    max-width: 1200px;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 50px;
  }

  img {
    max-width: 100%;
    margin: 0 auto;
  }
`;

export default Location;
