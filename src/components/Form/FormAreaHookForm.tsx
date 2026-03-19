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
              <label htmlFor="dateIn" className="date_label"></label>
              <input
                className="check-in"
                type="date"
                id="dateIn"
                aria-label="Check-in date"
                {...register("date")}
              />
              <label htmlFor="guestsCount">
                <input
                  type="number"
                  id="guestsCount"
                  placeholder="Guests"
                  {...register("guests")}
                />
              </label>
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

  .date_label {
    display: none;
  }

  .form_content {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .form_text {
    padding-left: 5px;
    margin-bottom: 10px;
    color: #babfc8;
  }

  label {
    width: 100%;
  }

  input {
    min-width: 115px;
    min-height: 48px;
    width: 100%;
    padding: 13px;
    font-size: 16px;
    color: #babfc8;
    background-color: #0f172a;
    border: 1px solid #7a8798;
    border-radius: 10px;

    &::placeholder {
      color: #babfc8;
    }

    @media (max-width: 768px) {
      min-width: 0;
    }
  }

  .errorName {
    top: 60px;
    left: 160px;
  }

  .errorEmail {
    top: 120px;
    left: 160px;
  }

  .submit {
    width: 100%;
    color: #fff;
    background-color: #256a46;
    border: 2px solid #256a46;
    transition:
      background-color 0.3s,
      border-color 0.3s;
  }

  .submit:hover {
    cursor: pointer;
    border-color: #eea435;
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
      flex: 1;
      gap: 10px;

      .check-in {
        padding: 0 13px;
      }
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
