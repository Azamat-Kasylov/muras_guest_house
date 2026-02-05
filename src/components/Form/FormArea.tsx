import styled from "styled-components";
import { useState } from "react";
import PopupFormMessage from "./PopupFormMessage";
import ErrorMessage from "./ErrorMessage";

interface Error {
  name?: string;
  email?: string;
}

type InitFormDataType = {
  name: string;
  email: string;
  guests?: number;
  date: string;
  errors: Error;
};

const initFormData: InitFormDataType = {
  name: "",
  email: "",
  date: "",
  errors: {},
};

const FormArea: React.FC = () => {
  const [formData, setFormData] = useState(initFormData);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const validateForm = () => {
    const errors: Error = {};

    if (!formData.name) {
      errors.name = "Name is required";
    }

    if (!formData.email) {
      errors.email = "Email is required";
    }

    setFormData((jopa) => ({ ...jopa, errors }));

    return Object.keys(errors).length === 0;
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validateForm()) {
      setIsPopupVisible(true);
      setFormData(initFormData);
    } else {
    }
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <label className="name">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
          {formData.errors.name && (
            <ErrorMessage className="errorName">
              {formData.errors.name}
            </ErrorMessage>
          )}
        </label>
        <label className="email">
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          {formData.errors.email && (
            <ErrorMessage className="errorEmail">
              {formData.errors.email}
            </ErrorMessage>
          )}
        </label>
        <Row>
          <label>
            <input
              type="date"
              id="dateIn"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
          </label>
          <label className="guests">
            <input
              type="number"
              id="number"
              name="guests"
              placeholder="Guests"
              value={formData.guests}
              onChange={handleChange}
            />
          </label>
        </Row>
        <label className="submit">
          <input
            className="submit"
            type="submit"
            id="submit"
            name="submit"
            value="Book"
          />
        </label>
      </StyledForm>
      {isPopupVisible && <PopupFormMessage onButtonClick={setIsPopupVisible} />}
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
    @media (max-width: 1024px) {
      top: 40px;
      left: 20px;
    }
  }

  .errorEmail {
    top: 39px;
    left: 200px;
    @media (max-width: 1024px) {
      top: 100px;
      left: 20px;
    }
  }

  .hidden {
    display: none;
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

  .loading {
    padding: 0 5px;
  }

  @media (max-width: 1024px) {
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

  @media (max-width: 768px) {
    width: 100%;
  }
`;
const Row = styled.div`
  display: flex;
`;
export default FormArea;
