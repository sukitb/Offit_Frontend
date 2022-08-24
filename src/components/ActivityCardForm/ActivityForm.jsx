import React, { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "@emotion/styled";
import { ActivityIcons } from "../Utils/ActivitiyIcons";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import axios from "axios";
import { instance } from "../../api";
import { ErrorMessage } from '@hookform/error-message';



function ActivityForm(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    criteriaMode: "all"
  });

  const onSubmit = async (data) => {
    console.log(data);
    data.duration = data.duration * 60;
    const today = new Date();
    const hourToSec = data.hours * 3600;
    const minutesToSec = data.minutes * 60;
    data.duration = hourToSec + minutesToSec;
    data.createActivityAt = today.toLocaleDateString('en-GB', {
      month: '2-digit',day: '2-digit',year: 'numeric'});
    
    await instance.post("me/activities", data);
    props.fetchActivities()
  };
  

  const formSubmit = () => {
    alert("Activity saved");
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
        <h2>New Activity</h2>
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
                value: 15,
                message: "⚠️ This input not exceed than 15 characters"}
              }
            )}
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
          <label className="label" htmlFor="hours">
            ⏱ Hours:
          </label>
          <input
            id="hours"
            type="number"
            placeholder="Hours"
            className="form"
            defaultValue={0}
            {...register("hours", { required: true, max: 23, min: 0 })}
          />

          <label className="label" htmlFor="minutes">
            Minutes:
          </label>
          <input
            id="minutes"
            type="number"
            className="form"
            placeholder="Minutes"
            {...register("minutes", {required: " ⚠️This input is required."} )}
          />
          <ErrorMessage
        errors={errors}
        name="minutes"
        render={({ messages }) => {
          console.log("messages", messages);
          return messages
            ? Object.entries(messages).map(([type, message]) => (
                <p key={type}>{message}</p>
              ))
            : null;
        }}
      />
        </FormInput>
        <FormInput>
          <label className="label" htmlFor="link">
            Youtube URL (Optional)
          </label>
          <input
            id="link"
            type="text"
            className="form"
            placeholder="Paste your ref. URL here"
            {...register("youtubeUrl", {})}
          />
        </FormInput>
        <SubmitInput>
          <input onClick={onSubmit} type="submit" value="CREATE" />
        </SubmitInput>
      </FormContainer>
    </form>
  );
}

export default ActivityForm;
