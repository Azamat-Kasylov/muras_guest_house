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
        <p className="form_text">Plan your stay</p>
        <div className="form_content">
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
          <div className="row">
            <div className="row_flex">
              <input
                className="check-in"
                type="date"
                id="dateIn"
                {...register("date")}
              />
              <input
                type="number"
                id="guestsCount"
                placeholder="Guests"
                {...register("guests")}
              />
            </div>
            <label htmlFor="formSubmit">
              <input
                className="submit"
                type="submit"
                id="formSubmit"
                value="Book"
              />
            </label>
          </div>
        </div>
      </StyledForm>
      {isSubmitSuccessful && <PopupFormMessage onButtonClick={reset} />}
    </>
  );
};

const StyledForm = styled.form`
  max-width: 450px;
  border-radius: 10px;
  border: 1px solid #7a8798;
  background-color: #0f172a;
  padding: 15px;
  position: relative;

  .form_content {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .form_text {
    padding-left: 5px;
    margin-bottom: 10px;
    color: #6b7280;
  }

  label {
    width: 100%;
    min-width: 115px;
  }

  input {
    min-width: 115px;
    width: 100%;
    padding: 13px;
    color: #6b7280;
    background-color: #0f172a;
    border: 1px solid #7a8798;
    border-radius: 10px;
  }

  .errorName {
    top: 60px;
    left: 160px;
  }

  .errorEmail {
    top: 113px;
    left: 160px;
  }

  .submit {
    width: 100%;
    color: #fff;
    background-color: #256a46;
    border: 1px solid #256a46;
    transition: background-color 0.3s;
  }

  .submit:hover {
    cursor: pointer;
    background-color: #eea435;
  }

  @media (max-width: 430px) {
    .errorName,
    .errorEmail {
      left: 140px;
    }
  }

  .row {
    display: flex;
    gap: 10px;

    .row_flex {
      display: flex;
      gap: 10px;
    }

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  @media (max-height: 430px) {
    margin-bottom: 50px;
  }
`;

export default FormArea;
