import React, { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "@emotion/styled";
import { ActivityIcons } from "../Utils/ActivitiyIcons";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { SiYoutube } from "react-icons/si";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { ErrorMessage } from '@hookform/error-message';

function ActivityForm() {
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

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-activity">
      <FormContainer>
        <h2>New Activity55555555</h2>
        <FormInput>
          <label className="label" htmlFor="activity">
            👟 Activity
          </label>
          <input
            id="activity"
            type="text"
            className="form"
            placeholder="What's your today workout?"
            {...register("title", {
              required: " ⚠️This input is required.",
              maxLength: {
                value: 40,
                message: "⚠️ This input not exceed than 40 characters"
              }
            }  /*{ required: true, maxLength: 40 }*/)}
          />
        </FormInput>
        
      
        <ErrorMessage
          errors={errors}
          name="title"
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
          <Accordion>
            <AccordionSummary className="form" aria-controls="panel1a-content">
              <label>Choose image ▽</label>
            </AccordionSummary>
            <AccordionDetails>
              <div className="img-radio">
                {ActivityIcons.map((icon, index) => (
                  <label>
                    <input {...register("image",{required: " ⚠️This input is required."} )} type="radio" value={index} />
                    <img key={icon} src={icon} alt="" />
                  </label>
                ))}
              </div>
            </AccordionDetails>
          </Accordion>
        </FormInput>

        <ErrorMessage
        errors={errors}
        name="image"
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
          {/* <label className="label" htmlFor="hours">
            ⏱ Hours:
          </label>
          <input
            id="hours"
            type="number"
            placeholder="Hours"
            className="form"
            defaultValue={0}
            {...register("Hours", { required: true, max: 23, min: 0 })}
          /> */}

          <label className="label" htmlFor="minutes">
            Minutes:
          </label>
          <input
            id="minutes"
            type="number"
            className="form"
            placeholder="Minutes"
            {...register("duration",{
              required: "⚠️ This input is required.",
              pattern: {
                value: /\d+/,
                message: "⚠️ This input is number only."
            },
              max: {
                value: 500,
                message: "⚠️ Minutes not over than 600"
            }} /*{ required: true, max: 59, min: 0 }*/)}
          />
        </FormInput>


        <ErrorMessage
        errors={errors}
        name="duration"
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
          <label className="label" htmlFor="link">
            Youtube URL (Optional)
          </label>
          <input
            id="link"
            type="url"
            className="form"
            placeholder="Paste your ref. URL here"
            defaultValue={""}
            {...register("youtubeURL", {})}
          />
        </FormInput>
        <SubmitInput>
          <input onClick={formSubmit} type="submit" value="CREATE" />
        </SubmitInput>
      </FormContainer>
    </form>
  );
}

export default ActivityForm;
