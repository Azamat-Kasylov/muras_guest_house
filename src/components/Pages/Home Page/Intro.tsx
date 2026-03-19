/* eslint-disable jsx-a11y/img-redundant-alt */
import styled from "styled-components";
// import FormAreaHookForm from "../../Form/FormAreaHookForm";
import { lazy, Suspense } from "react";

const FormAreaHookForm = lazy(() => import("../../Form/FormAreaHookForm"));

const Intro: React.FC = () => {
  return (
    <StyledIntro id="intro">
      <picture>
        <source srcSet="./alay2.webp" type="image/webp" />
        <img
          src="./alay2.jpg"
          alt="intro background-image"
          className="intro_img"
        />
      </picture>
      <div className="container">
        <div className="intro_flex">
          <div className="intro_logo-wrapp">
            <picture>
              <source srcSet="./logo_muras.webp" type="image/webp" />
              <img
                src="./logo_muras.jpg"
                alt="Muras logo"
                className="intro_logo"
              />
            </picture>
            <p className="title">Muras Guest House</p>
          </div>
          <p className="suptitle">
            Mountain serenity in Kyrgyzstan's Alay Valley
          </p>
          <p className="intro_text">
            Wake up to snow-capped peaks, crystal-clear air, and warm Kyrgyz
            hospitality at our family-run mountain retreat.
          </p>
        </div>
        <Suspense>
          <FormAreaHookForm />
        </Suspense>
      </div>
    </StyledIntro>
  );
};

const StyledIntro = styled.section`
  margin: 0;
  min-height: 100vh;

  .intro_img {
    min-height: 100vh;
    object-fit: cover;
    filter: brightness(50%);
    position: fixed;
    z-index: -999;
  }

  .container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  .intro_flex {
    max-width: 700px;
    animation: intro_flex 1.5s;
    will-change: transform, opacity;

    .intro_logo-wrapp {
      display: flex;
      align-items: center;
      gap: 15px;
      margin-bottom: 20px;

      .intro_logo {
        width: 40px;
        border-radius: 50%;
      }
    }
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

  .suptitle,
  .title,
  .intro_text {
    font-weight: 300;
    color: #ffffff;
    letter-spacing: 2px;
  }

  .title {
    font-size: 24px;
  }

  .suptitle {
    font-size: 60px;
    line-height: 1.2em;
    margin-bottom: 18px;
  }

  .intro_text {
    margin: 0;
    line-height: 1.5em;
  }

  @media (max-width: 768px) {
    .title {
      font-size: 20px;
    }

    .suptitle {
      font-size: 30px;
    }

    .intro_text {
      font-size: 14px;
    }
  }

  @media (max-height: 600px) {
    padding-top: 100px;
    .intro_text {
      margin-bottom: 40px;
    }
  }
`;

export default Intro;
