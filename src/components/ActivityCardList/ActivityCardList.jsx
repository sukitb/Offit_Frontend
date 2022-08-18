import React from "react";
import { useState } from "react";
import ActivityCard from "../ActivityCard/ActivityCard";
import "./ActivityCardList.css";
import CreateForm from "../FormExercisePost/FormExercisePost";
import styled from "@emotion/styled";


function ActivityCardList() {
  const activityInfoMock = [
    {
      id: 1,
      img: "",
      video: "https://www.youtube.com/watch?v=ml6cT4AZdqI",
      title: "yoca",
      durationTime: "3600",
    },
    {
      id: 2,
      img: "../src/assets/yoca.jpg",
      video: "",
      title: "yoca2",
      durationTime: "300",
    },
    {
      id: 3,
      img: "",
      video: "https://www.youtube.com/embed/yMNLa17g9uc",
      title: "yoca3",
      durationTime: "1200",
    },
    {
      id: 4,
      img: "",
      video: "https://www.youtube.com/embed/yMNLa17g9uc",
      title: "yoca3",
      durationTime: "1200",
    },
  ];

  const [activityInfo, setActivityInfo] = useState(activityInfoMock);

  function youtube_parser(url) {
    url = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    return url[2] !== undefined ? url[2].split(/[^0-9a-z_\-]/i)[0] : url[0];
  }

  function secondsToHms(sec) {
    sec = Number(sec);
    const h = Math.floor(sec / 3600);
    const m = Math.floor((sec % 3600) / 60);

    const hDisplay = h > 0 ? h + (h == 1 ? " hr " : " hr ") : "";
    const mDisplay = m > 0 ? m + (m == 1 ? " min " : " min ") : "";

    return hDisplay + mDisplay;
  }

  return (
    <div className="activity-list">

      {activityInfo.map(({ id, img, video, title, durationTime }) => (
        <ActivityCard
          key={id}
          img={img}
          video={youtube_parser(video)}
          title={title}
          durationTime={secondsToHms(durationTime)}
        />
      ))}

      
    </div>
  );
}

export default ActivityCardList;
