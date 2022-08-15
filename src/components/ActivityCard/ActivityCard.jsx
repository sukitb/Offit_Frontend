import React from "react";
import "./ActivityCard.css";
import CreateForm from "../FormExercisePost/FormExercisePost"
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { BsThreeDots } from "react-icons/bs";
import Grid from '@mui/material/Unstable_Grid2';
import { BiDotsHorizontalRounded } from "react-icons/bi";

import styled from "@emotion/styled";

function ActivityCard(props) {

  const options = [
    `Edit`,
    'Delete'
  ];

  // todo
  // เขียนเช็กว่าเป็น option ไหน

  function openEdit() {
    alert('click')
  }

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  

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
            <div onClick={openEdit}>{option}</div>
          </MenuItem>
        ))}
      </Menu>
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

      <div className="">
        <p className="float-left">{props.activity}</p>
        <p className="float-right">{props.durationTime}</p>
      </div>

      <CreateForm />

</div>
  );
}

export default ActivityCard;
