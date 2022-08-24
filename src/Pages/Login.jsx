import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react"
import { instance } from '../api'
import { useNavigate } from 'react-router-dom'
import styled from "styled-components";
import { ErrorMessage } from '@hookform/error-message';
import { NavigateButton } from "../components/Utils/Button";

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({criteriaMode: "all"});

  const [profileInfo, setProfileInfo] = useState([])

  const navigate = useNavigate()


  const onSubmit = async (data) => {
    await instance.post("/login", data);
    navigate('/')
  }

  const handleNavigate = () => {
    navigate('/register')
  }

  const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    justify-content: center;
    align-items: flex-start;
    padding: 50px 0px;
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
    justify-content: flex-start;
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

  const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
  `
return (
  <div>
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
    <input onClick={onSubmit} type="submit" value="LOGIN" />
  </SubmitInput>
  
</FormContainer>
</form>
<ButtonContainer>
<NavigateButton onClick={handleNavigate} text={"CREATE NEW ACCOUNT"}/>
</ButtonContainer>
</div>
);
}



//   return (
//     <div>
//       <h1>Login ที่นี่นะจ้ะ</h1>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <input
//           type="text"
//           placeholder="Username"
//           {...register("username", { required: true })}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           {...register("password", { required: true })}
//         />

//         <input  type="submit" />
//       </form>
//     </div>
//   );
// }
