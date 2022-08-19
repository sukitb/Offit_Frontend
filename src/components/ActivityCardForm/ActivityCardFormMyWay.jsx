import React from "react";
import { useForm } from "react-hook-form";
import "./ActivityCardFormMyWay.css";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import { AiOutlinePlus } from "react-icons/ai";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Stretch from "../../assets/activities-icon/Bodystrench.svg";
import Indoorbike from "../../assets/activities-icon/Indoor-cycling.svg";
import Jogging from "../../assets/activities-icon/Jogging.svg";
import Meditate from "../../assets/activities-icon/Meditate.svg";
import Running from "../../assets/activities-icon/Running.svg";
import Skate from "../../assets/activities-icon/Skate.svg";
import Soccer from "../../assets/activities-icon/Soccer.svg";
import Travel from "../../assets/activities-icon/Travel.svg";
import Weight from "../../assets/activities-icon/Weight.svg";
import Yoga from "../../assets/activities-icon/Yoga.svg";

function ActivityCardFormMyway() {
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

  const formSubmit = () => {
    alert("Activity saved");
    handleClose();
  };

  const StyledButton = styled(Button)({
    borderRadius: "0px",
    margin: "12px",
    boxShadow: "none",
    textTransform: "none",
    fontSize: 20,
    fontWeight: 600,
    padding: "6px 12px",
    lineHeight: 1.5,
    backgroundColor: "white",
    border: "3px solid #3f52a0",
    color: "black",
    boxShadow: "10px 10px 0px -2px #3f52a0",
    backgroundColor: "#ffff",
    "&:hover": {
      backgroundColor: "#3f52a0",
      borderColor: "black",
      boxShadow: "none",
    },
  });

  const StyledAddIcon = styled(AddIcon)`
    path {
      stroke: #3f52a0;
    }
  `;
  const ButtonText = styled.span`
    font-size: 1em;
    font-family: "Comic Neue";
  `;

  const ActivityIcons = [
    Stretch,
    Indoorbike,
    Jogging,
    Meditate,
    Running,
    Skate,
    Soccer,
    Travel,
    Weight,
    Yoga,
  ];

  return (
    <div>
      <StyledButton
        onClick={handleClickOpen}
        startIcon={<StyledAddIcon fontSize="large" />}
      >
        <ButtonText>New Activity</ButtonText>
      </StyledButton>

      <Dialog fullWidth="true" open={open} onClose={handleClose}>
        <form onSubmit={handleSubmit(onSubmit)} className="form-activity">
          <h2>Old School Mode</h2>
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
            Link or Youtube
          </label>
          <input
            id="link"
            type="url"
            placeholder="Paste your ref. URL here"
            {...register("urlActivity", {})}
          />

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
            >
              Choose image
            </AccordionSummary>
            <AccordionDetails>
              <div className="img-radio">
                {ActivityIcons.map((icon) => (
                  <label>
                    <input {...register("img")} type="radio" value={icon} />
                    <img key={icon} src={icon} alt="" />
                  </label>
                ))}
              </div>
            </AccordionDetails>
          </Accordion>

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
          <input onClick={formSubmit} type="submit" value="CREATE" />
        </form>
      </Dialog>
    </div>
  );
}

export default ActivityCardFormMyway;
