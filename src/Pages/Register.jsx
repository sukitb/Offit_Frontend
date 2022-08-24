import React, { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "@emotion/styled";
import axios from "axios";
import { useNavigate } from 'react-router-dom'
import { ErrorMessage } from '@hookform/error-message';
import { instance } from "../api";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { avatar } from '../components/Utils/avatar'


function Register() {

  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm({
    criteriaMode: "all"
  });

  const navigate = useNavigate()
  
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const onSubmit = async (data) => {
    await instance.post("/register", data);
    alert("Registed");
    navigate('/login')
  };
  console.log(errors);


  const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    justify-content: center;
    align-items: flex-start;
    padding: 20px 20px;

    div label img {
        width: 200px;
    }
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

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-activity">
      <FormContainer>
        <h2>Create New Account</h2>
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
          <label className="label" htmlFor="email">
            ✉️ Email :
          </label>
          <input
            id="email"
            type="text"
            className="form"
            placeholder="What's your email? // ****@***.com"
            {...register("email", {
              required: "⚠️ Email field is required.",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "⚠️ Email pattern is ****@***.com"
              }
            }  /*{required: true, maxLength: 10}*/)}
          />
        </FormInput>
        
      
        <ErrorMessage
          errors={errors}
          name="email"
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
          <label className="label" htmlFor="firstname">
             First name :
          </label>
          <input
            id="firstname"
            type="text"
            className="form"
            placeholder="What's your firstname?"
            {...register("name", {
              required: " ⚠️ Firstname field is required.",
              maxLength: {
                value: 15,
                message: "⚠️ Firstname not exceed than 15 characters"
              }
            }  /*{required: true, maxLength: 15}*/)}
          />
        </FormInput>

        <ErrorMessage
          errors={errors}
          name="firstname"
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
          <label className="label" htmlFor="lastname">
             Last name :
          </label>
          <input
            id="lastname"
            type="text"
            className="form"
            placeholder="What's your lastname?"
            {...register("lastname", {
              required: " ⚠️ Lastname field is required.",
              maxLength: {
                value: 15,
                message: "⚠️ Lastname not exceed than 15 characters"
              }
            }  /*{required: true, maxLength: 15}*/)}
          />
        </FormInput>

        <ErrorMessage
          errors={errors}
          name="lastname"
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

        <div className="imgchoose">
          <Accordion>
            <AccordionSummary className="form" aria-controls="panel1a-content">
              <label>Choose image ▽</label>
            </AccordionSummary>
            <AccordionDetails>
              <div className="img-radio">
                {avatar.map((icon, index) => (
                  <label>
                    <input
                      {...register("avatar")}
                      type="radio"
                      value={index}
                    />
                    <img  key={icon} src={icon} alt="" />
                  </label>
                ))}
              </div>
            </AccordionDetails>
          </Accordion>
        </div> 

        {/* <FormInput>
          <label className="label" htmlFor="re-password">
          🔑 Comfirm Password :
          </label>
          <input
            id="re-password"
            type="Password"
            className="form"
            placeholder="Comfirm your password"
            {...register("re-password", {
              required: " ⚠️ Comfirm your password field is required.",
              minLength: {
                value: 8,
                message: "⚠️ re-password must exceed than 8 characters"
              }
            }  {required: true, minLength: 8, maxLength: 15}
          />
        </FormInput> */}

        <ErrorMessage
          errors={errors}
          name="re-password"
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
          <input onClick={onSubmit} type="submit" value="CREATE" />
        </SubmitInput>
      </FormContainer>
    </form>
  );
}

export default Register;