import React from "react";
import "./ActivityCard.css";
import CreateForm from "../FormExercisePost/FormExercisePost"
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { BsThreeDots } from "react-icons/bs";
import Grid from '@mui/material/Unstable_Grid2';
import { BiDotsHorizontalRounded } from "react-icons/bi";
import Dialog from "@mui/material/Dialog";
import { useForm } from "react-hook-form";
import styled from "@emotion/styled";
import { useState } from "react";

function ActivityCard(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  function handleEdit() {
    alert('click')
  }

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [openEdit, setOpenEdit] = useState(false);

  const handleClickOpen = () => {
    setOpenEdit(true);
  };

  const handleClickClose = () => {
    setOpenEdit(false);
  };

  const options = [
    <div onClick={handleClickOpen}>Edit</div>,
    <div>Delete</div>
    
  ];
  

  return (
    <div className="activity-card">
      <Grid mdOffset="auto">
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <BiDotsHorizontalRounded  />
        
      </IconButton>
        
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            width: '20ch',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
      </Menu>
      <Dialog open={openEdit} onClose={handleClickClose}>
      <form onSubmit={handleSubmit(onSubmit)} className="form-activity">
          <label className="label" htmlFor="activity">
            Activity
          </label>
          <input
            id="activity"
            type="text"
            placeholder="What's your today workout?"
            {...register("Activity", { required: true, maxLength: 40 })}
          />

          <label className="label" htmlFor="style">
            Choose your styles
          </label>

          <input
            type="url"
            placeholder="Past your ref. URL here"
            {...register("Past your ref. URL here", {})}
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
                ⏱Minutes:
              </label>
              <input
                id="minutes"
                type="number"
                placeholder="Minutes"
                {...register("Minutes", { required: true, max: 59, min: 0 })}
              />
            </div>
          </div>
          <div>
            <input className="create-button" type="submit" value="CREATE" />
            <input className="delete-button" type="submit" value="DELETE" />
          </div>
        </form>
      </Dialog>
      </Grid>
      
      {props.img && <img src={props.img} />}
      {props.video && (
        <iframe
          src={`https://www.youtube.com/embed/${props.video}`}
          title="YouTube video player"
          frameBorder="0"
          width="250"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}

      <div className="title">
        <h3 >{props.title}</h3>
        <h3 >{props.durationTime}</h3>
      </div>

      <CreateForm />

</div>
  );
}

export default ActivityCard;