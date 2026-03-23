import React from "react";
import styled from "styled-components";

interface Props {
  onButtonClick: Function;
}

const PopupFormMessage: React.FC<Props> = ({ onButtonClick }) => {
  return (
    <PopupWrapper>
      <PopupMessage>
        Your message was successfully sended
        <Button onClick={() => onButtonClick()}>Ok</Button>
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
  font-family: "Montserrat", sans-serif;
  padding: 40px 20px;
  width: calc(100% - 32px);
  position: absolute;
  bottom: 210px;
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

  @media (max-height: 450px) {
    bottom: 20px;
  }
`;

const Button = styled.button`
  padding: 10px 40px;
  display: block;
  margin: 1rem auto 0;
  font-size: 16px;
  color: #fff;
  background-color: #a6623f;
  border: none;
  border-radius: 10px;
  transition: background-color 0.3s;
  justify-content: center;
`;

export default PopupFormMessage;
