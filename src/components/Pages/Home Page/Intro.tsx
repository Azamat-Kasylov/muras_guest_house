/* eslint-disable jsx-a11y/img-redundant-alt */
import styled from "styled-components";
import FormAreaHookForm from "../../Form/FormAreaHookForm";

const Intro: React.FC = () => {
  return (
    <StyledIntro id="intro">
      <div className="intro-content">
        <p className="suptitle">GUEST HOUSE</p>
        <p className="title">MURAS</p>
        <p className="subtitle">Welcome to Alay valley</p>
      </div>
      <FormAreaHookForm />
    </StyledIntro>
  );
};

const StyledIntro = styled.section`
  margin: 0;
  padding: 60px 50px 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-image: url(./alay2.jpg);
  background-repeat: no-repeat;
  background-size: cover;

  .intro-content {
  }

  .suptitle,
  .title,
  .subtitle {
    color: #f8fafc;
  }

  .suptitle {
    font-size: 30px;
    letter-spacing: 21px;
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

  @media (max-width: 1024px) {
    .subtitle {
      font-size: 25px;
    }

    .title {
      font-size: 70px;
    }

    .suptitle {
      font-size: 18px;
      letter-spacing: 12px;
    }
  }

  @media (max-width: 768px) {
    padding: 60px 2rem 0;
  }
`;

export default Intro;
