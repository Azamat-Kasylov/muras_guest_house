import React from "react";
import styled from "styled-components";

interface PopupProps<T extends number | boolean | null> {
  setIsOpen: (value: T) => void;
  isOpen: T;
}

const PopupBackground = <T extends number | boolean | null>({
  setIsOpen,
  isOpen,
}: PopupProps<T>) => {
  const popupHandleClick = () => {
    if (typeof isOpen === "number") {
      (setIsOpen as (value: number | boolean | null) => void)(null);
    } else if (typeof isOpen === "boolean") {
      (setIsOpen as (value: number | boolean | null) => void)(!isOpen);
    }
  };

  return <StyledDiv className="popup" onClick={popupHandleClick}></StyledDiv>;
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
