import styled from "styled-components";
import { certificateData, bigCertificateData } from "../../data";
import { useState } from "react";
import PopupBackground from "../PopupBackground";

const Certificates: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <StyledDiv>
      {certificateData.map((item, index) => (
        <img
          key={index}
          src={item.url}
          alt={item.alt}
          className={item.className}
          onClick={() => handleClick(index)}
          loading="lazy"
          width={"64px"}
          height={"64px"}
        />
      ))}
      {bigCertificateData.map((item, index) => (
        <img
          key={index}
          src={item.url}
          alt={item.alt}
          className={`popupHiddenImage ${index === activeIndex ? "active" : ""}`}
          onClick={() => handleClick(index)}
          loading="lazy"
        />
      ))}
      {activeIndex !== null && (
        <PopupBackground isOpen={activeIndex} setIsOpen={setActiveIndex} />
      )}
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  display: flex;
  align-self: center;
  gap: 20px;
  z-index: 10;

  img {
    object-fit: cover;
    filter: grayscale(120%) sepia(20%) contrast(70%);

    &:hover {
      cursor: pointer;
    }
  }

  .popupHiddenImage {
    visibility: hidden;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
    max-width: 80vw;
    max-height: 70vh;
    background-color: #fff;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    filter: none;

    @media (max-height: 450px) {
      max-width: calc(100% - 2rem);
      max-height: 60vh;
    }
  }

  .active {
    visibility: visible;
  }

  @media (max-width: 768px) {
    align-self: flex-start;
  }
`;

export default Certificates;
