/* eslint-disable jsx-a11y/img-redundant-alt */
import styled from "styled-components";
import { lazy, Suspense } from "react";
import Spinner from "../../Spinner";

const FormAreaHookForm = lazy(() => import("../../Form/FormAreaHookForm"));

const Intro: React.FC = () => {
  return (
    <StyledIntro id="intro">
      <picture>
        <source
          media="(min-width: 768px)"
          srcSet="./alay_valley.webp"
          type="image/webp"
        />
        <source
          media="(min-width: 768px)"
          srcSet="./alay_valley.jpg"
          type="image/jpg"
        />
        <source
          media="(max-width: 768px)"
          srcSet="./alay_valley_768.jpg"
          type="image/jpg"
        />
        <source
          media="(max-width: 768px)"
          srcSet="./alay_valley_768.webp"
          type="image/webp"
        />
        <img
          src="./alay_valley.jpg"
          alt="intro background-image"
          className="intro_img"
        />
      </picture>
      <div className="container">
        <div className="intro_flex">
          <img
            src="./muras.png"
            alt="Muras"
            className="intro_title"
            width={"330px"}
            height={"105px"}
          />
          <p className="intro_text">
            Wake up to snow-capped peaks, crystal-clear air, and warm Kyrgyz
            hospitality at our family-run mountain retreat.
          </p>
        </div>
      </div>
      <Suspense fallback={<Spinner />}>
        <FormAreaHookForm />
      </Suspense>
    </StyledIntro>
  );
};

const StyledIntro = styled.section`
  margin: 0;
  min-height: 100vh;

  .intro_img {
    width: 100%;
    min-height: 100vh;
    object-fit: cover;
    filter: brightness(70%);
    position: fixed;
    z-index: -999;
  }

  .container {
    min-height: calc(100vh - 90px);
    display: flex;
    flex-direction: column;
    justify-content: end;
  }

  .intro_flex {
    max-width: 550px;
    margin-bottom: 50px;
    animation: intro_flex 2s;
    will-change: transform, opacity;
  }

  @keyframes intro_flex {
    0% {
      opacity: 0;
      transform: translateY(-100px); /* Начинаем выше, чем нужно */
    }
    100% {
      opacity: 1;
      transform: translateY(0); /* Заканчиваем на исходной позиции */
    }
  }

  .intro_title {
    margin-bottom: 10px;
  }

  .intro_text {
    font-size: 20px;
    font-weight: 300;
    color: #ffffff;
    letter-spacing: 2px;
    font-style: italic;
    line-height: 1.5em;
    font-family: "Cormorant Garamond", serif;
    will-change: transform, opacity;
  }

  @media (max-width: 768px) {
    .container {
      min-height: calc(100vh - 250px);
    }

    .intro_flex {
      margin-bottom: 30px;
    }
  }
`;

export default Intro;
