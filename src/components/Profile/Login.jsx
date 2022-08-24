import React, { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "@emotion/styled";
import axios from "axios";
import { ErrorMessage } from '@hookform/error-message';

function Login() {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();

 

  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm({
    criteriaMode: "all"
  });
  

  const onSubmit = async (data) => {
    console.log(data);
    data.duration = data.duration * 60;
    const today = new Date();
    data.createActivityAt = today.toLocaleDateString();
    await axios.post("http://localhost:8080/activities", data);
  };
  console.log(errors);

  const formSubmit = () => {
    alert("Activity saved");
    handleClose();
  };

  const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    justify-content: center;
    align-items: flex-start;
    padding: 20px 20px;
  `;

  const FormInput = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 20px 0px;
    width: 100%;
    font-family: inherit;
    font-size: 20px;
    font-weight: 600;

    label {
      padding: 10px 0px;
    }

    input {
      font-family: inherit;
      width: 100%;
      height: 2.5em;
      border-left: 30px solid #3f52a0;
      border-top: 3px solid #3f52a0;
      border-bottom: 3px solid #3f52a0;
      font-size: 18px;
    }

    input::placeholder {
      font-size: 18px;
      font-family: "Comic Neue";
    }

    img {
      max-width: 180px;
      padding: 10px;
    }

    [type="radio"] {
      position: absolute;
      opacity: 0;
      width: 0;
      height: 0;
    }

    [type="radio"] + img {
      cursor: pointer;
    }

    [type="radio"]:checked + img {
      outline: 2px solid #60ba71;
    }
  `;

  const SubmitInput = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    input {
      font-size: 22px;
      font-weight: 600;
      padding: 10px;
      width: 50%;
      border: 2px solid #3f52a0;
      background-color: #3f52a0;
      color: white;
      font-family: inherit;
    }
  `;

  <input type="text" placeholder="" {...register("Username", {required: true, maxLength: 10})} />

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-activity">
      <FormContainer>
        <h2>Login!!!!!!!</h2>
        <FormInput>
          <label className="label" htmlFor="username">
            🧑 Username :
          </label>
          <input
            id="username"
            type="text"
            className="form"
            placeholder="What's your username?"
            {...register("username", {
              required: " ⚠️ Username field is required.",
              maxLength: {
                value: 15,
                message: "⚠️ Username not exceed than 15 characters"
              }
            }  /*{required: true, maxLength: 10}*/)}
          />
        </FormInput>
        
      
        <ErrorMessage
          errors={errors}
          name="username"
          render={({ messages }) => {
            console.log("messages", messages);
            return messages
              ? Object.entries(messages).map(([type, message]) => (
                  <p key={type}>{message}</p>
                ))
              : null;
          }}
        />

        <FormInput>
          <label className="label" htmlFor="password">
          🔑 Password :
          </label>
          <input
            id="password"
            type="Password"
            className="form"
            placeholder="What's your Password ?"
            {...register("password", {
              required: " ⚠️ Password field is required.",
              minLength: {
                value: 8,
                message: "⚠️ Password must exceed than 8 characters"
              }
            }  /*{required: true, minLength: 8, maxLength: 15}*/)}
          />
        </FormInput>

        <ErrorMessage
          errors={errors}
          name="password"
          render={({ messages }) => {
            console.log("messages", messages);
            return messages
              ? Object.entries(messages).map(([type, message]) => (
                  <p key={type}>{message}</p>
                ))
              : null;
          }}
        />  

        <SubmitInput>
          <input onClick={formSubmit} type="submit" value="CREATE" />
        </SubmitInput>
      </FormContainer>
    </form>
  );
}

export default Login;


 

