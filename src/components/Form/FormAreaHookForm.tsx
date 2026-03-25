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
  const today = new Date().toISOString().split("T")[0];

  const {
    register,
    formState: { isSubmitSuccessful, errors },
    handleSubmit,
    reset,
  } = useForm<IForm>({
    defaultValues: {
      date: today,
    },
  });

  const nameError = errors["name"]?.message;
  const emailError = errors["email"]?.message;

  const onSubmit: SubmitHandler<IForm> = (data) => {
    console.log(data);
  };

  return (
    <StyledForm className="form_wrapper">
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <label className="name_label" htmlFor="userName">
          <input
            className="name"
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
        <label className="email_label" htmlFor="userEmail">
          <input
            className="email"
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
          <label htmlFor="dateIn" className="date_label"></label>
          <input
            className="check-in"
            type="date"
            id="dateIn"
            aria-label="Check-in date"
            {...register("date")}
          />
          <label htmlFor="guestsCount"></label>
          <input
            className="guests"
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
      </form>
      {isSubmitSuccessful && <PopupFormMessage onButtonClick={reset} />}
    </StyledForm>
  );
};

const StyledForm = styled.div`
  .form {
    width: 100%;
    height: 90px;
    background-color: #f8f6f2;
    padding: 0 6rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: center;
    gap: 15px;
  }

  .name_label,
  .email_label {
    position: relative;
  }

  .row label {
    display: none;
  }

  label {
    width: 100%;
  }

  input {
    font-size: 16px;
    min-height: 44px;
    width: 100%;
    color: #757575;
    background-color: #f8f6f2;
    border: none;
    border-bottom: 1px solid #bfbdb6;

    &:focus {
      outline: none;
      box-shadow: none;
      border-color: #a6623f;
    }
  }

  .errorName,
  .errorEmail {
    top: 50%;
    left: 50%;
    transform: translate(-50%);
  }

  .submit {
    width: 100%;
    color: #fff;
    background-color: #a6623f;
    border: none;
    transition:
      background-color 0.3s,
      border-color 0.3s;
  }

  .row {
    display: flex;
    gap: 15px;
  }

  @media (max-width: 1024px) {
    .form {
      padding: 0 1rem;
    }
  }

  @media (max-width: 768px) {
    .form {
      height: 250px;
      grid-template-columns: 1fr;
      padding: 0 1rem;
      padding-bottom: 12px;
    }

    .name {
      margin-top: 12px;
    }
  }
`;

export default FormArea;
