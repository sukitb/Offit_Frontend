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
      youtubeUrl: "https://www.youtube.com/watch?v=ml6cT4AZdqI",
      title: "yoca",
      durationTime: "3600",
    },
    {
      id: 2,
      img: Meditate,
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




  //  function urlCheck(url) {
  //   if (url.includes("youtube.com")) {
  //     url = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
  //     return url[2] !== undefined ? url[2].split(/[^0-9a-z_\-]/i)[0] : url[0];
  //   } else {
  //     return url  
  //   }
  // }

  


  return (
    <div className="activity-list">

      {activityInfo.map(({ id, img, url, youtubeUrl, title, durationTime }) => (
        <ActivityCard
          key={id}
          img={img}
          youtubeUrl={youtubeUrl}
          title={title}
          durationTime={durationTime}
        />
      ))}

      
    </div>
  );
}

export default ActivityCardList;
