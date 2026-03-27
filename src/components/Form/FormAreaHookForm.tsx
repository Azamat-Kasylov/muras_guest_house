import styled from "styled-components";
import PopupFormMessage from "./PopupFormMessage";
import ErrorMessage from "./ErrorMessage";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

interface IForm {
  name: string;
  email: string;
  guests?: number;
  date: string;
}

const FormArea: React.FC = () => {
  const today = new Date().toISOString().split("T")[0];
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef<HTMLFormElement>(null);

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

  const onSubmit: SubmitHandler<IForm> = async (data) => {
    setIsLoading(true);
    try {
      const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
      const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("Email service is not configured properly");
      }
      // Отправка email через EmailJS
      const templateParams = {
        to_email: "follower.az@gmail.com", // куда отправлять
        from_name: data.name,
        from_email: data.email,
        guests: data.guests || 1,
        date: data.date,
        reply_to: data.email,
      };

      await emailjs.send(
        serviceId, // ID сервиса EmailJS
        templateId, // ID шаблона
        templateParams,
        publicKey, // Публичный ключ
      );

      // Если успешно - форма очистится, покажется PopupFormMessage
    } catch (error) {
      console.error("Ошибка отправки:", error);
      alert("Не удалось отправить заявку. Попробуйте позже.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <StyledForm className="form_wrapper">
      <form onSubmit={handleSubmit(onSubmit)} className="form" ref={form}>
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
                message: "Invalid email address",
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
            value={isLoading ? "Sending..." : "Book"}
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
