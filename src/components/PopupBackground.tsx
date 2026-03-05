import React from "react";
import styled from "styled-components";

interface Props {
  setIsOpen: (v: any) => void;
  isOpen: any;
}

const PopupBackground: React.FC<Props> = ({ setIsOpen, isOpen }) => {
  const popupHadleClick = () => {
    if (typeof isOpen === "number") {
      setIsOpen(null);
    } else if (typeof isOpen === "boolean") {
      setIsOpen(!isOpen);
    }
  };

  return <StyledDiv className="popup" onClick={popupHadleClick}></StyledDiv>;
};

const StyledDiv = styled.div`
  position: fixed;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 89;
`;

export default PopupBackground;
