import React from "react";
import styled from "styled-components";
import { useState } from "react";
import PopupFormMessage from "./PopupFormMessage";

const initFormData = {
  name: "",
  email: "",
  guests: "",
  date: "",
  errors: {},
};
const FormArea = () => {
  const [formData, setFormData] = useState(initFormData);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const validateForm = () => {
    const errors = {};

    if (!formData.name) {
      errors.name = "Name is required";
    }

    if (!formData.email) {
      errors.email = "Email is required";
    }

    setFormData((jopa) => ({ ...jopa, errors }));

    return Object.keys(errors).length === 0;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      setIsPopupVisible(true);
      setFormData(initFormData);
    } else {
    }
  };

  const cleanInput = (inputId) => {
    let errorName = document.getElementById("errorName");
    let errorEmail = document.getElementById("errorEmail");
    if (errorName && inputId === "name") {
      errorName.classList.add("hidden");
    }
    if (errorEmail && inputId === "email") {
      errorEmail.classList.add("hidden");
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
            onClick={() => cleanInput("name")}
          />
          {formData.errors.name && (
            <p id="errorName" style={{ color: "red" }}>
              {formData.errors.name}
            </p>
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
            onClick={() => cleanInput("email")}
          />
          {formData.errors.email && (
            <p id="errorEmail" style={{ color: "red" }}>
              {formData.errors.email}
            </p>
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
        <label>
          <input
            className="submit"
            type="submit"
            id="submit"
            name="submit"
            value="Book"
            disabled={formData.loading}
          />
          {/* {formData.loading && (
          <div className="loading" style={{ marginTop: 5, fontWeight: "bold" }}>
            Loading...
          </div>
        )} */}
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
    background-color: #fff7e5;
    border-left: 1px solid #d2d2d2;
    overflow: hidden;
  }

  input {
    display: flex;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
    border: none;
    background-color: #fff7e5;
    border: 0;
    width: 100%;
    height: 100%;
    outline: none;
    border-radius: 0;
  }

  p {
    width: 100%;
    font-size: 13px;
    position: absolute;
  }

  #errorName {
    top: 39px;
    left: 20px;
    @media (max-width: 992px) {
      top: 40px;
      left: 20px;
    }
  }

  #errorEmail {
    top: 39px;
    left: 200px;
    @media (max-width: 992px) {
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
    background-color: #f6e7a7;
    color: #000;
    border: none;
    transition: background-color 0.3s;
    justify-content: center;
  }

  .submit:hover {
    cursor: pointer;
    background-color: #ffe46d;
  }

  .loading {
    padding: 0 5px;
  }

  @media (max-width: 992px) {
    display: flex;
    flex-direction: column;
    width: 50%;
    min-width: 50%;
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
