import React from "react";
import { useState } from "react";
import ActivityCard from "../ActivityCard/ActivityCard";
import "./ActivityCardList.css";
import Jogging from "../../assets/activities-icon/Jogging.svg";
import Meditate from "../../assets/activities-icon/Meditate.svg";
import { useEffect } from "react";
import axios from "axios";
import { ActivityIcons } from "../Utils/ActivitiyIcons";
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'

function ActivityCardList() {

  const [activityInfo, setActivityInfo] = useState([]);

  const fetchActivities = async () => {
    const { data } = await axios.get("http://localhost:8080/activities");
    console.log(data);
    setActivityInfo(data)
    return data;
  };
  
    const { data, error, isError, isLoading } = useQuery(['activities'], fetchActivities)

    if (isLoading) {
      return <div>Loading...</div>
    }

    if (isError) {
      return <div>Error {error.message}</div>
    }


  return (
    <div className="activity-list">
      {activityInfo.map(({ id, image, youtubeUrl, title, duration }) => (
        <ActivityCard
          key={id}
          img={ActivityIcons[image]}
          youtubeUrl={youtubeUrl}
          title={title}
          durationTime={duration}
        />
      ))}
    </div>
  );
}

export default ActivityCardList;
