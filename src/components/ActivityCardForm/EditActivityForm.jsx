import React from "react";
import { useForm } from "react-hook-form";
import styled from "@emotion/styled";
import { ActivityIcons } from "../Utils/ActivitiyIcons";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import axios from "axios";
import { instance } from "../../api";

function EditActivityForm(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const hourToSec = data.hours * 3600;
    const minutesToSec = data.minutes * 60;
    data.duration = hourToSec + minutesToSec;
    const today = new Date();
    data.createActivityAt = today.toLocaleDateString();
    await instance.put(`me/activities/${props.id}/edit`, data);
    props.fetchActivities()
  };

  const formSubmit = () => {
    alert("Activity saved");
    // handleClose();
  };

  const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;

    .submit {
      width: 100%;
      display: flex;
      justify-content: center;

      input {
        padding: 10px;
        font-size: 20px;
        color: white;
        width: 50%;
        font-family: inherit;
        font-weight: 600;
        background-color: #3f52a0;
      }
    }

    .form {
      border-left: 50px solid #3f52a0;
      font-size: 20px;
      padding-left: 10px;
      background-color: #ffff;
      height: 2em;
      width: 80%;
      margin-bottom: 20px;
      font-family: inherit;
    }

    .time {
      width: 80%;
      margin: 20px 0px;
    }

    .url,
    .title,
    .imgchoose {
      flex-direction: column;
      width: 80%;
      margin: 20px 0px;
    }

    label {
      font-size: 24px;
      font-weight: 600;
      line-height: 1.5;
    }

    .img-radio label img {
      max-width: 180px;
      padding: 10px;
    }

    @media screen and (max-width: 768px) {
      .form {
        font-size: 16px;
      }

      .time {
        display: block;
      }
      .img-radio {
        display: block;
      }
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

    .img-radio div {
      width: 100%;
      margin: 5px;
      padding: 3px;
      border-radius: 5px;
      display: flex;
    }
  `;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-activity">
      <FormContainer>
        <h2>Edit Activity</h2>
        <id>{props.id}</id>
        <div className="title">
          <label className="label" htmlFor="activity">
            Activity
          </label>
          <input
            id="activity"
            type="text"
            className="form"
            placeholder="What's your today workout?"
            
            {...register("title", { required: true, maxLength: 40 })}
          />
        </div>
        <div className="imgchoose">
          <Accordion>
            <AccordionSummary className="form" aria-controls="panel1a-content">
              <label>Choose image ▽</label>
            </AccordionSummary>
            <AccordionDetails>
              <div className="img-radio">
                {ActivityIcons.map((icon, index) => (
                  <label>
                    <input
                      {...register("image")}
                      type="radio"
                      value={index}
                    />
                    <img key={icon} src={icon} alt="" />
                  </label>
                ))}
              </div>
            </AccordionDetails>
          </Accordion>
        </div>

        <div className="url">
          <label className="label" htmlFor="link">
            Youtube Url (optional)
          </label>
          <input
            id="link"
            type="url"
            className="form"
            placeholder="Paste your ref. URL here"
            defaultValue={""}
            {...register("yotubeUrl", {})}
          />
        </div>
        <div className="time">
          <div className="time-in">
            <label className="label" htmlFor="hours">
              ⏱Hours:
            </label>
            <input
              id="hours"
              type="number"
              placeholder="Hours"
              className="form"
              defaultValue={0}
              {...register("hours", { required: true, max: 23, min: 0 })}
            />
          </div>
          <div className="time-in">
            <label className="label" htmlFor="minutes">
              Minutes:
            </label>
            <input
              id="minutes"
              type="number"
              className="form"
              placeholder="Minutes"
              {...register("minutes", { required: true, max: 59, min: 0 })}
            />
          </div>
        </div>
        <div className="submit">
          <input onClick={formSubmit} type="submit" value="CREATE" />
        </div>
      </FormContainer>
    </form>
  );
}

export default EditActivityForm;
