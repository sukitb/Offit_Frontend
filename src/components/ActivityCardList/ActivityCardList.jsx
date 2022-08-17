import React from "react";
import ActivityCard from "../ActivityCard/ActivityCard";
import "./ActivityCardList.css";
import CreateForm from "../FormExercisePost/FormExercisePost";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import { AiOutlinePlus } from "react-icons/ai";
import AddIcon from "@mui/icons-material/Add";

function ActivityCardList() {
  //todo useState

  const activityInfo = [
    {
      id: 1,
      img: "",
      video: "https://www.youtube.com/watch?v=ml6cT4AZdqI",
      activity: "yoca",
      durationTime: "3hr 5s",
    },
    {
      id: 2,
      img: "../src/assets/yoca.jpg",
      video: "",
      activity: "yoca2",
      durationTime: "1hr 5s",
    },
    {
      id: 3,
      img: "",
      video: "https://www.youtube.com/embed/yMNLa17g9uc",
      activity: "yoca3",
      durationTime: "2hr 5s",
    },
    {
      id: 4,
      img: "",
      video: "https://www.youtube.com/embed/yMNLa17g9uc",
      activity: "yoca3",
      durationTime: "2hr 5s",
    },
  ];

  function youtube_parser(url) {
    url = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    return url[2] !== undefined ? url[2].split(/[^0-9a-z_\-]/i)[0] : url[0];
  }

  return (
    <div className="activity-list">
      {activityInfo.map(({ id, img, video, activity, durationTime }) => (
        <ActivityCard
          id={id}
          img={img}
          video={youtube_parser(video)}
          activity={activity}
          durationTime={durationTime}
        />
      ))}

      <Box sx={{ "& > :not(style)": { m: 1 } }}>
        <Fab color="primary" aria-label="add">
          <AddIcon fill="red" />
        </Fab>
      </Box>
    </div>
  );
}

export default ActivityCardList;
