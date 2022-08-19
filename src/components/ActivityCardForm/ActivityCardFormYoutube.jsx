import React from "react";
import { useForm } from "react-hook-form";
import "./ActivityCardFormMyWay";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import { AiOutlinePlus } from "react-icons/ai";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";

function ActivityCardFormYoutube() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const StyledButton = styled(Button)({
    borderRadius: "0px",
    margin: "12px",
    boxShadow: "none",
    textTransform: "none",
    fontSize: 20,
    fontWeight: 600,
    padding: "6px 12px",
    fontFamily: "Comic Neue",
    lineHeight: 1.5,
    backgroundColor: "white",
    border: "3px solid #e93f37",
    color: "black",
    boxShadow: "10px 10px 0px -2px #e93f37",
    backgroundColor: "#ffff",
    "&:hover": {
      backgroundColor: "#e93f37",
      borderColor: "black",
      boxShadow: "none",
    },
  });

  const StyledAddIcon = styled(AddIcon)`
    path {
      stroke: #e93f37;
      }
    
  `;

  const ButtonText = styled.span`
  font-size: 0.75em;
  `

  return (
    <div>
      
        <StyledButton
          onClick={handleClickOpen}
          
        >
          <ButtonText>YOUTUBE</ButtonText>
        </StyledButton>
      
      <Dialog fullWidth="true" open={open} onClose={handleClose}>
      <form onSubmit={handleSubmit(onSubmit)} className="form-activity">
      <h2>Youtube Mode</h2>
        <label className="label" htmlFor="activity">
          Activity
        </label>
        <input
          id="activity"
          type="text"
          placeholder="What's your today workout?"
          {...register("Activity", { required: true, maxLength: 40 })}
        />
        <label className="label" htmlFor="link">
            Link
        </label>
        <input
        id="link"
          type="url"
          placeholder="Paste Youtube URL here"
          {...register("video", {})}
        />

        <div className="time">
          <div className="time-in">
            <label className="label" htmlFor="hours">
              ⏱Hours:
            </label>
            <input
              id="hours"
              type="number"
              placeholder="Hours"
              {...register("Hours", { required: true, max: 23, min: 0 })}
            />
          </div>
          <div className="time-in">
            <label className="label" htmlFor="minutes">
              Minutes:
            </label>
            <input
              id="minutes"
              type="number"
              placeholder="Minutes"
              {...register("Minutes", { required: true, max: 59, min: 0 })}
            />
          </div>
        </div>
        <input type="submit" value="CREATE" />
      </form>
      </Dialog>
    </div>
  );
}

export default ActivityCardFormYoutube;
