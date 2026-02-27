import styled from "styled-components";
import { CertificateInterface } from "../../data";
import { useState } from "react";

interface CertificateProps {
  certificates: CertificateInterface[];
}

const Certificates: React.FC<CertificateProps> = ({ certificates }) => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  const popupHadleClick = () => {
    setActiveIndex(null);
  };

  return (
    <StyledDiv>
      {certificates.map((item, index) => (
        <img
          key={index}
          src={item.url}
          alt={item.alt}
          className={item.className}
          onClick={() => handleClick(index)}
        />
      ))}
      {certificates.map((item, index) => (
        <img
          key={index}
          src={item.url}
          alt={item.alt}
          className={`${index === activeIndex ? "active" : "hidden"}`}
          onClick={() => handleClick(index)}
        />
      ))}
      {activeIndex === null ? null : (
        <div className="popup" onClick={popupHadleClick}></div>
      )}
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  max-width: 350px;
  margin-top: 100px;
  display: flex;
  flex-wrap: wrap;
  align-self: center;
  gap: 20px;
  z-index: 10;

  @media (max-width: 430px) {
    margin-bottom: 50px;
  }

  img {
    border: solid 4px #fff;
    object-fit: cover;
    filter: grayscale(100%) sepia(10%) contrast(80%);

    &:hover {
      cursor: pointer;
    }
  }

  .small {
    max-width: calc(50% - 10px);
  }

  .big {
    max-width: 100%;
  }

  .hidden {
    visibility: hidden;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
    max-width: 600px;
    background-color: #fff;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    filter: none;

    @media (max-width: 768px) {
      max-width: calc(100% - 2rem);
      max-height: 70vh;
    }
    @media (max-height: 450px) {
      max-width: calc(100% - 2rem);
      max-height: 70vh;
    }
  }

  .active {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
    max-width: 600px;
    background-color: #fff;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    filter: none;
    visibility: visible;

    @media (max-width: 768px) {
      max-width: calc(100% - 2rem);
      max-height: 70vh;
    }
    @media (max-height: 450px) {
      max-width: calc(100% - 2rem);
      max-height: 70vh;
    }
  }

  .popup {
    position: absolute;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 99;
  }
`;

export default Certificates;
