import React from "react";
import { useState } from "react";
import ActivityCard from "../ActivityCard/ActivityCard";
import "./ActivityCardList.css";
import CreateForm from "../FormExercisePost/FormExercisePost";
import styled from "@emotion/styled";
import Jogging from "../../assets/activities-icon/Jogging.svg"
import Meditate from "../../assets/activities-icon/Meditate.svg"


function ActivityCardList() {
  const activityInfoMock = [
    {
      id: 1,
      img: "",
      url: "",
      youtubeUrl: "https://www.youtube.com/watch?v=ml6cT4AZdqI",
      title: "yoca",
      durationTime: "3600",
    },
    {
      id: 2,
      img: Meditate,
      url: "https://www.google.com",
      youtubeUrl: "",
      title: "yoca2",
      durationTime: "300",
    },
    {
      id: 3,
      img: Jogging,
      url: "",
      youtubeUrl: "",
      title: "Jogging with momo",
      durationTime: "300",
    }
  ];

  const [activityInfo, setActivityInfo] = useState(activityInfoMock);


  function secondsToHms(sec) {
    sec = Number(sec);
    const h = Math.floor(sec / 3600);
    const m = Math.floor((sec % 3600) / 60);

    const hDisplay = h > 0 ? h + (h == 1 ? " hr " : " hr ") : "";
    const mDisplay = m > 0 ? m + (m == 1 ? " min " : " min ") : "";

    return hDisplay + mDisplay;
  }

  //  function urlCheck(url) {
  //   if (url.includes("youtube.com")) {
  //     url = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
  //     return url[2] !== undefined ? url[2].split(/[^0-9a-z_\-]/i)[0] : url[0];
  //   } else {
  //     return url  
  //   }
  // }

  function youtubeParser(url) {
    url = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    return url[2] !== undefined ? url[2].split(/[^0-9a-z_\-]/i)[0] : url[0];
  }


  return (
    <div className="activity-list">

      {activityInfo.map(({ id, img, url, youtubeUrl, title, durationTime }) => (
        <ActivityCard
          key={id}
          img={img}
          url={url}
          youtubeVideoId={youtubeParser(youtubeUrl)}
          title={title}
          durationTime={secondsToHms(durationTime)}
        />
      ))}

      
    </div>
  );
}

export default ActivityCardList;
