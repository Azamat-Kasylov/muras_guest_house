/* eslint-disable jsx-a11y/img-redundant-alt */
import styled from "styled-components";
import FormArea from "./FormArea";

const Intro = () => {
  return (
    <StyledIntro id="intro">
      <img src="./alay2.jpg" alt="intro image" />
      <p className="suptitle">GUEST HOUSE</p>
      <p className="title">MURAS</p>
      <p className="subtitle">Welcome to Alay valley</p>
      <FormArea />
    </StyledIntro>
  );
};

const StyledIntro = styled.section`
  margin: 0;
  padding: 0 50px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 500px) {
    padding: 0 3rem;
  }

  img {
    object-fit: cover;
    position: fixed;
    z-index: -1;
    height: 100vh;
    filter: brightness(80%);
  }

  p {
    color: #f8fafc;
  }

  .suptitle {
    font-size: 30px;
    letter-spacing: 20px;
  }

  .title {
    font-size: 120px;
    line-height: 0.8em;
  }

  .subtitle {
    margin: 0;
    font-size: 43px;
    text-align: center;
  }

  @media (max-width: 992px) {
    .subtitle {
      font-size: 25px;
    }

    .title {
      font-size: 70px;
    }

    .suptitle {
      font-size: 18px;
      letter-spacing: 11px;
    }
  }
`;

export default Intro;
