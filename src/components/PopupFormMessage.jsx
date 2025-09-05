import React from "react";
import styled from "styled-components";

const PopupFormMessage = ({ onButtonClick }) => {
  return (
    <PopupWrapper>
      <PopupMessage>
        Your message was successfully sended
        <Button onClick={() => onButtonClick(false)}>Ok</Button>
      </PopupMessage>
    </PopupWrapper>
  );
};
const PopupWrapper = styled.div`
  width: 100%;
  min-height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 101;
`;
const PopupMessage = styled.div`
  padding: 40px 20px;
  width: calc(100% - 32px);
  position: absolute;
  bottom: 200px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  background: #fff;
  border: 1px solid #b8b8b8;
  min-width: 300px;
  margin: 0 auto;
  border-radius: 10px;
  font-size: 24px;
  text-align: center;
`;
const Button = styled.button`
  padding: 10px 40px;
  display: block;
  margin: 1rem auto 0;
  background-color: #f6e7a7;
  color: #000;
  border: none;
  border-radius: 10px;
  transition: background-color 0.3s;
  justify-content: center;
`;

export default PopupFormMessage;
