import styled from "styled-components";
import PopupFormMessage from "./PopupFormMessage";
import ErrorMessage from "./ErrorMessage";
import { useForm, SubmitHandler } from "react-hook-form";

interface IForm {
  name: string;
  email: string;
  guests?: number;
  date: string;
}

const FormArea: React.FC = () => {
  const {
    register,
    formState: { isSubmitSuccessful, errors },
    handleSubmit,
    reset,
  } = useForm<IForm>();

  const nameError = errors["name"]?.message;
  const emailError = errors["email"]?.message;

  const onSubmit: SubmitHandler<IForm> = (data) => {
    console.log(data);
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <label className="name" htmlFor="userName">
          <input
            type="text"
            id="userName"
            placeholder="Name"
            {...register("name", {
              required: "This field is required",
            })}
          />
          {nameError && (
            <ErrorMessage className="errorName">{nameError}</ErrorMessage>
          )}
        </label>
        <label className="email" htmlFor="userEmail">
          <input
            type="text"
            id="userEmail"
            placeholder="Email"
            {...register("email", {
              required: "This field is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email adress",
              },
            })}
          />
          {emailError && (
            <ErrorMessage className="errorEmail">{emailError}</ErrorMessage>
          )}
        </label>
        <Row>
          <label htmlFor="dateIn">
            <input type="date" id="dateIn" {...register("date")} />
          </label>
          <label className="guests" htmlFor="guestsCount">
            <input
              type="number"
              id="guestsCount"
              placeholder="Guests"
              {...register("guests")}
            />
          </label>
        </Row>
        <label className="submit" htmlFor="formSubmit">
          <input
            className="submit"
            type="submit"
            id="formSubmit"
            value="Book"
          />
        </label>
      </StyledForm>
      {isSubmitSuccessful && <PopupFormMessage onButtonClick={reset} />}
    </>
  );
};

const StyledForm = styled.form`
  max-width: 100%;
  position: relative;
  top: 140px;
  display: flex;
  border-radius: 30px;
  overflow: hidden;

  label {
    display: inline-flex;
    align-items: center;
    height: 60px;
    background-color: #f8fafc;
    border-left: 1px solid #d2d2d2;
    overflow: hidden;
  }

  input {
    display: flex;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
    border: none;
    background-color: #f8fafc;
    border: 0;
    width: 100%;
    height: 100%;
    outline: none;
    border-radius: 0;
  }

  .errorName {
    top: 39px;
    left: 20px;
    @media (max-width: 992px) {
      top: 40px;
      left: 20px;
    }
  }

  .errorEmail {
    top: 39px;
    left: 200px;
    @media (max-width: 992px) {
      top: 100px;
      left: 20px;
    }
  }

  .name input {
    border: none;
  }

  .submit {
    padding: 0 40px;
    font-size: 16px;
    font-weight: normal;
    background-color: #bddde4;
    color: #000;
    border: none;
    transition: background-color 0.3s;
    justify-content: center;
  }

  .submit:hover {
    cursor: pointer;
    background-color: #ffbc4c;
  }

  @media (max-width: 992px) {
    display: flex;
    flex-direction: column;
    width: 70%;
    min-width: 70%;
    border-radius: 1rem;
    label {
      border-radius: 0;
      width: 100%;
      border-bottom: 1px solid #d2d2d2;
    }
    input {
      border-radius: 0;
    }
    label.guests {
      border-left: 1px solid #d2d2d2;
    }
  }

  @media (max-width: 700px) {
    width: 100%;
  }
`;
const Row = styled.div`
  display: flex;
`;
export default FormArea;
