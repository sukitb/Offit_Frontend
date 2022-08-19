import React, { useEffect } from "react";
import "./ActivityCard.css";
import CreateForm from "../FormExercisePost/FormExercisePost";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { BsThreeDots } from "react-icons/bs";
import Grid from "@mui/material/Unstable_Grid2";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import Dialog from "@mui/material/Dialog";
import { useForm } from "react-hook-form";
import styled from "@emotion/styled";
import { useState } from "react";
import ActivityForm from "../ActivityCardForm/ActivityForm";

function ActivityCard(props) {

  function handleEdit() {
    alert("click");
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

  function handleClickOpenThenClose() {
    //open form
    setOpenEdit(true);
    //close menu
    handleClose();
  }

  //forclose form
  const handleClickClose = () => {
    setOpenEdit(false);
  };

  //change url to youtube video id
  function youtubeParser(url) {
    url = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    return url[2] !== undefined ? url[2].split(/[^0-9a-z_\-]/i)[0] : url[0];
  }

  //time template
  function secondsToHms(sec) {
    sec = Number(sec);
    const h = Math.floor(sec / 3600);
    const m = Math.floor((sec % 3600) / 60);

    const hDisplay = h > 0 ? h + (h == 1 ? " hr " : " hr ") : "";
    const mDisplay = m > 0 ? m + (m == 1 ? " min " : " min ") : "";

    return hDisplay + mDisplay;
  }

  return (
    <div className="activity-card">
      <Grid mdOffset="auto">
        <IconButton
          aria-label="more"
          id="long-button"
          aria-controls={open ? "long-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        >
          <BiDotsHorizontalRounded />
        </IconButton>

        <Menu
          id="long-menu"
          MenuListProps={{
            "aria-labelledby": "long-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              width: "8ch",
            },
          }}
        >
          <MenuItem onClick={handleClickOpenThenClose}>Edit</MenuItem>
          <MenuItem onClick={handleClose}>Delete</MenuItem>
        </Menu>
        <Dialog open={openEdit} onClose={handleClickClose}>
          <ActivityForm
            id={props.id}
            img={props.img}
            youtubeVideoId={props.youtubeVideoId}
            title={props.title}
            durationTime={secondsToHms(props.durationTime)}
          />
        </Dialog>
      </Grid>

      {props.url & props.img ? (
        <a href={props.url} target="_blank">
          <img src={props.img} />
        </a>
      ) : (
        <img src={props.img} />
      )}

      {props.youtubeUrl && (
        <iframe
          src={`https://www.youtube.com/embed/${youtubeParser(props.youtubeUrl)}`}
          title="YouTube video player"
          frameBorder="0"
          width="250"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}

      <div className="title">
        <h3>{props.title}</h3>
        <h3>{secondsToHms(props.durationTime)}</h3>
      </div>

      <CreateForm />
    </div>
  );
}

export default ActivityCard;
